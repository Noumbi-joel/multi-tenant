import {
  AdminGeneral,
  AdminLayout,
  AdminLegal,
  AdminSettingAccount,
  AdminSettingHeader,
  AdminSocials,
} from "@/components";
import { useSearchParams } from "next/navigation";

export default function SettingsPage() {
  const router = useSearchParams();

  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <AdminSettingHeader router={router} />

        {router.get("nav") === "gen" ? (
          <AdminGeneral />
        ) : router.get("nav") === "acc" ? (
          <AdminSettingAccount />
        ) : router.get("nav") === "soc" ? (
          <AdminSocials />
        ) : (
          <AdminLegal />
        )}
      </div>
    </AdminLayout>
  );
}