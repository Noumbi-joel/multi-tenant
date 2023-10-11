import { auth } from "@/firebase.config";
import { signOut } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-hot-toast";
import { clearAdminCookie } from "./cookies";

export const logoutAdmin = (
    setVisible: Dispatch<SetStateAction<boolean>>,
    router: AppRouterInstance
  ) => {
    clearAdminCookie();
    toast.promise(signOut(auth), {
      loading: "Signing out...",
      success: () => {
        router.push(`/`);
        setVisible(false);
        return "Signed out successfully";
      },
      error: (err) => {
        setVisible(false);
        return err.message;
      },
    });
  };
  
  
  export const logoutUser = (router: AppRouterInstance) => {
    toast.promise(signOut(auth), {
      loading: "Signing out...",
      success: () => {
        router.push(`/`);
        return "Signed out successfully";
      },
      error: (err) => {
        return err.message;
      },
    });
  };