import { Typography } from "@/components";
import React from "react";

type Props = {
  title: string | undefined;
  content: string | undefined;
  withRoute?: boolean;
};

const StoreFrontTitle = ({ title, content, withRoute }: Props) => {
  if (withRoute) {
    return (
      <div className="text-center mt-8 md:px-20 px-5">
        <Typography variant="h3" className="font-medium text-3xl">
          {title || "Dummy title"}
        </Typography>
        <Typography className="text-gray-900 my-4 text-sm md:text-base mx-5">
          {content!.split("/")[0] +
            " / " +
            content!.split("/")[1] +
            " / " +
            content!.split("/")[2] +
            " / "}
          <Typography className="text-gray-500 inline-flex">
            {content!.split("/")[3]}
          </Typography>
        </Typography>
      </div>
    );
  }
  return (
    <div className="text-center mt-8 md:px-20 px-5">
      <Typography variant="h3" className="font-medium text-3xl">
        {title}
      </Typography>
      <Typography className="text-gray-500 my-4 text-sm md:text-base mx-5">
        {content}
      </Typography>
    </div>
  );
};

export default StoreFrontTitle;
