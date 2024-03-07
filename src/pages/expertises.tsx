import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import MultipleItems from "@/components/Carousel";
const expertises = () => {
  return (
    <>
      <TracingBeam>
        <div
          id="expertises"
          className="relative px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid  gap-10 lg:grid-cols-8 z-50 min-h-screen">
            <div
              className="absolute top-20 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[500px]"
              style={{
                background:
                  "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)",
              }}
            ></div>
            <div className="md:pt-10 col-span-4 sm:gap-6 flex flex-col text-center z-30">
              <h5 className="semibold mb-4 text-5xl sm:text-7xl font-extrabold leading-none">
                Mes expertises
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
                  href="#"
                  variant="flat"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-xl font-medium text-slate-50 backdrop-blur-3xl">
                    Je réserve mon call
                  </span>
                </Button>
              </div>
            </div>
            <div className="col-span-4 z-30">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full h-full rounded-[150px]  sm:h-96"
                src="/brain.png"
                alt=""
              />
            </div>
          </div>

          <div className="grid  gap-10 lg:grid-cols-8 z-50 ">
            <div
              className="absolute top-20 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[500px]"
              style={{
                background:
                  "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)",
              }}
            ></div>
            <div className="col-span-8 z-30">
              <h1 className="semibold text-center text-4xl md:text-6xl">
                La programmation neuro-linguistique
              </h1>
            </div>
            <div className=" col-span-8 md:col-span-4 z-30">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-[350px] md:w-[450px] h-full rounded-[150px]  sm:h-96"
                src="/brain.png"
                alt=""
              />
            </div>
            <div className="col-span-8 md:pt-10 md:col-span-4 sm:gap-6 flex flex-col z-30">
              <p className="outfit mb-6 text-lg text-justify sm:text-start text-gray-700 pr-1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
              </p>
            </div>
          </div>

          <div className="relative px-4 py-16 flex flex-col items-center justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div
              className="absolute z-0 md:top-32 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[500px]"
              style={{
                background:
                  "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)",
              }}
            ></div>
            <div className="lg:shadow-2xl  ld:bg-slate-50/30 lg:drop-shadow-lg relative z-30 lg:shadow-gray-500 lg:max-w-3xl lg:border-slate-50 lg:border-1 lg:p-10  lg:rounded-[60px]">
              <div className="text-center flex justify-center items-center">
                <h1 className="semibold pb-5 text-3xl md:text-6xl">
                  3 Bénifices de la PNL
                </h1>
              </div>
              <div className="grid max-w-2xl mx-auto">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-2 h-10 opacity-100 sm:h-24" />
                    <div>
                      <div className="medium text-3xl flex text-slate-50 items-center justify-center w-14 h-14  bg-black  rounded-full">
                        1
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-700" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Read the recipe
                      </p> */}
                      <p className="text-sm md:text-medium text-justify text-gray-700">
                        All recipes are written using certain conventions, which
                        define the characteristics of common ingredients. The
                        rules vary from place to place.All recipes are written
                        using certain conventions, which define the
                        characteristics of common ingredients. The rules vary
                        from place to place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-700 sm:h-24" />
                    <div>
                      <div className="medium text-3xl text-slate-50 flex items-center justify-center w-14 h-14  font-medium bg-black rounded-full">
                        2
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-700" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Heart attack
                      </p> */}
                      <p className="text-sm md:text-medium text-justify text-gray-700">
                        A flower in my garden, a mystery in my panties. Heart
                        attack never stopped old Big Bear. I didn't even know we
                        were calling him Big Bear. All recipes are written using
                        certain conventions, which define the characteristics of
                        common ingredients. The rules vary from place to place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-700 sm:h-24" />
                    <div>
                      <div className="medium flex text-slate-50 items-center justify-center w-14 h-14 text-3xl font-medium bg-black rounded-full">
                        3
                      </div>
                    </div>
                    <div className="w-px h-full opacity-0" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Never stop
                      </p> */}
                      <p className="text-sm md:text-medium text-justify text-gray-700">
                        The first mate and his Skipper too will do their very
                        best to make the others comfortable in their tropic
                        island nest. Michael Knight a young loner.All recipes
                        are written using certain conventions, which define the
                        characteristics of common ingredients. The rules vary
                        from place to place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 items-center justify-center space-x-4">
                  <Button
                    as={Link}
                    className="relative  inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    href="#"
                    variant="flat"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-xl font-medium text-slate-50 backdrop-blur-3xl">
                      Je réserve mon call
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid  gap-10 lg:grid-cols-8 z-50">
            <div className="col-span-8 z-30">
              <h1 className="semibold text-center text-5xl md:text-6xl">
                L&apos;intelligence émotionnelle
              </h1>
            </div>

            <div className="col-span-8 md:pt-10 md:col-span-4 sm:gap-6 flex flex-col z-30">
              <p className="outfit mb-6 text-lg text-start text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.Sed
                ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae explicabo. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
              </p>
            </div>
            <div className="col-span-8 md:col-span-4 md:pl-12 z-30">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-[450px] h-full rounded-[150px]  sm:h-96"
                src="/brain.png"
                alt=""
              />
            </div>
          </div>

          <div className="relative px-4 py-16 flex justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div
              className="absolute z-0 md:top-32 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[500px]"
              style={{
                background:
                  "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)",
              }}
            ></div>
            <div className="lg:shadow-2xl lg:bg-slate-50/30 lg:drop-shadow-lg relative z-30 lg:shadow-gray-500 lg:max-w-3xl  lg:p-10 lg:border-slate-50 lg:border-1 lg:rounded-[60px]">
              <div className="text-center flex justify-center items-center">
                <h1 className="semibold pb-5 text-4xl md:text-5xl">
                  3 Bénifices de l&apos;intelligence émotionnelle
                </h1>
              </div>
              <div className="grid max-w-2xl mx-auto">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-2 h-10 opacity-100 sm:h-24" />
                    <div>
                      <div className="medium text-3xl flex text-slate-50 items-center justify-center w-14 h-14  bg-black  rounded-full">
                        1
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-700" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Read the recipe
                      </p> */}
                      <p className="text-sm md:text-medium text-justify text-gray-700">
                        All recipes are written using certain conventions, which
                        define the characteristics of common ingredients. The
                        rules vary from place to place.All recipes are written
                        using certain conventions, which define the
                        characteristics of common ingredients. The rules vary
                        from place to place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-700 sm:h-24" />
                    <div>
                      <div className="medium text-3xl text-slate-50 flex items-center justify-center w-14 h-14  font-medium bg-black rounded-full">
                        2
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-700" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Heart attack
                      </p> */}
                      <p className="text-sm md:text-medium text-justify text-gray-700">
                        A flower in my garden, a mystery in my panties. Heart
                        attack never stopped old Big Bear. I didn't even know we
                        were calling him Big Bear. All recipes are written using
                        certain conventions, which define the characteristics of
                        common ingredients. The rules vary from place to place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-700 sm:h-24" />
                    <div>
                      <div className="medium flex text-slate-50 items-center justify-center w-14 h-14 text-3xl font-medium bg-black rounded-full">
                        3
                      </div>
                    </div>
                    <div className="w-px h-full opacity-0" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Never stop
                      </p> */}
                      <p className="text-sm md:text-medium text-justify text-gray-700">
                        The first mate and his Skipper too will do their very
                        best to make the others comfortable in their tropic
                        island nest. Michael Knight a young loner.All recipes
                        are written using certain conventions, which define the
                        characteristics of common ingredients. The rules vary
                        from place to place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 items-center justify-center space-x-4">
                  <Button
                    as={Link}
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    href="#"
                    variant="flat"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-xl font-medium text-slate-50 backdrop-blur-3xl">
                      Je réserve mon call
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </>
  );
};

export default expertises;
