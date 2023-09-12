import React from "react";
import { Button, Card } from "@/components";
import Image from "next/image";

export default function StoreFrontSignInPage() {
  return (
    <div className="grid place-content-center h-screen">
      <Card
        color="transparent"
        className="p-5 border border-grayscale-300 mt-5"
      >
        <Button
          variant="outlined"
          className="transparent flex items-center justify-center gap-2 border border-grayscale-300"
          fullWidth
        >
          <Image alt="google" src="/google.svg" width={22} height={22} />
          Google
        </Button>
      </Card>
    </div>
  );
}