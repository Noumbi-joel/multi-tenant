import { STORES } from "@/constants";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const getStore = async (docName: string) => {
  const storeDoc = doc(db, STORES, docName);

  const storeData = await getDoc(storeDoc);

  if (storeData.exists()) return storeData.data();

  return null;
};
