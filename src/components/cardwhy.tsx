"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Flower from "./icons/Flower";
import Questionmark from "./icons/Questionmark";

export function Cardwhy() {
  return (
    <CardContainer className="inter-var md:px-5 w-auto md:w-[40rem] lg:w-[60rem] -mt-14">
      <CardBody className=" bg-slate-50/30 backdrop-blur-md shadow-lg relative text-center group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-slate-950 w-auto  sm:w-[60rem] h-auto rounded-[50px] p-6 border  ">
        {/* <Flower className="w-20 h-20 md:w-36 md:h-36 absolute -top-6 -left-5 md:-top-12 md:-left-14" />
        <Questionmark className="w-20 h-20 md:w-32 md:h-32 absolute -right-5 -top-6 md:-right-5 md:-top-10" /> */}
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
          Si tu ressens cette envie de progresser dans ta vie, que ce soit sur
          le plan sportif, professionnel ou personnel, tu sais peut-être déjà ce
          que c&apos;est que de buter contre des obstacles. Que ce soit le
          doute, le manque de discipline, la confiance en toi qui
          s&apos;ébranle, ou la peur de l&apos;échec, ces barrières peuvent
          sembler insurmontables. Je ne suis pas là pour te livrer un discours
          préfabriqué, mais pour t&apos;accompagner concrètement vers une
          version plus affirmée de toi-même. Inutile de se prendre la tête,
          ensemble, nous allons travailler sur ces obstacles. En réservant un
          coaching, tu t&apos;engages dans une démarche pratique, une
          exploration qui te mènera vers une réalisation personnelle et
          professionnelle authentique.
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
