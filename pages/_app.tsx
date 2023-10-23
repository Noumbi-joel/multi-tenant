import { Toaster } from "react-hot-toast";
import { store } from "@/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
