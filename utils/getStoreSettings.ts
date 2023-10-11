import {
  SETTINGS_COLLECTION,
  SETTINGS_GENERAL,
  SETTINGS_LEGAL,
  SETTINGS_SOCIAL_PROFILES,
  STORES,
} from "@/constants";
import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-hot-toast";

export const getStoreSettings = async (site: string) => {
  const settingsRef = collection(
    db,
    `${STORES}/${site}/${SETTINGS_COLLECTION}`
  );
  try {
    const storeSettings = await getDocs(settingsRef);
    if (!storeSettings.empty) {
      const settings = storeSettings.docs.map((el) => el.data());
      const legal = settings.find((el) => el?.id === SETTINGS_LEGAL);
      const general = settings.find((el) => el?.id === SETTINGS_GENERAL);
      const socialProfiles = settings.find(
        (el) => el?.id === SETTINGS_SOCIAL_PROFILES
      );

      return {
        legal: legal ?? null,
        general: general ?? null,
        socialProfiles: socialProfiles ?? null,
      };
    } else {
      return null;
    }
  } catch (err: any) {
    toast.error(err?.message);
  }
};
