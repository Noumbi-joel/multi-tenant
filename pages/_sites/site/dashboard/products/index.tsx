import React from "react";
import { AdminEmptyUI, AdminHeader, AdminLayout } from "@/components";

export default function CategoriesPage() {
  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <AdminHeader
          title="Products"
          amount={0}
          link="/_sites/site/dashboard/products/create?i=ca"
        />
        
        <AdminEmptyUI title="Products" />
      </div>
    </AdminLayout>
  );
}
