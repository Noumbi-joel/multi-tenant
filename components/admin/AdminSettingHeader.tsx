import { SETTINGS } from "@/constants";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";
import React from "react";

type Props = {
  router: ReadonlyURLSearchParams;
};

const AdminSettingHeader = ({ router }: Props) => {
  return (
    <div>
      <Typography
        variant="h4"
        className="font-medium text-xl sm:text-2xl text-gray-900 mb-8"
      >
        Settings
      </Typography>
      <div className="flex items-center gap-5">
        {SETTINGS.map((setting) => (
          <Link
            href={setting.link}
            key={setting.id}
            className={
              setting.title === "General" && router.get("nav") === "gen"
                ? "text-grayscale-900 border-b border-b-gray-900 pb-2"
                : setting.title === "Account" && router.get("nav") === "acc"
                ? "text-grayscale-900 border-b border-b-gray-900 pb-2"
                : setting.title === "Socials" && router.get("nav") === "soc"
                ? "text-grayscale-900 border-b border-b-gray-900 pb-2"
                : setting.title === "Legal" && router.get("nav") === "leg"
                ? "text-grayscale-900 border-b border-b-gray-900 pb-2"
                : `text-grayscale-500 text-base`
            }
          >
            <Typography>{setting.title}</Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSettingHeader;
