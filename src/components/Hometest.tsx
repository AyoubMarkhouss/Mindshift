import React from "react";
import { Button } from "@nextui-org/react";
import { TracingBeam } from "./ui/tracing-beam";
import Link from "next/link";
import { Cardone } from "./cardone";
import { Cardtwo } from "./cardtwo";
import { Cardthree } from "./cardthree";
import Image from "next/image";

const Hometest = () => {
  return (
    <div className="px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid  gap-10 lg:grid-cols-8">
        <div className=" col-span-4 sm:gap-6 flex flex-col text-center">
          <h5 className="semibold mb-4 text-5xl sm:text-7xl font-extrabold leading-none">
            Brown fox jumps over a lazy dog
          </h5>
          <p className=" mb-6 text-gray-300">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <Button
              as={Link}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="#"
              variant="flat"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-orange px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
                Je réserve mon call
              </span>
            </Button>
          </div>
        </div>
        <div className="col-span-4">
          <Image
            width={1000}
            height={1000}
            className="object-cover w-full h-56 rounded shadow-2xl shadow-gray-900 sm:h-96"
            src="/coaching.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="mt-10 md:mt-14  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col shadow-2xl shadow-gray-800 max-w-screen-lg overflow-hidden bg-white border rounded lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <Image
              width={1000}
              height={1000}
              src="/coaching.jpg"
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 -right-2 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center gap-1 p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="medium inline-block px-3 py-px mb-4 text-xl md:text-2xl font-semibold tracking-wider text-white uppercase rounded-full bg-teal">
                Qui suis-je ?
              </p>
            </div>
            <h5 className="medium mb-3 text-4xl text-black font-extrabold leading-none sm:text-5xl">
              Je suis Hiba ..
            </h5>
            <p className="mb-5 text-gray-800 text-justify">
              <span className="font-bold">Lorem ipsum</span> dolor sit amet,
              consectetur adipiscing elit. Etiam sem neque, molestie sit amet
              venenatis et, dignissim ut erat. Sed aliquet velit id dui
              eleifend, sed consequat odio sollicitudin.Lorem ipsum Lorem
              ipsumdolor sit amet, consectetur adipiscing elit. Etiam sem neque,
              molestie sit amet venenatis et, dignissim ut erat. Sed aliquet
              velit id dui eleifend, sed consequat odio sollicitudin. dolor sit
              amet, consectetur adipiscing elit. Etiam sem neque, molestie sit
              amet venenatis et, dignissim ut erat. Sed aliquet velit id dui
              eleifend, sed consequat odio sollicitudin.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="semibold text-orange text-4xl md:text-6xl">
                Qu&apos;est-ce que je t&apos;apporte ?
              </h2>
              <p className="text-base text-gray-300 md:text-lg pt-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae. explicabo. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae. explicabo.Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                width={1000}
                height={1000}
                className="shadow-2xl shadow-gray-800 object-cover mb-6 rounded h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="/coaching.jpg"
                alt=""
              />
              <Image
                width={1000}
                height={1000}
                className="shadow-2xl shadow-gray-800 object-cover w-20 h-20 rounded sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="/coaching.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <Image
                width={1000}
                height={1000}
                className="shadow-2xl shadow-gray-800 object-cover w-40 h-40 rounded sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="/coaching.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="semibold max-w-lg mb-6 text-5xl leading-none tracking-tight text-teal sm:text-6xl md:mx-auto">
            Comment ?
          </h2>
          <p className="text-base text-gray-400 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
          <Cardone />
          <Cardtwo />
          <Cardthree />
        </div>
        <div className="grid grid-cols-4">
          <div></div>
          <div className="flex justify-center pr-6 sm:pr-0">
            <Button
              as={Link}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="#"
              variant="flat"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-orange px-6  py-1 text-sm font-medium text-white backdrop-blur-3xl">
                En savoir plus
              </span>
            </Button>
          </div>
          <div className="flex justify-center pl-6 sm:pl-0">
            <Button
              as={Link}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="#"
              variant="flat"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-orange px-6  py-1 text-sm font-medium text-white backdrop-blur-3xl">
                En savoir plus
              </span>
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hometest;
