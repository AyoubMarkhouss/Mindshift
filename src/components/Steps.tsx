import React from "react";
import Image from "next/image";
const Steps = () => {
  return (
    <div className="z-30 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div
        className="absolute z-0 top-20 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[500px]"
        style={{
          background:
            "linear-gradient(126.89deg, rgb(240, 229, 207) 35.73%, rgb(253, 191, 96) 65.30%, rgb(127, 39, 255) 25.91% ,rgb(159, 112, 253) 10.49%)",
        }}
      ></div>
      <div className="relative z-30 flex items-center justify-center pb-10">
        <h1 className="semibold text-black text-4xl md:text-6xl">
          Le déroulement des séances
        </h1>
      </div>
      <div className="relative z-30 grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">
                Séance 1 &apos;OFFERTE&apos; - The first date
              </p>
              <p className="text-gray-700">
                Notre premier rendez-vous est c de mieux se connaître. On
                discutera de tes objectifs, de tes défis et de tes aspirations.
                Cette séance posera les bases de notre partenariat de coaching.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">
                Séances 2 à 7 - The Transformation
              </p>
              <p className="text-gray-700">
                Au cours de ces 6 semaines intermédiaires, on plongera
                profondément dans ton développement perso. Chaque séance sera
                axée sur des sujets spécifiques, comme l&apos;organisation, la
                confiance en toi, la discipline, l&apos;équilibre émotionnel, et
                bien plus encore. On travaillera ensemble pour élaborer des
                stratégies, des programmes et des solutions personnalisées qui
                t&apos;aideront à atteindre tes objectifs
              </p>
            </div>
          </div>
          {/* <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Séance 8 -The final step</p>
              <p className="text-gray-700">
                Notre dernière séance marquera le point culminant de ton voyage.
                On passera en revue tes progrès, on célébrera tes réussites et
                on discutera des étapes à suivre pour maintenir et renforcer les
                résultats obtenus. Tu repartiras avec des outils et une vision
                claire pour ton avenir
              </p>
            </div>
          </div> */}
          {/* <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Step 4</p>
              <p className="text-gray-700">
                If one examines precultural libertarianism, one is faced with a
                choice: either accept rationalism or conclude that context is a
                product.
              </p>
            </div>
          </div> */}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Séance 8 -The final step</p>
              <p className="text-gray-700">
                Notre dernière séance marquera le point culminant de ton voyage.
                On passera en revue tes progrès, on célébrera tes réussites et
                on discutera des étapes à suivre pour maintenir et renforcer les
                résultats obtenus. Tu repartiras avec des outils et une vision
                claire pour ton avenir
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:mt-10">
          <Image
            width={1000}
            height={1000}
            about="zz"
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-80 lg:absolute lg:h-96"
            alt=""
            src="/ppl.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
