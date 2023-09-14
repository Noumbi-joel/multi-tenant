import React from "react";
import { StoreLayout, StoreFrontCheckoutForm } from "@/components";

export default function StoreFrontCheckoutPage() {
  return (
    <StoreLayout>
      <div className="grid place-content-center mt-6 w-full h-screen bg-grayscale-300">
        <StoreFrontCheckoutForm />
      </div>
    </StoreLayout>
  );
}
