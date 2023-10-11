import { CUSTOMERS_COLLECTION, FAILED, ORDERS_COLLECTION, PRODUCTS_COLLECTION, STORES, SUCCESS, TRANSACTIONS_COLLECTION } from "@/constants";
import { auth, db } from "@/firebase.config";
import { collection, doc, increment, updateDoc } from "firebase/firestore";
import { clearCheckoutCredentials, getCheckoutCredentials } from "@/utils";
import { toast } from "react-hot-toast";

export const updatePaymentInfos = async (site: string, failed: boolean) => {
    const siteRef = doc(db, STORES, site);
    const transactionRef = collection(siteRef, TRANSACTIONS_COLLECTION);
    const productRef = collection(siteRef, PRODUCTS_COLLECTION);
    const orderRef = collection(siteRef, ORDERS_COLLECTION);
    const customerRef = collection(siteRef, CUSTOMERS_COLLECTION);
    const cred = getCheckoutCredentials();
    let cartItemsIds;
  
    if (cred.cartItemsIds !== null) {
      cartItemsIds = JSON.parse(cred.cartItemsIds);
    }
  
    if (!cred.orderId || !cred.transactionId || !cred.totalPrice) {
      return;
    }
  
    try {
      const updatedAt = new Date().toISOString();
      await updateDoc(doc(transactionRef, cred.transactionId), {
        status: failed ? FAILED : SUCCESS,
        updatedAt,
      });
  
      await updateDoc(doc(orderRef, cred.orderId), {
        status: failed ? FAILED : SUCCESS,
        updatedAt,
      });
  
      if (!failed) {
        await updateDoc(doc(customerRef, auth.currentUser?.uid), {
          totalSpent: increment(parseInt(cred.totalPrice)),
          totalOrders: increment(1),
        });
        cartItemsIds.map((id: string) => {
          updateDoc(doc(productRef, id), {
            purchaseNumber: increment(1),
          });
        });
      } else {
        await updateDoc(doc(customerRef, auth.currentUser?.uid), {
          totalOrders: increment(1),
        });
      }
    } catch (err: any) {
      toast.error(err?.message);
    } finally {
      clearCheckoutCredentials();
    }
  };
  