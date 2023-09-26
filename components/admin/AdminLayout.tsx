import React from "react";
import { VerticalNav, Drawer, ErrorOverlay } from "@/components";
import { ErrorBoundary } from "react-error-boundary";

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
          <VerticalNav drawer={isVisible} />
        </Drawer>
        
        {children}
      </ErrorBoundary>
    </div>
  );
}