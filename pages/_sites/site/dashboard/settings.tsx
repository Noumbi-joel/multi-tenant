import {
  AdminGeneral,
  AdminLayout,
  AdminLegal,
  AdminSettingAccount,
  AdminSettingHeader,
  AdminSocials,
} from "@/components";

export default function SettingsPage() {

  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <AdminSettingHeader />

          <AdminGeneral />
          <AdminSettingAccount />
          <AdminSocials />
          <AdminLegal />
      </div>
    </AdminLayout>
  );
}
