import {
    AdminEmptyUI,
    AdminHeader,
    AdminLayout,
  } from "@/components";
  import React from "react";
  
  export default function CategoriesPage() {
  
    return (
      <AdminLayout>
        <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
          <AdminHeader
            title="Categories"
            amount={0}
            link="/_sites/site/dashboard/categories/create?i=ca"
          />
            <AdminEmptyUI title="categories" />
        </div>
      </AdminLayout>
    );
  }