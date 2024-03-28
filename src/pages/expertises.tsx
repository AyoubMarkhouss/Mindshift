import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import MultipleItems from "@/components/Carousel";
import Scrolltop from "@/components/Scrolltop";
import Head from "next/head";
const expertises = () => {
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <title>Mindshift coaching - Expertises</title>
        <meta property="og:image" content="/logo2.png" />
      </Head>
      <TracingBeam>
        <Scrolltop />
        <div
          id="expertises"
          className="relative px-4 min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid pb-44  gap-10 lg:grid-cols-8 z-50" id="hero">
            <div
              className="absolute top-20 inset-0 blur-[140px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[550px]"
              style={{
                background:
                  "linear-gradient(135.89deg, rgb(64, 162, 227) 25.91%, rgb(173, 136, 198) 45% )",
              }}
            ></div>
            <div className="col-span-1"></div>
            <div className="lg:pt-20 col-span-6 sm:gap-6 flex flex-col text-center z-30">
              <h1 className="semibold mb-4 text-5xl sm:text-7xl font-extrabold leading-none">
                Mes expertises
              </h1>
              <p className=" mb-6 text-gray-700 text-xl">
                Je t&apos;aide à reprogrammer ton cerveau pour plus de bonheur
                et de maîtrise. Gère tes émotions, renforce ta confiance et
                construis des relations saines.
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

          <div className="grid  gap-10 lg:grid-cols-8 z-50 ">
            {/* <div
              className="absolute top-20 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[500px]"
              style={{
                background:
                  "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)",
              }}
            ></div> */}
            <div className="col-span-8 z-30">
              <h2 className="semibold text-center text-4xl md:text-6xl">
                La programmation neuro-linguistique
              </h2>
            </div>
            <div className=" col-span-8 lg:col-span-4 z-30">
              <Image
                width={1000}
                height={1000}
                className="object-cover lg:w-full lg:h-full md:w-1/2 scale-85"
                src="/brain1.png"
                alt=""
              />
            </div>
            <div className="col-span-8 md:pt-10 md:col-span-4 sm:gap-6 flex flex-col z-30">
              <p className="outfit mb-6 text-lg text-justify sm:text-start text-gray-700 pr-1">
                La PNL, c&apos;est bien plus qu&apos;une simple discipline,
                c&apos;est un sésame pour débloquer la porte de ta
                transformation personnelle. En tant que coach certifiée en PNL,
                je m&apos;appuie sur cette approche puissante pour
                t&apos;accompagner pleinement dans ton évolution. On explore la
                relation entre le langage, le comportement et les schémas
                cognitifs pour comprendre profondément tes processus mentaux.
                Ensemble, on va utiliser cette méthode pour dénicher les
                obstacles qui peuvent te freiner, puis reprogrammer ton cerveau
                vers des schémas mentaux positifs afin d&apos;atteindre tes
                objectifs les plus profonds.
              </p>
            </div>
          </div>

          <div className="relative px-4 py-16 flex flex-col items-center justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div
              className="absolute z-0 md:top-32 inset-0 blur-[178px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
              style={{
                background:
                  // "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)",
                  "linear-gradient(135.89deg, rgb(64, 162, 227) 35.91%, rgb(173, 136, 198) 35% )",
              }}
            ></div>
            <div className="lg:shadow-2xl  ld:bg-slate-50/30 lg:drop-shadow-lg relative z-30 lg:shadow-gray-500 lg:max-w-3xl lg:border-slate-50 lg:border-1 lg:p-10  lg:rounded-[60px]">
              <div className="text-center flex justify-center items-center">
                <h2 className="semibold pb-5 text-3xl md:text-6xl">
                  3 Bénifices de la PNL
                </h2>
              </div>
              <div className="grid max-w-2xl mx-auto">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-2 h-10 opacity-100 sm:h-24" />
                    <div>
                      <div className="medium text-3xl flex text-slate-50 items-center justify-center w-14 h-14  bg-black  rounded-full">
                        1
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-700" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Read the recipe
                      </p> */}
                      <p className="text-sm md:text-xl text-justify text-gray-700">
                        Grâce à la PNL, tu développeras des compétences en
                        communication exceptionnelles, t&apos;aidant à établir
                        des relations sociales plus profondes et significatives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-700 sm:h-24" />
                    <div>
                      <div className="medium text-3xl text-slate-50 flex items-center justify-center w-14 h-14  font-medium bg-black rounded-full">
                        2
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-700" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Heart attack
                      </p> */}
                      <p className="text-sm md:text-xl text-justify text-gray-700">
                        La PNL te permet de mieux comprendre tes pensées et
                        émotions, favorisant une relation positive avec toi-même
                        et renforçant l&apos;estime de soi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-700 sm:h-24" />
                    <div>
                      <div className="medium flex text-slate-50 items-center justify-center w-14 h-14 text-3xl font-medium bg-black rounded-full">
                        3
                      </div>
                    </div>
                    <div className="w-px h-full opacity-0" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Never stop
                      </p> */}
                      <p className="text-sm md:text-xl text-justify text-gray-700">
                        En identifiant et en remodelant les schémas mentaux
                        négatifs, la PNL te conduit vers une confiance en toi
                        solide et durable, t&apos;encourageant à relever avec
                        assurance les défis de la vie.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 items-center justify-center space-x-4">
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
            </div>
          </div>

          <div className="grid  gap-10 lg:grid-cols-8 z-50">
            <div className="col-span-8 z-30">
              <h2 className="semibold text-center text-5xl md:text-6xl">
                L&apos;intelligence émotionnelle
              </h2>
            </div>

            <div className="col-span-8 md:pt-10 md:col-span-4 sm:gap-6 flex flex-col z-30">
              <p className="outfit mb-6 text-lg text-start text-gray-700">
                L&apos;intelligence émotionnelle, mesurée par le Quotient
                Emotionnel (QE). C&apos;est un outil essentiel pour cultiver une
                vie épanouissante. En tant que coach spécialisée, mon engagement
                profond, c&apos;est de t&apos;accompagner dans la compréhension
                et la gestion de tes émotions, créant ainsi un équilibre
                émotionnel solide et durable. Grâce à cette expertise, tu vas
                développer la capacité de prendre des décisions éclairées, de
                favoriser des relations interpersonnelles épanouissantes, et de
                vivre une vie plus saine et gratifiante. <br /> En embrassant
                pleinement ton intelligence émotionnelle, nous tricotons
                ensemble le fil d&apos;une existence plus riche et équilibrée.
              </p>
            </div>
            <div className="col-span-8 md:col-span-4 md:pl-12 z-30">
              <Image
                width={1000}
                height={1000}
                className="object-cover lg:w-full lg:h-full md:w-1/2 scale-85"
                src="/brain2.png"
                alt=""
              />
            </div>
          </div>

          <div className="relative px-4 py-16 flex justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div
              className="absolute z-0 md:top-32 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
              style={{
                background:
                  // "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)"
                  "linear-gradient(135.89deg, rgb(64, 162, 227) 35.91%, rgb(173, 136, 198) 35% )",
              }}
            ></div>
            <div className="lg:shadow-2xl lg:bg-slate-50/30 lg:drop-shadow-lg relative z-30 lg:shadow-gray-500 lg:max-w-3xl  lg:p-10 lg:border-slate-50 lg:border-1 lg:rounded-[60px]">
              <div className="text-center flex justify-center items-center">
                <h2 className="semibold pb-5 text-4xl md:text-5xl">
                  3 Bénifices de l&apos;intelligence émotionnelle
                </h2>
              </div>
              <div className="grid max-w-2xl mx-auto">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-2 h-10 opacity-100 sm:h-24" />
                    <div>
                      <div className="medium text-3xl flex text-slate-50 items-center justify-center w-14 h-14  bg-black  rounded-full">
                        1
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-700" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Read the recipe
                      </p> */}
                      <p className="text-sm md:text-xl text-justify text-gray-700">
                        En développant ton intelligence émotionnelle, tu
                        affineras ta capacité à comprendre et à réagir aux
                        émotions des autres, favorisant des relations plus
                        harmonieuses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-700 sm:h-24" />
                    <div>
                      <div className="medium text-3xl text-slate-50 flex items-center justify-center w-14 h-14  font-medium bg-black rounded-full">
                        2
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-700" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Heart attack
                      </p> */}
                      <p className="text-sm md:text-xl text-justify text-gray-700">
                        L&apos;intelligence émotionnelle t&apos;aidera à mieux
                        gérer tes émotions internes, renforçant ainsi une
                        connexion positive avec toi-même et améliorant
                        l&apos;estime personnelle.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-px h-10 bg-gray-700 sm:h-24" />
                    <div>
                      <div className="medium flex text-slate-50 items-center justify-center w-14 h-14 text-3xl font-medium bg-black rounded-full">
                        3
                      </div>
                    </div>
                    <div className="w-px h-full opacity-0" />
                  </div>
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div>
                      {/* <p className="text-xl font-semibold sm:text-base">
                        Never stop
                      </p> */}
                      <p className="text-sm md:text-xl text-justify text-gray-700">
                        En comprenant et en canalisant efficacement tes
                        émotions, tu développeras une vision claire de tes
                        objectifs, te donnant la force émotionnelle nécessaire
                        pour les atteindre avec succès.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 items-center justify-center space-x-4">
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
            </div>
          </div>
        </div>
      </TracingBeam>
    </>
  );
};

export default expertises;
