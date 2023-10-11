import { OWNERS } from "@/constants";
import { db } from "@/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const checkIfAlreadyOwner = async (email: string) => {
  if (email) {
    const res = await getDoc(doc(db, OWNERS, email));

    if (res.exists()) {
      if (res.data()?.isOwner) {
        return true;
      }
      return false;
    } else {
      return undefined;
    }
  }
};
