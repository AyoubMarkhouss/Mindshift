import React from "react";
import { Button } from "@nextui-org/react";

const Hometest = () => {
  return (
    <main className="h-screen ">
      <div
        className="absolute top-10 inset-0 blur-[100px] max-w-lg h-screen mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(60.89deg, rgba(13, 126, 131, 1) 15.73%, rgba(239, 108, 53, 1) 85.91%)",
        }}
      ></div>
      <div className="h-[calc(100vh_-_80px)] grid grid-cols-6" id="Home">
        <div className=" col-span-6 flex gap-3 sm:gap-6 flex-col justify-center items-center sm:items-center px-5">
          <h1 className="semibold text-6xl md:text-8xl z-30 ">
            This is Mindshift
          </h1>
          <h2 className="medium text-5xl z-30">lorem impsum si mhamd</h2>

          <p className="sm:text-3xl max-w-3xl text-justify z-30">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia
            at modi. Quisquam ut ex a velit quis nulla explicabo modi aperiam
            delectus, consectetur quo, voluptate dolorum qui harum quae. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Unde quia at
            modi. Quisquam ut ex a velit quis nulla explicabo modi aperiam
            delectus, consectetur quo, voluptate dolorum qui harum quae. Lorem
            ipsum dolor, sit amet consectetur adipisicing
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hometest;
