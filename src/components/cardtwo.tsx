"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Cardtwo() {
  return (
    <CardContainer className="inter-var md:px-5 sm:w-96 -mt-14">
      <CardBody className="bg-gray-50 relative text-center group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-teal dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="medium text-3xl md:py-5 dark:text-white"
        >
          Abonnement mensuel
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-justify text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, ab illo.
          Atque, soluta provident. Maiores aspernatur tenetur hic voluptas quo,
          a reiciendis, magnam, aperiam assumenda vel asperiores ducimus
          obcaecati blanditiis? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ex, ab illo. Atque, soluta provident. Maiores
          aspernatur tenetur hic voluptas quo, a reiciendis, magnam, aperiam
          assumenda vel asperiores ducimus obcaecati blanditiis?
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
