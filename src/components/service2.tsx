"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Service2() {
  return (
    <div className="h-[30rem] my-6 w-full flex items-center justify-center ">
      <PinContainer
        title="Je réserve mon 1er call gratuit"
        href="https://mambaui.com/components/testimonial"
      >
        <div className="flex gap-4 basis-full flex-col mx-auto p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-80 md:w-[25rem] min-h-[20rem] ">
          <h3 className="medium max-w-md text-4xl !pb-2 !m-0  text-black">
            L&apos;accompagnement complet
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Si tu ressens le besoin d&apos;une immersion complète pour
              reprogrammer ton cerveau et atteindre des objectifs concrets,
              l&apos;Accompagnement Complet chez Mindshift est la solution
              idéale. Cette formule s&apos;étale sur 8 semaines, offrant une
              première séance bilan pour cerner tes besoins et fixer des
              objectifs clairs. Les 7 séances suivantes, d&apos;1h30 chacune en
              visio, te permettront de bénéficier d&apos;un suivi continu,
              consolidant ainsi les progrès entre chaque étape. Au-delà
              d&apos;une simple assistance, c&apos;est une véritable aventure de
              transformation personnelle et professionnelle qui t&apos;attend.
              Prêt à consacrer 8 semaines à la construction d&apos;une nouvelle
              vie ?
            </span>
          </div>

          <h1 className="medium text-xl text-black ">Prix : 560 euros</h1>
        </div>
      </PinContainer>
    </div>
  );
}
