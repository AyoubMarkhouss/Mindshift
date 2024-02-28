"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Flower from "./icons/Flower";
import Questionmark from "./icons/Questionmark";

export function Cardwhy() {
  return (
    <CardContainer className="inter-var md:px-5 w-auto sm:w-[60rem] -mt-14">
      <CardBody className=" bg-slate-50/30 backdrop-blur-md shadow-lg relative text-center group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-slate-950 w-auto  sm:w-[60rem] h-auto rounded-[50px] p-6 border  ">
        <Flower className="w-20 h-20 md:w-36 md:h-36 absolute -top-6 -left-5 md:-top-12 md:-left-14" />
        <Questionmark className="w-20 h-20 md:w-32 md:h-32 absolute -right-5 -top-6 md:-right-5 md:-top-10" />
        <CardItem
          translateZ="50"
          className="semibold w-full text-center text-4xl md:text-6xl md:py-5 dark:text-white"
        >
          Pourquoi ?
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-justify text-sm md:text-lg w-full mt-2 dark:text-neutral-300"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, ab illo.
          Atque, soluta provident. Maiores aspernatur tenetur hic voluptas quo,
          a reiciendis, magnam, aperiam assumenda vel asperiores ducimus
          obcaecati blanditiis? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ex, ab illo. Atque, soluta provident. Maiores
          aspernatur tenetur hic voluptas quo, a reiciendis, magnam, aperiam
          assumenda vel asperiores ducimus obcaecati blanditiis? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Ex, ab illo. Atque,
          soluta provident. Maiores aspernatur tenetur hic voluptas quo, a
          reiciendis, magnam, aperiam assumenda vel asperiores ducimus obcaecati
          blanditiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ex, ab illo. Atque, soluta provident. Maiores aspernatur tenetur hic
          voluptas quo, a reiciendis, magnam, aperiam assumenda vel asperiores
          ducimus obcaecati blanditiis?
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
