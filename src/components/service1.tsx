"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Service1() {
  return (
    <div className="h-[30rem] my-6 w-full flex items-center justify-center ">
      <PinContainer title="Je réserve mon 1er call gratuit" href="/contact">
        <div className="flex gap-7 basis-full flex-col mx-auto p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-80 md:w-[19rem] min-h-[20rem] ">
          <h3 className="medium max-w-md text-4xl !pb-2 !m-0 text-center text-black">
            Les séances à la carte
          </h3>
          <div className="text-base text-justify !m-0 !p-0 font-normal">
            <span className="text-black ">
              • Si tu cherches une intervention ponctuelle, ma séance unique
              offre une solution rapide et ciblée. <br />• Cette session
              d&apos;1h30 en visio te permet de concentrer ton énergie sur un
              besoin spécifique. <br />• Que ce soit pour dépasser un obstacle,
              clarifier une situation ou obtenir des conseils pratiques, cette
              séance est conçue pour te fournir une impulsion immédiate vers le
              changement positif. <br />• Prêt à faire de cette séance unique un
              moment décisif dans ta progression ?
            </span>
          </div>

          <h1 className="medium text-xl text-black ">Prix : 80 euros</h1>
        </div>
      </PinContainer>
    </div>
  );
}
