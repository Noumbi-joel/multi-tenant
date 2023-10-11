import { STORES } from "@/constants";
import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const getStores = async () => {
  const storesRef = collection(db, STORES);
  const stores = await getDocs(storesRef);

  return stores.docs.map((q) => ({
    id: q.id,
    ...q.data(),
  }));
};
