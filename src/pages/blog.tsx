import { BentoGridDemo } from "@/components/Bloggrid";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

const blog = () => {
  return (
    <>
      <TracingBeam>
        <div
          id="blog"
          className=" px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="flex flex-col justify-center items-center text-center pb-10 ">
            <h1 className="semibold text-4xl md:text-6xl">Booster votre start up</h1>
            <p className="outfit text-lg max-w-[500px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita non dolores modi eligendi dolor molestias esse blanditi
            </p>
          </div>
          <BentoGridDemo />
        </div>
      </TracingBeam>
    </>
  );
};

export default blog;
