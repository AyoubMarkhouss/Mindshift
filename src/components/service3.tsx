"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Service3() {
  return (
    <div className="h-[30rem] my-6 w-full flex items-center justify-center ">
      <PinContainer title="Je réserve mon 1er call gratuit" href="#contact">
        <div className="flex gap-4 basis-full flex-col mx-auto p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-80 md:w-[19rem] min-h-[20rem] ">
          <h3 className="medium max-w-md text-4xl !pb-2 !m-0 text-center text-black">
            L&apos;abonnement mensuel
          </h3>
          <div className="text-base text-justify !m-0 !p-0 font-normal">
            <span className="text-black ">
              • Pour un changement en douceur et continu, l&apos;abonnement
              mensuel est ta clé vers une transformation constante. <br />•
              Chaque mois, nous nous retrouvons lors d&apos;une séance
              d&apos;1h30 en visio pour explorer tes défis actuels, ajuster tes
              objectifs, et maintenir une dynamique positive. <br />• Avec un
              suivi régulier entre les sessions via WhatsApp, cet abonnement te
              garantit un soutien constant tout au long de ton parcours. <br />•
              Et en prime, la première séance bilan est gratuite. <br />• Prêt à
              faire de chaque mois une étape significative vers le changement
              positif ?
            </span>
          </div>

          <h1 className="medium text-xl text-black ">Prix : 55 euros</h1>
        </div>
      </PinContainer>
    </div>
  );
}
