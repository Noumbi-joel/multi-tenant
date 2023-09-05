import { Typography } from "@/components";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  amount: string;
  graphImage: string;
};

const AdminAnalyticBox = ({ graphImage, title, amount }: Props) => {
  return (
    <div className="flex justify-between rounded-lg border border-grayscale-300 p-5">
      <div>
        <Typography className="text-xs text-grayscale-500 uppercase">
          {title}
        </Typography>
        <Typography className="text-xl text-grayscale-900 uppercase font-medium mt-2">
          {title === "total orders" ? amount : parseInt(amount).toLocaleString("us-US", {
            currency: "USD",
            style: "currency",
          })}
        </Typography>
      </div>
      <Image
        alt="today's sales"
        src={`/${graphImage}`}
        width={70}
        height={32}
      />
    </div>
  );
};

export default AdminAnalyticBox;
