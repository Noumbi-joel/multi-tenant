import { Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdminWelcomeBanner = () => {
  return (
    <div className="p-5 bg-primary-200 h-[115px] my-5 flex items-center rounded-2xl">
      <Image alt="exclamation" src="/exclamation.svg" width={24} height={24} />
      &nbsp;
      <div className="flex flex-col gap-1">
        <Typography className="text-base text-gray-900">
          Welcome to your Eduka!
        </Typography>
        <Typography className="text-sm font-medium text-gray-900">
          If you have any questions, email to support@myeduka.com
        </Typography>
        <Link href="mailto:support@myduka.com" className="cursor-pointer">
          <Typography className="text-sm font-medium text-primary-base cursor-pointer">
            Contact Support
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default AdminWelcomeBanner;