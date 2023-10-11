import { PRODUCTS_COLLECTION, STORES } from "@/constants";
import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-hot-toast";

export const getStoreProducts = async (site: string) => {
    const productsRef = collection(
      db,
      `${STORES}/${site}/${PRODUCTS_COLLECTION}`
    );
  
    try {
      const products = await getDocs(productsRef);
  
      if (!products.empty) {
        return products.docs.map((customer) => customer.data());
      } else {
        return [];
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };