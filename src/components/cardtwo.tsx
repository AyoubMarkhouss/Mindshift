"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Cristal from "./icons/Cristal";

export function Cardtwo() {
  return (
    <CardContainer className="inter-var md:px-5 sm:w-96 -mt-14">
      {/* <Cristal className="absolute z-30 w-12 h-12 sm:w-16 sm:h-16 right-1 -top-3" /> */}
      <CardBody className="bg-slate-50/60 backdrop-blur-md shadow-lg relative text-center group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-slate-50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="medium text-2xl text-center pl-16">
          Séance Unique <br /> Focus Immédiat
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-justify text-sm md:text-medium max-w-sm mt-2 dark:text-neutral-300"
        >
          • Une intervention ponctuelle pour des résultats immédiats <br /> •
          Session d&apos;1h30 en visio pour un accompagnement ciblé <br /> •
          Concentre ton énergie sur un besoin spécifique <br /> • Dépasse un
          obstacle, clarifie une situation, ou obtiens des conseils pratiques
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
