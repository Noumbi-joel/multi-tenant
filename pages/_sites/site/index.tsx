import {
  StoreFrontBanner,
  StoreFrontCategoryList,
  StoreFrontProductList,
  StoreFrontTitle,
  StoreLayout,
} from "@/components";
import React from "react";

export default function StoreFrontHomePage() {
  return (
    <StoreLayout>
      <section>
        <StoreFrontBanner />
        <StoreFrontTitle
          title={"Dummy trend title"}
          content={"Dummy trend description"}
        />
      </section>

      <StoreFrontProductList />

      <StoreFrontCategoryList
        mainTitleCat={"Dummy title category"}
        mainTitleCatDetails={"Dummy title category details"}
      />
    </StoreLayout>
  );
}
