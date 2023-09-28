import { AdminHeader, AdminLayout } from "@/components";
import React from "react";

export default function CreateCategoryPage() {
  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <AdminHeader
          create
          title={"Create category"}
          link="/_sites/site/dashboard/categories?i=ca"
        />

        <div className="h-[1px] bg-gray-300 mt-11" />
        
        {/* create a category form here */}
      </div>
    </AdminLayout>
  );
}
