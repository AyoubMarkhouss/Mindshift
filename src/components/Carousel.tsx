import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import style from "styled-jsx/style";
import Cheveronright from "./icons/Cheveronright";
import Cheveronleft from "./icons/Cheveronleft";

function SampleNextArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 cursor-pointer -right-8"
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      <Cheveronright className="hidden sm:flex md:w-10 w-5" />
    </div>
  );
}

function SamplePrevArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-1/2 cursor-pointer -left-8"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Cheveronleft className="md:w-10 w-5" />
    </div>
  );
}
function MultipleItems() {
  const settings = {
    dots: true,

    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="max-w-[22rem] h-72 px-6 py-10 mt-16 bg-slate-50/30 backdrop-blur-md rounded-2xl border-1 border-black ">
          <div className="relative flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>
          {/* 
          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2> */}

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Hey Hiba, ton coaching a été une révélation dans ma transformation
            physique ! Avant de découvrir ton accompagnement, je pensais que mes
            rêves étaient hors de portée, mais avec tes conseils et ton soutien
            constant, j&apos;ai dépassé mes limites. Merci de m&apos;avoir
            montré que chaque petit pas compte.
          </p>
        </div>
        <div className="max-w-[22rem] h-72 px-6 py-10 mt-16 bg-slate-50/30 backdrop-blur-md rounded-2xl border-1 border-black ">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>

          {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2> */}

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Ton coaching a été un véritable tournant dans ma vie
            d&apos;entrepreneure. Jongler entre tout était épuisant, mais grâce
            à toi, j&apos;ai trouvé l&apos;équilibre, pris des décisions plus
            confiantes et fait grandir mon entreprise tout en prenant soin de
            moi. Une transformation réelle et durable, merci !
          </p>
        </div>
        <div className="max-w-[22rem] h-72 px-6 py-10 mt-16 bg-slate-50/30 backdrop-blur-md rounded-2xl border-1 border-black ">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>

          {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2> */}

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Salut Hiba, je voulais te remercier pour ton coaching incroyable.
            Les études étaient un défi constant, mais grâce à toi, j&apos;ai
            surmonté le stress, organisé ma vie de manière efficace et trouvé la
            motivation pour exceller. Merci pour tout !
          </p>
        </div>

        <div className="max-w-[22rem] h-72 px-6 py-10 mt-16 bg-slate-50/30 backdrop-blur-md rounded-2xl border-1 border-black ">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>

          {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2> */}

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Hello Hiba, je tenais à te dire combien ton coaching a été précieux
            pour renforcer ma confiance personnelle. Tes conseils et tes
            exercices sont d&apos;une efficacité hallucinante. J&apos;ai appris
            à m’aimer et me respecter profondément grâce à toi, je t&apos;en
            remercie !!
          </p>
        </div>

        <div className="max-w-[22rem] h-72 px-6 py-10 mt-16 bg-slate-50/30 backdrop-blur-md rounded-2xl border-1 border-black ">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>

          {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2> */}

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Coucou ! je voulais partager avec toi l&apos;impact immense de ton
            coaching sur ma confiance en prise de parole. Avant, l&apos;idée de
            parler en public me terrifiait, mais grâce à tes techniques,
            j&apos;ai appris à gérer le stress et à m&apos;exprimer avec
            assurance. Merci de m&apos;avoir donné la confiance nécessaire pour
            briller en public.
          </p>
        </div>

        <div className="max-w-[22rem] h-72 px-6 py-10 mt-16 bg-slate-50/30 backdrop-blur-md rounded-2xl border-1 border-black ">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>

          {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2> */}

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Salut Hiba, je voulais te partager comment ton coaching m&apos;a
            aidée à reconstruire ma confiance en moi après la longue période
            difficile que j&apos;ai traversée et durant laquelle tu m&apos;as
            accompagnée et épaulée. Grâce à ton soutien, j&apos;ai appris à
            accepter le changement et à voir en moi une force que j&apos;avais
            sous-estimée. Merci de m&apos;avoir guidée vers cette nouvelle
            version de moi.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
