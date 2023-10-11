import { STORES } from "@/constants";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const checkIfAdmin = async (email: string, site: string) => {
  if (email && site) {
    const siteDoc = await getDoc(doc(db, STORES, site));

    if (siteDoc.data()?.owner?.ownerEmail === email) {
      return true;
    }
    return false;
  }
};
