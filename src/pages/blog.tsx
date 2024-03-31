import B1 from "@/components/Blog/B1";
import { BentoGridDemo } from "@/components/Bloggrid";
import Scrolltop from "@/components/Scrolltop";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Head from "next/head";
import React from "react";

const blog = () => {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <title>Mindshift coaching - Blog</title>
        <meta property="og:image" content="/logo2.png" />
      </Head>
      <TracingBeam>
        <Scrolltop />
        <div
          id="blog"
          className=" px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div
            className="flex flex-col justify-center items-center text-center pb-16 "
            id="hero"
          >
            <h1 className="semibold text-4xl md:text-6xl">Blog</h1>
            {/* <p className="outfit text-lg max-w-[500px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita non dolores modi eligendi dolor molestias esse blanditi
            </p> */}
          </div>
          {/* <BentoGridDemo /> */}
          <B1 />
        </div>
      </TracingBeam>
    </>
  );
};

export default blog;
