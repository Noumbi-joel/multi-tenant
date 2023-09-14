import { AdminHeader, AdminLayout, CreateProductForm } from "@/components";
import React from "react";

type Props = {};

export default function CreateProductPage({}: Props) {
  return (
    <AdminLayout>
      <div className="min-h-screen w-screen px-5 sm:px-10 pt-5">
        <AdminHeader
          create
          title={"Create product"}
          link="/_sites/site/dashboard/products/create?i=p"
        />

        <div className="h-[1px] bg-gray-300 mt-11" />

        <CreateProductForm />
      </div>
      <div className="hidden sm:h-5" />
    </AdminLayout>
  );
}
