import { AdminEmptyUI, AdminHeader, AdminLayout } from "@/components";

export default function OrdersPage() {
  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <AdminHeader title="Orders" amount={0} rest />

        <AdminEmptyUI title="orders" />
      </div>
    </AdminLayout>
  );
}
