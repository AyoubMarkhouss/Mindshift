import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import style from "styled-jsx/style";

// function SampleNextArrow({props}:any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow({props}:any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

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
        <div className="w-full px-8 py-10 mt-16 bg-transparent  rounded-2xl border-1 border-black shadow-xl ">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>

          <div className="flex justify-end mt-4">
            <Link
              href="#"
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              role="link"
            >
              John Doe
            </Link>
          </div>
        </div>
        <div className="w-full px-8 py-10 mt-16 bg-transparent  rounded-2xl border-1 border-black shadow-xl ">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>

          <div className="flex justify-end mt-4">
            <Link
              href="#"
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              role="link"
            >
              John Doe
            </Link>
          </div>
        </div>
        <div className="w-full px-8 py-10 mt-16 bg-transparent  rounded-2xl border-1 border-black shadow-xl ">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-20 h-20 border-2 border-black rounded-full "
              alt="Testimonial avatar"
              src="/brain.png"
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Design Tools
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>

          <div className="flex justify-end mt-4">
            <Link
              href="#"
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              role="link"
            >
              John Doe
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
