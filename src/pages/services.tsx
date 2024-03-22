import { Service1 } from "@/components/service1";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Service2 } from "@/components/service2";
import { Service3 } from "@/components/service3";
import Steps from "@/components/Steps";
import Scrolltop from "@/components/Scrolltop";

const services = () => {
  return (
    <>
      <TracingBeam>
        <Scrolltop />
        <div
          id="services"
          className="relative px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid pb-32 gap-10 lg:grid-cols-8 z-50" id="hero">
            <div
              className="absolute top-20 inset-0 blur-[140px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[550px]"
              style={{
                background:
                  "linear-gradient(135.89deg, rgb(64, 162, 227) 25.91%, rgb(155, 207, 83) 45% )",
              }}
            ></div>
            <div className="md:pt-7 col-span-4 sm:gap-6 flex flex-col text-center z-30">
              <h5 className="semibold mb-4 text-5xl sm:text-7xl font-extrabold leading-none">
                Mes coaching
              </h5>
              <p className=" mb-6 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
              </p>

              <div className="flex items-center justify-center space-x-4">
                <Button
                  as={Link}
                  className="relative shadow-2xl shadow-slate-700 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="https://calendly.com/icyliftss-coaching/60-minute-meeting?month=2024-03"
                  variant="flat"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-xl font-medium text-slate-50 backdrop-blur-3xl">
                    Ma première séance offerte 
                  </span>
                </Button>
              </div>
            </div>
            <div className="hidden overflow-hidden py-5 md:block md:col-span-4  z-30">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full h-full scale-150 "
                src="/icon.png"
                alt=""
              />
            </div>
          </div>

          <div className="grid md:pt-20 grid-cols-1 lg:grid-cols-3 w-full">
            <div className="col-span-1 pt-5 sm:pt-0">
              <Service1 />
            </div>
            <div className="col-span-1 pt-10 sm:pt-0">
              <Service3 />
            </div>
            <div className="col-span-1 pt-24 pb-10 sm:pt-0 sm:pb-0">
              <Service2 />
            </div>
          </div>

          <Steps />
        </div>
      </TracingBeam>
    </>
  );
};

export default services;
