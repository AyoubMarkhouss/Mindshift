import Image from "next/image";
import { Inter } from "next/font/google";
import Hometest from "@/components/Hometest";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <link rel="icon" href="/icon.png" />
        <title>Mindshift coaching</title>
        <meta property="og:image" content="/logo2.png" />
      </Head>
      <Hometest />
    </>
  );
}
