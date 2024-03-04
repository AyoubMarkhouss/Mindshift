import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Navnext from "@/components/Navnext";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <main>
          <Navnext />
          <Component {...pageProps} />
         <Footer/>
        </main>
      </NextUIProvider>
    </>
  );
}
