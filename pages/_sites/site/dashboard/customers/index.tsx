import { AdminEmptyUI, AdminHeader, AdminLayout } from "@/components";
import React from "react";

export default function CustomersPage() {
  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <AdminHeader title="Customers" amount={0} rest />

        <AdminEmptyUI title="customers" />
      </div>
    </AdminLayout>
  );
}
