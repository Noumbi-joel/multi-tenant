import { STORES } from "@/constants";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const checkIfStoreExists = async (storeName: string) => {
  const res = await getDoc(doc(db, STORES, storeName));

  if (res.exists()) {
    return true;
  } else {
    return false;
  }
};
