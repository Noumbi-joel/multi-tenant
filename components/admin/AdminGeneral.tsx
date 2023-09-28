import {
  AdminGenFavicon,
  AdminGenLarge,
  AdminGenLogo,
  Button,
  Input,
  Textarea,
  Typography,
} from "@/components";
import { COUNTRY_LIST } from "@/constants";
import React from "react";

const AdminGeneral = () => {
  return (
    <form className="h-[600px] overflow-y-auto">
      <div className="my-4">
        <Typography className="text-base text-grayscale-900">
          Store details
        </Typography>
        <Typography className="text-sm text-grayscale-500">
          Eduka and your customers will use this information to contact you.
        </Typography>
      </div>
      <div className="my-4">
        <div className="grid gap-2">
          <Input label="Store name" color="indigo" />
          <Textarea label="Store description" color="indigo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input label="City" color="indigo" />
          <Input label="Postal code" color="indigo" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input label="Banner main title" color="indigo" />
          <Input label="Banner details" color="indigo" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input label="Main title" color="indigo" />
          <Input label="Main title details" color="indigo" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input label="Main title category" color="indigo" />
          <Input label="Main title category details" color="indigo" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <select
            className="border border-gray-400 h-11 rounded-md outline-none w-full"
            required
          >
            {React.Children.toArray(
              COUNTRY_LIST.map((val) => (
                <option className="text-sm text-grayscale-900" value={val}>
                  {val}
                </option>
              ))
            )}
          </select>

          <select
            className="border border-gray-400 h-11 rounded-md outline-none w-full"
            required
          >
            {React.Children.toArray(
              ["Littoral", "West"].map((val) => (
                <option className="text-sm text-grayscale-900" value={val}>
                  {val}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

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
