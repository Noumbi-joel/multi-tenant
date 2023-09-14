import {
  StoreFrontFilters,
  StoreFrontProductList,
  StoreFrontTitle,
  StoreLayout,
} from "@/components";
import React from "react";

export default function StoreFrontShopPage() {
  return (
    <StoreLayout>
      <div className="bg-grayscale-300 h-[1px] mt-6" />
      <div className="px-5 pt-5 md:px-20">
        <StoreFrontTitle
          title="Shop"
          content="There are all our products available"
        />

        <StoreFrontFilters />
      </div>
      <StoreFrontProductList />
    </StoreLayout>
  );
}
