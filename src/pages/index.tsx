import Image from "next/image";
import { Inter } from "next/font/google";
import Hometest from "@/components/Hometest";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Lampeff } from "@/components/Lampeff";
import { LampDemo } from "@/components/ui/lamp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <TracingBeam>
        <Hometest />
      </TracingBeam>
    </>
  );
}
