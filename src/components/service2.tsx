"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Service2() {
  return (
    <div className="h-[30rem] my-6 w-full flex items-center justify-center ">
      <PinContainer
        title="Je réserve mon 1er call gratuit"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex gap-4 basis-full flex-col mx-auto p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-80 md:w-[25rem] min-h-[20rem] ">
          <h3 className="medium max-w-md text-4xl !pb-2 !m-0  text-black">
            L&apos;accompagnement complet
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              totam excepturi facilis itaque corporis suscipit consequatur
              numquam eligendi explicabo nesciunt accusamus inventore, cumque
              cupiditate, ad nisi voluptatum laboriosam laborum dignissimos.orem
              ipsum dolor, sit amet consectetur adipisicing elit. Dolor totam
              excepturi facilis itaque corporis suscipit consequatur numquam
              eligendi explicabo nesciunt accusamus inventor.
            </span>
          </div>

          <h1 className="medium text-xl text-black ">Prix : 2300 Dhs</h1>
        </div>
      </PinContainer>
    </div>
  );
}
