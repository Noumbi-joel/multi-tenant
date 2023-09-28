import {
  AdminGenFavicon,
  AdminGenLarge,
  AdminGenLogo,
  Button,
  AdminGeneralForm,
} from "@/components";
import React from "react";

const AdminGeneral = () => {
  return (
    <form className="h-[600px] overflow-y-auto">
      <AdminGeneralForm
        title="Store details"
        content="Eduka and your customers will use this information to contact you."
      />

      <AdminGenFavicon />

      <AdminGenLogo />

      <AdminGenLarge />

      <div className="my-5">
        <Button className="bg-primary-base" type="submit">
          Save
        </Button>
      </div>

      <div className="h-5 sm:hidden" />
    </form>
  );
};

export default AdminGeneral;
