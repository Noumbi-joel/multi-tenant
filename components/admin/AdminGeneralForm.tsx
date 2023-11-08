import { COUNTRY_LIST } from "@/constants";
import { Input, Textarea, Typography } from "@/components";
import React from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  title: string;
  content: string;
  register: UseFormRegister<ISettingsGeneral>
};

const AdminGeneralForm = ({ content, title, register }: Props) => {
  return (
    <>
      <div className="my-4">
        <Typography className="text-base text-grayscale-900">
          {title}
        </Typography>
        <Typography className="text-sm text-grayscale-500">
          {content}
        </Typography>
      </div>
      <div className="my-4">
        <div className="grid gap-2">
          <Input label="Store name" color="indigo" {...register("storeName")} />
          <Textarea
            label="Store description"
            color="indigo"
            {...register("storeDescription")}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input label="City" color="indigo" {...register("city")} />
          <Input
            label="Postal code"
            color="indigo"
            {...register("postalCode")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input
            label="Banner main title"
            color="indigo"
            {...register("bannerMainTitle")}
          />
          <Input
            label="Banner details"
            color="indigo"
            {...register("bannerDetails")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input label="Main title" color="indigo" {...register("mainTitle")} />
          <Input
            label="Main title details"
            color="indigo"
            {...register("mainTitleDetails")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
          <Input
            label="Main title category"
            color="indigo"
            {...register("mainTitleCategory")}
          />
          <Input
            label="Main title category details"
            color="indigo"
            {...register("mainTitleCategoryDetails")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <select
            className="border border-gray-400 h-11 rounded-md outline-none w-full"
            required
            {...register("country")}
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
            {...register("state")}
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
    </>
  );
};

export default AdminGeneralForm;
