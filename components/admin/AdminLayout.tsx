import React from "react";
import { VerticalNav, Drawer, ErrorOverlay } from "@/components";
import { ErrorBoundary } from "react-error-boundary";
import { RxCross1, RxPlus } from "react-icons/rx";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className="flex bg-white">
      <ErrorBoundary FallbackComponent={ErrorOverlay}>
        <VerticalNav />
        <Drawer
          open={isVisible}
          onClose={() => setIsVisible(!isVisible)}
          className="w-fit"
        >
          <VerticalNav />
        </Drawer>

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="md:hidden flex z-99 fixed bottom-5 right-5 w-9 h-9 items-center justify-center bg-primary-base rounded-full"
        >
          {!isVisible ? (
            <RxPlus className="w-5 h-5 text-white" />
          ) : (
            <RxCross1 className="w-5 h-5 text-white" />
          )}
        </button>

        {children}
      </ErrorBoundary>
    </div>
  );
}
