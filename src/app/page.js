"use client";
import React from "react";
import Image from "next/image";
import lumen from "../../public/lumen.svg";
import hero1 from "../../public/hero/1.png";
import hero2 from "../../public/hero/2.png";
import hero3 from "../../public/hero/3.png";
import career1 from "../../public/career/home1.jpg";
import career2 from "../../public/career/home2.jpg";
import positiveEnergy from "../../public/positiveEnergy.jpg";
import glossier from "../../public/glossier.jpg";
import Link from "next/link";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { motion } from "framer-motion";
import ScrollFade from "./components/ScrollFade";
import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ProductCard = ({ title, img, imgalt, body, dir }) => {
  if (dir == "left") {
    return (
      <div className="w-full text-left  xl:flex xl:justify-start">
        <Image
          alt={imgalt}
          src={img}
          className="xl:ml-12 xl:mx-0 mx-auto w-full block max-w-2xl "
        />
        <div className=" items-center flex">
          <div className="xl:inline text-center xl:text-left block font-['Jost'] mt-12 xl:ml-16 text-5xl font-bold tracking-wide text-white">
            {title} <br />
            <div
              dangerouslySetInnerHTML={{ __html: body }}
              className="mt-6 xl:max-w-2xl  font-medium text-gray-300 text-xl"
            />
            <div className="mt-6 font-semibold xl:max-w-2xl text-[#ABFF3A] text-xl">
              Client:
              <div className="text-white font-medium mt-1">
                {" "}
                Positive Beverage LLC
              </div>
            </div>
            <div className="mt-6 font-semibold xl:max-w-2xl text-[#ABFF3A] text-xl">
              Services:
              <div className="flex font-medium space-x-6 xl:items-start xl:justify-start items-center justify-center mt-1 xl:px-0 px-4">
                <div className="text-white xl:inline">Art Direction</div>
                <div className="text-white xl:inline">Brand Identity</div>
                <div className="text-white xl:inline">Copywriting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full text-left  mt-32 grid xl:flex  xl:justify-end ">
        <div className="justify-center items-center flex">
          <div className="xl:inline text-center xl:text-right block font-['Jost'] mt-12 xl:mr-16 text-5xl font-bold tracking-wide text-white">
            {title} <br />
            <div
              dangerouslySetInnerHTML={{ __html: body }}
              className="mt-6 font-medium xl:max-w-2xl  text-gray-300 text-xl"
            />
            <div className="mt-6 font-semibold xl:max-w-2xl text-[#ABFF3A] text-xl">
              Client:
              <div className="text-white font-medium mt-1"> {title}</div>
            </div>
            <div className="mt-6 font-semibold xl:max-w-2xl text-[#ABFF3A] text-xl">
              Services:
              <div className="flex font-medium space-x-6 xl:items-end xl:justify-end items-center justify-center mt-1 xl:px-0 px-4">
                <div className="text-white xl:inline">Brand Identity</div>
                <div className="text-white xl:inline">Print</div>
                <div className="text-white xl:inline">Environments</div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={img}
          alt={imgalt}
          className="xl:mr-12 order-first xl:order-none xl:mx-0 mx-auto w-full block max-w-2xl "
        />
      </div>
    );
  }
};
const AnimatedTextCharacter = ({ text }) => {
  // splitting text into letters
  const words = text.split(" ");

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.04 * i },
    }),
  };
  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      //   style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      className="text-center lg:text-8xl text-6xl font-semibold break-normal"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : index >= 20 ? <i>{letter}</i> : letter}
        </motion.span>
      ))} */}
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {index < 3 ? word : <i className="text-orange-100">{word}</i>}
          {index < 3 && " "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const { data: session, status } = useSession();
  const userEmail = session?.user.email;
  console.log(userEmail);
  return (
    <>
      <MouseParallaxContainer
        className=" flex  min-h-screen flex-col items-center p-6 bg-[#1A1A1A]"
        globalFactorX={0.4}
        globalFactorY={0.4}
      >
        <Navbar />
        <div className="mb-32 mt-24 text-center lg:text-7xl text-5xl w-full lg:mb-0">
          <div className="text-white mb-6 font-semibold z-50 font-['Jost']">
            <AnimatedTextCharacter text="Product design that empowers." />
          </div>
          <Link
            href="/"
            passHref
            className="font-['Rubik'] relative z-10  w-fit text-base lg:text-lg font-bold rounded-3xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 lg:px-12 bg-black/50 border-2 border-gray-600/50 py-4 lg:py-6"
          >
            WORK WITH US&nbsp;&nbsp;→
          </Link>
          <MouseParallaxChild factorX={-0.3} factorY={-0.5}>
            <div className="z-10 relative mx-auto -mb-52 lg:-mb-36 w-4/5 h-64 mt-12 blur-2xl ">
              <svg
                width="1403"
                height="396"
                viewBox="0 0 1403 396"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_9_306)">
                  <path
                    d="M773.999 326.232C1006.29 324.701 1156.51 295.031 1300.49 222.244C1592.19 74.7912 -157.629 -5.72815 93.8616 166.72C252.431 275.452 477.294 328.189 773.999 326.232Z"
                    fill="url(#paint0_linear_9_306)"
                    fill-opacity="0.18"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9_306"
                    x="0.046814"
                    y="0.300293"
                    width="1402.36"
                    height="394.984"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="34.5"
                      result="effect1_foregroundBlur_9_306"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_9_306"
                    x1="696.437"
                    y1="325.457"
                    x2="703.832"
                    y2="73.5675"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE926" />
                    <stop offset="1" stop-color="#70FF00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </MouseParallaxChild>

          <div className="flex justify-evenly -z-10">
            <Image
              src={hero1}
              loading="lazy"
              className="relative rotate-[7deg] left-2 rounded-lg hover:scale-105 duration-200 transition ease-in-out"
            />
            <Image
              src={hero2}
              loading="lazy"
              className="relative left-2 rounded-lg hover:scale-105 duration-200 transition ease-in-out"
            />
            <Image
              src={hero3}
              loading="lazy"
              className="relative left-2 rounded-lg hover:scale-105 duration-200 transition ease-in-out"
            />
          </div>
          <div className="-ml-6 -mt-48 w-screen overflow-hidden">
            <svg
              viewBox="0 0 1440 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1232 93.9358C-1200.39 92.7286 -1177.33 95.5551 -1152.69 97.9056C-1096.45 103.271 -1043.02 109.788 -984.151 114.097C-768.225 129.902 -507.679 117.792 -228.249 86.235C-115.06 73.4522 -1.49885 57.4438 111.842 41.5199C169.569 33.4096 227.262 25.03 284.995 16.9689C307.026 13.8927 331.825 8.58113 351.079 8.65727C367.369 8.7217 332.92 19.1366 321.855 24.3114C293.31 37.6606 263.484 52.2272 256.56 65.1903C243.004 90.5706 335.181 102.157 402.965 106.549C593.074 118.865 833.192 108.239 1068.55 89.6405C1135.17 84.3761 1202.9 77.3952 1265.14 76.1212C1273.69 75.9461 1484 75.6726 1488.32 77.0541"
                stroke="white"
                stroke-width="14"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="mt-64 max-w-3xl mx-auto  text-3xl xl:text-4xl text-left  font-['Jost']">
            <div className="mb-12">
              <Image src={lumen} width={175} className="inline" />
              <div className="inline leading-relaxed  font-bold tracking-wide text-white">
                {" "}
                is a multi-disciplinary collective of{" "}
                <i className="text-[#ABFF3A]">
                  artists, developers, writers, and creatives
                </i>{" "}
                creating a space for brands and products to flourish.
              </div>
            </div>
          </div>
          <div className="font-bold tracking-wide text-gray-600 my-8">~</div>
        </div>

        <div className="w-full">
          <ScrollFade>
            <ProductCard
              title="Positive Energy"
              img={positiveEnergy}
              imgalt={"Positive Energy Brand Image"}
              dir="left"
              body={
                'Coordinated art, photography, and brand identity for the brand "Positive Energy". We led social media campaigns which brought the brand a 70% increase in sales.'
              }
            />
          </ScrollFade>
          <ScrollFade>
            <ProductCard
              title="Glossier"
              img={glossier}
              imgalt={"Glossier Brand Image"}
              dir="right"
              body={
                'Created product design, photography, and website for "Glossier". Used advanced compositing techniques and worked closely with client to achieve final product.'
              }
            />
          </ScrollFade>
          <div className="mt-12 h-1 border-b-4 border-gray-600 border-double w-screen -ml-6" />
        </div>

        <div className="w-full flex-row justify-center items-center pb-12 font-['Jost'] mt-12 text-center">
          <div className="flex justify-center items-center">
            <svg
              width="107"
              height="102"
              viewBox="0 0 107 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.5267 71.0409C42.2626 67.9245 39.9542 65.3445 36.997 63.7429C34.0397 62.1413 30.6176 61.6178 27.3168 62.2619C24.0159 62.9061 21.0418 64.6779 18.9037 67.2739C16.7656 69.8699 15.5967 73.1285 15.5971 76.4916C15.5971 77.9804 15.2913 79.4534 14.6987 80.8192C14.1061 82.185 13.2393 83.4145 12.152 84.4316C11.0647 85.4486 9.78013 86.2315 8.37786 86.7318C6.97559 87.232 5.48551 87.4389 4 87.3397C6.38923 91.4902 10.0819 94.7359 14.5047 96.5729C18.9274 98.4099 23.833 98.7353 28.4597 97.4988C33.0864 96.2622 37.1755 93.5329 40.0921 89.7343C43.0088 85.9358 44.5898 81.2807 44.5898 76.4916C44.5898 74.5635 44.2129 72.7225 43.5267 71.0409ZM43.5267 71.0409C49.2722 69.0834 54.7671 66.4559 59.8979 63.2129M35.5296 63.0921C37.4876 57.3344 40.1183 51.828 43.3673 46.6871M59.8931 63.2129C69.0565 57.4233 76.8997 49.7711 82.9133 40.7532L101.643 12.6593C102.36 11.5893 102.684 10.3034 102.559 9.02115C102.433 7.73895 101.867 6.53998 100.956 5.62901C100.045 4.71804 98.846 4.15157 97.5638 4.02635C96.2816 3.90112 94.9957 4.2249 93.9257 4.94239L65.8318 23.6765C56.8127 29.6883 49.1589 37.5299 43.3673 46.6919C50.7212 49.98 56.605 55.8638 59.8931 63.2177"
                stroke="url(#paint0_linear_94_115)"
                stroke-width="7.24818"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_94_115"
                  x1="53.2925"
                  y1="4"
                  x2="45"
                  y2="120.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#ABFF3A" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <br />

          <div className="block text-white lg:text-8xl text-6xl font-semibold text-center">
            Careers at LUMEN
          </div>
          <div className="flex justify-center items-center mt-6">
            <div className="text-white max-w-2xl  text-xl lg:text-2xl">
              LUMEN is a design agency which gives brands and products the
              resources they need to soar. We’re an inclusive team of creators
              who are passion for our community.
              <br />
              <br />
              Come join us!
            </div>
          </div>
          <div className="mt-16">
            <Link
              href="/careers"
              passHref
              className="font-['Rubik'] w-fit text-lg xl:text-xl font-bold rounded-3xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 lg:px-12 bg-black/50 border-2 border-gray-600/50  py-4 lg:py-6 "
            >
              <span>LEARN MORE</span>
            </Link>
          </div>
          <div className="flex justify-evenly mt-24">
            <Image src={career1} className=" rounded-lg" />
            <Image src={career2} className="rounded-lg " />
          </div>
        </div>
      </MouseParallaxContainer>
      <Footer />
    </>
  );
}
