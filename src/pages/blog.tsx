import { BentoGridDemo } from "@/components/Bloggrid";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

const blog = () => {
  return (
    <>
      <TracingBeam>
        <div
          id="blog"
          className="relative px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
            <BentoGridDemo/>
        </div>
      </TracingBeam>
    </>
  );
};

export default blog;
