import React from "react";
import { Button } from "@nextui-org/react";
import { TracingBeam } from "./ui/tracing-beam";
import Link from "next/link";
import { Cardone } from "./cardone";
import { Cardtwo } from "./cardtwo";
import { Cardthree } from "./cardthree";
import Image from "next/image";
import { Cardwhy } from "./cardwhy";
import Flower2 from "./icons/Flower2";
import Flower from "./icons/Flower";
import { Faq } from "./Faq";
import MultipleItems from "./Carousel";
import Scrolltop from "./Scrolltop";

const Hometest = () => {
  return (
    <>
      <TracingBeam>
        <Scrolltop />
        <div className="relative px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="lg:pt-16 grid  gap-10 lg:grid-cols-8 z-50" id="hero">
            <div
              className="absolute top-20 inset-0 blur-[150px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[550px]"
              style={{
                background:
                  "linear-gradient(135.89deg, rgb(64, 162, 227) 25.91%,rgb(173, 136, 198) 45% )",
              }}
            ></div>
            <div className="col-span-1"></div>
            <div className=" col-span-6 sm:gap-6 flex flex-col text-center z-30">
              <h5 className="semibold mb-4 text-5xl sm:text-7xl font-extrabold leading-none">
                Mindshift Coaching
              </h5>
              <p className=" mb-6 text-gray-700 text-xl">
                C&apos;est la safe place où je t&apos;accompagne, en tant que
                coach certifiée et passionnée, à définir tes objectifs et à
                tracer le chemin vers la vie qui te fait vibrer.
              </p>

              <div className="flex items-center justify-center space-x-4">
                <Button
                  as={Link}
                  className="relative shadow-2xl shadow-slate-700 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="https://calendly.com/icyliftss-coaching/60-minute-meeting?month=2024-03"
                  variant="flat"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-xl font-medium text-slate-50 backdrop-blur-3xl">
                    Ma première séance offerte 
                  </span>
                </Button>
              </div>
            </div>
            <div className="col-span-1"></div>
            {/* <div className="hidden overflow-hidden py-5 md:block md:col-span-4  z-30">
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full h-full scale-150"
                src="/icon.png"
                alt=""
              />
            </div> */}
          </div>

          <div className="relative mt-10  md:mt-14  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {/* <Flower2 className="hidden lg:block z-30 absolute w-44 h-44 top-7 right-1" />
            <Flower className="hidden lg:block z-20 absolute w-44 h-44 bottom-0 left-0" /> */}
            <div className="flex flex-col shadow-xl shadow-gray-400 max-w-screen-lg overflow-hidden bg-white border rounded-[100px] lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <Image
                  width={1000}
                  height={1000}
                  src="/hiba.jpg"
                  alt=""
                  className="object-cover w-full lg:absolute h-80 lg:h-full"
                />
              </div>
              <div className="flex z-30 flex-col justify-center gap-1 p-8 bg-slate-50/30 backdrop-blur-sm lg:p-16 lg:pl-10 lg:w-1/2">
                <div>
                  <p className="medium inline-block px-3 py-px mb-4 text-xl md:text-2xl font-semibold tracking-wider text-slate-50 uppercase rounded-full bg-black">
                    Qui suis-je ?
                  </p>
                </div>
                <h5 className="medium mb-3 text-3xl text-black font-extrabold leading-none sm:text-4xl">
                  Bienvenue sur Mindshift,
                </h5>
                <p className="mb-5 text-gray-800 text-justify">
                  l&apos;endroit où on entame ensemble ton parcours vers le
                  changement positif ! Je suis coach et formatrice, doublement
                  certifiée et super enthousiaste de t&apos;accompagner dans ta
                  transformation personnelle et professionnelle. J&apos;ai déjà
                  consacré des centaines d&apos;heures de coaching à aider des
                  personnes comme toi à surmonter des obstacles, à repousser
                  leurs limites et à instaurer des changements durables dans
                  leur vie. C&apos;est une expérience passionnante et
                  enrichissante, et j&apos;ai hâte de mettre cette expertise à
                  ta disposition. Mon approche est centrée sur toi. On va
                  explorer tes points forts, identifier où on peut booster un
                  peu, et je vais te fournir des outils concrets pour
                  t&apos;aider à réaliser tes aspirations. À chaque séance de
                  coaching, c&apos;est l&apos;occasion de réflexion, de
                  croissance et de prises de conscience perso.
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div className="max-w-xl mb-6">
                  <h2 className="semibold text-black text-4xl md:text-6xl">
                    Qu&apos;est-ce que je t&apos;apporte ?
                  </h2>
                  <p className="text-base text-gray-800 md:text-lg pt-4">
                    Sur Mindshift, je suis là pour te fournir des outils
                    pratiques et une clarté qui résonnent avec qui tu es
                    vraiment. Grâce à des techniques issues de la PNL et de
                    l&apos;intelligence émotionnelle, tu découvriras comment
                    gérer le quotidien avec plus de confiance et
                    d&apos;authenticité. <br /> En travaillant ensemble, nous
                    alignerons tes aspirations avec tes actions, te permettant
                    de repartir avec un plan concret et des compétences que tu
                    pourras utiliser dans toutes les facettes de ta vie. <br />{" "}
                    Mon engagement ne se limite pas à nos sessions ; je suis là
                    pour t&apos;offrir un soutien continu. <br /> À la fin de
                    notre parcours, tu auras non seulement élargi ta
                    compréhension de toi-même, mais aussi acquis des outils
                    tangibles pour naviguer plus sereinement dans ta vie
                    quotidienne. <br /> Prêt à faire ce voyage de transformation
                    ? Let&apos;s make the shift!
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center -mx-4 lg:pl-8">
                {/* <div className="flex flex-col items-end px-3">
                  <Image
                    width={1000}
                    height={1000}
                    className="shadow-2xl shadow-gray-600 object-cover mb-6 rounded-[100px] h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    src="/coaching.jpg"
                    alt=""
                  />
                  <Image
                    width={1000}
                    height={1000}
                    className="shadow-2xl shadow-gray-600 object-cover w-20 h-20 rounded-[100px] sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                    src="/coaching.jpg"
                    alt=""
                  />
                </div> */}
                <div className="px-3">
                  <Image
                    width={1000}
                    height={1000}
                    className="shadow-2xl shadow-gray-600 object-cover w-screen h-56 rounded-[100px] sm:h-full xl:h-full sm:w-64 xl:w-full"
                    src="/canapé.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div
              className="absolute top-56 inset-0 blur-[138px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[500px]"
              style={{
                background:
                  // "linear-gradient(106.89deg, rgb(240, 229, 207) 15.73%, rgb(253, 191, 96) 55.30%, rgba(232, 121, 249, 0.26) 56.49%, rgb(243, 215, 202) 115.91%)",
                  "linear-gradient(135.89deg, rgb(64, 162, 227) 35.91%, rgb(173, 136, 198) 35% )",
              }}
            ></div>
            <div className="z-30 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="semibold max-w-lg mb-6 text-5xl leading-none tracking-tight text-black sm:text-6xl md:mx-auto">
                Comment ?
              </h2>
              {/* <p className="text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p> */}
            </div>

            <div className=" grid max-w-md gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
              <Cardone />
              <Cardtwo />
              <Cardthree />
            </div>
            {/* <div className="grid grid-cols-4">
              <div></div>
              <div className="flex justify-center pr-6 sm:pr-0">
                <Button
                  as={Link}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="#"
                  variant="flat"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6  py-1 text-sm font-medium text-slate-50 backdrop-blur-3xl">
                    En savoir plus
                  </span>
                </Button>
              </div>
              <div className="flex justify-center pl-6 sm:pl-0">
                <Button
                  as={Link}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="#"
                  variant="flat"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6  py-1 text-sm font-medium text-slate-50 backdrop-blur-3xl">
                    En savoir plus
                  </span>
                </Button>
              </div>
              <div></div>
            </div> */}
            <div className="flex justify-center items-center">
              <Button
                as={Link}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                href="/services"
                variant="flat"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6  py-1 text-sm font-medium text-slate-50 backdrop-blur-3xl">
                  En savoir plus
                </span>
              </Button>
            </div>
          </div>

          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <Cardwhy />
          </div>
          <div className="relative">
            <div
              className="absolute top-20 inset-0 blur-[118px] max-w-lg h-[300px] mx-auto sm:max-w-3xl sm:h-[300px]"
              style={{
                background:
                  "linear-gradient(135.89deg, rgb(64, 162, 227) 35.91%, rgb(173, 136, 198) 35% )",
              }}
            ></div>
            <MultipleItems />
          </div>
          <div className="pt-10">
            <Faq />
          </div>
        </div>
      </TracingBeam>
    </>
  );
};

export default Hometest;
