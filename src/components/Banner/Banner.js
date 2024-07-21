
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div className="relative bg-gray-100 flex flex-col justify-center items-center h-auto w-full p-4 md:flex-row md:h-96">
    <div className="w-full h-64 md:w-auto md:h-full">
      <Image className="h-full w-full object-cover" imgSrc={imgSrc} />
    </div>
    <div className="max-w-lg text-center mt-4 md:mt-0 md:text-left md:mr-24 md:ml-24">
      <h1 className="mb-4 text-3xl md:text-4xl font-bold text-black">{text}</h1>
      <p className="mb-6 text-lg md:text-xl text-gray-600">{Subtext}</p>
      <Link to={buttonLink}>
        <button className="bg-primeColor text-white text-lg font-bodyFont w-48 h-12 hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full flex justify-center">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full ${
          i === dotActive ? "bg-gray-800" : "bg-gray-300"
        } cursor-pointer`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div className="absolute bottom-4 w-full flex justify-center">
              <ul className="flex space-x-2">{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`w-3 h-3 rounded-full ${
                i === dotActive ? "bg-gray-800" : "bg-gray-300"
              } cursor-pointer`}
            ></div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Shop for the Latest Sneakers",
      Subtext:
        "Explore catalogues from the biggest brands and get it delivered to your doorstep.",
      buttonLink: "/shoes",
      buttonText: "Shop Shoes",
    },
    {
      imgSrc: bannerImgTwo,
      text: "Boost your Confidence with What you Wear",
      Subtext:
        "What you wear speaks a lot about your personality and status. Let us help you pick your right image.",
      buttonLink: "/clothes",
      buttonText: "Shop Clothes",
    },
    {
      imgSrc: bannerImgThree,
      text: "Time to Accessorize",
      Subtext:
        "Elevate your image by accessorizing with quality, functional, and classy accessories from our shop.",
      buttonLink: "/accessories",
      buttonText: "Shop Accessories",
    },
  ];

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
