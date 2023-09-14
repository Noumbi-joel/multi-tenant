import React from "react";
import { StoreFrontCheckoutDone, StoreLayout } from "@/components";

export default function StoreFrontSuccessCheckout() {

  return (
    <StoreLayout>
      <div className="grid place-content-center mt-6 w-full h-screen bg-grayscale-300">
        <StoreFrontCheckoutDone />
      </div>
    </StoreLayout>
  );
}