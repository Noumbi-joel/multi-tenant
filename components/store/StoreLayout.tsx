import {
  ErrorOverlay,
  StoreFrontCart,
  StoreFrontFooter,
  StoreFrontHeader,
  StoreFrontMenu,
  StoreFrontMenuFilters,
} from "@/components";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <ErrorBoundary FallbackComponent={ErrorOverlay}>
        <Head>
          <link rel="shortcut icon" href={"/favicon.ico"} />
        </Head>
        <StoreFrontHeader />

        {/* <StoreFrontMenu />

        <StoreFrontMenuFilters />

        <StoreFrontCart /> */}

        <div>{children}</div>
        <StoreFrontFooter />
      </ErrorBoundary>
    </div>
  );
}
