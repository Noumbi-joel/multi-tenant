import { CATEGORIES_COLLECTION, STORES } from "@/constants";
import { db } from "@/firebase.config";
import { collection, doc, getDocs } from "firebase/firestore";
import { toast } from "react-hot-toast";

export const getStoreCategories = async (site: string) => {
  const siteRef = doc(db, STORES, site);
  const categoriesRef = collection(siteRef, CATEGORIES_COLLECTION);

  try {
    const categories = await getDocs(categoriesRef);
    if (!categories.empty) {
      const storeCategories = categories.docs.map((q) => q.data());
      return storeCategories;
    } else {
      return [];
    }
  } catch (err: any) {
    toast.error(err?.message);
  }
};
