import React from "react";

const Hometest = () => {
  return (
    <>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>

      <main className=" h-screen grid grid-cols-6" id="Home">
        <div className="col-span-6 flex gap-4 sm:gap-7 flex-col justify-center items-center sm:items-start px-5 lg:pl-24 md:pl-10 pt-[170px] md:pt-0">
          <h1 className="semibold text-6xl md:text-8xl z-30 ">
            This is Mindshift
          </h1>
          <h2 className="medium text-5xl z-30">lorem impsum si mhamd</h2>
          <p className="outfit text-3xl text-center z-30">
            Turning ideas into real life products is my calling.
          </p>
          <p className="text-3xl max-w-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia
            at modi. Quisquam ut ex a velit quis nulla explicabo modi aperiam
            delectus, consectetur quo, voluptate dolorum qui harum quae. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Unde quia at
            modi. Quisquam ut ex a velit quis nulla explicabo modi aperiam
            delectus, consectetur quo, voluptate dolorum qui harum quae. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Unde quia at
            modi. Quisquam ut ex a velit quis nulla explicabo modi aperiam
            delectus, consectetur quo, voluptate dolorum qui harum quae.
          </p>
        </div>
       
      </main>
    </>
  );
};

export default Hometest;
