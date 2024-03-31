import Image from "next/image";
import { Inter } from "next/font/google";
import Hometest from "@/components/Hometest";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content=" Incarnez votre idéal avec votre coach certifiée en PNL et intelligence émotionnelle. Coaching individuel personnalisé pour vous aider à atteindre vos objectifs et vivre une vie plus épanouie.
"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Mindshift coaching</title>
        <meta property="og:image" content="/logo2.png" />
      </Head>
      <Hometest />
    </>
  );
}
