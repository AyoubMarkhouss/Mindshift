import React from "react";

const Hometest = () => {
  return (
    <>
      <div
        className="absolute inset-0 blur-[100px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
        style={{
          background:
            "linear-gradient(120.89deg, rgba(13, 126, 131, 1) 15.73%,rgba(82, 120, 83, 1) 50.50%, rgba(239, 108, 53, 1) 85.91%)",
        }}
      ></div>

      <main className="sm:h-screen   grid grid-cols-6" id="Home">
        <div className="col-span-6 flex gap-3 sm:gap-6 flex-col justify-center items-center sm:items-center px-5">
          <h1 className="semibold text-6xl md:text-8xl z-30 ">
            This is Mindshift
          </h1>
          <h2 className="medium text-5xl z-30">lorem impsum si mhamd</h2>

          <p className="text-3xl max-w-3xl text-justify z-30">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia
            at modi. Quisquam ut ex a velit quis nulla explicabo modi aperiam
            delectus, consectetur quo, voluptate dolorum qui harum quae. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Unde quia at
            modi. Quisquam ut ex a velit quis nulla explicabo modi aperiam
            delectus, consectetur quo, voluptate dolorum qui harum quae. Lorem
            ipsum dolor, sit amet consectetur adipisicing
          </p>
        </div>
      </main>
    </>
  );
};

export default Hometest;
