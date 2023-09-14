import {
  StoreFrontProductList,
  StoreFrontTitle,
  StoreLayout,
  StoreFrontProductDetails,
} from "@/components";
import React from "react";

export default function StoreFrontProductDetailsPage() {

  return (
    <StoreLayout>
      <div className="bg-grayscale-300 h-[1px] mt-6" />
      <div className="px-5 pt-5 md:px-20">
        <StoreFrontTitle
          title={"Lemon"}
          content={`Home / Shop / Vegetables / Lemon`}
          withRoute
        />

        <StoreFrontProductDetails />
      </div>
      <StoreFrontTitle title="You may also like" content="" />
      <StoreFrontProductList />
    </StoreLayout>
  );
}
