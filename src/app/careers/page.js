"use client";
import React from "react";
import Image from "next/image";
import lumen from "../../../public/lumen.svg";
import focus from "../../../public/career/focus.jpg";
import art from "../../../public/career/art.jpg";
import passion from "../../../public/career/passion.jpg";
import collaboration from "../../../public/career/collaboration.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollFade from "../components/ScrollFade";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const AnimatedTextCharacter = ({ text }) => {
  // splitting text into letters
  const words = text.split(" ");

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
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
      className="text-left  font-semibold break-normal"
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

const BenefitsCard = ({ icon, title, text }) => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div dangerouslySetInnerHTML={{ __html: icon }} />

        <div className="text-2xl inline max-w-sm  lg:text-3xl font-medium  mt-6 mb-4">
          {title}
        </div>
        <div className="max-w-lg">{text}</div>
      </div>
    </div>
  );
};

export default function Careers() {
  const { data: session, status } = useSession();
  const userEmail = session?.user.email;
  console.log(userEmail);
  return (
    <>
      <div className="px-8 lg:px-16 xl:px-32 flex   flex-col items-center p-6 bg-[#1A1A1A]">
        <Navbar />
        <div className="grid xl:grid-cols-2">
          <div className="xl:mt-24 mt-8 text-left lg:text-6xl text-5xl w-full lg:mb-0">
            <div className="max-w-xl text-white mb-6  font-semibold z-50 font-['Jost']">
              <AnimatedTextCharacter text="Careers @ LUMEN" />
              <div className="text-xl text-gray-300 lg:text-2xl font-medium mt-4 mb-8">
                LUMEN is a design agency which gives brands and products the
                resources they need to soar. We’re an inclusive team of creators
                who are passion for our community.
                <br />
                <br /> Come join us!
              </div>
              <Link
                href="/"
                passHref
                className="font-['Rubik'] -ml-2 relative z-10  w-fit text-base lg:text-lg font-bold rounded-3xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 lg:px-12 bg-black/50 border-2 border-gray-600/50 py-4 lg:py-6"
              >
                SEE OPEN POSITIONS&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
          <div className="order-first xl:order-none float-right flex justify-center items-center xl:justify-end xl:items-end   mt-24 text-left lg:text-7xl text-5xl w-full lg:mb-0">
            <Image src={focus} />
          </div>
        </div>
      </div>

      <div className="-mt-1   text-white flex  min-h-screen flex-col items-center p-6 bg-gradient-to-t to-[#1A1A1A]  from-[#383d31] ">
        <div className=" px-8 lg:px-16 xl:px-32 font-semibold text-center xl:mt-24 mt-8 lg:text-6xl text-5xl w-full lg:mb-0">
          <Image src={lumen} width={175} className="inline" /> Culture
          <div className="text-xl mx-auto text-gray-300 lg:text-2xl font-medium max-w-3xl mt-4 mb-8">
            Our culture is the singular most significant thing at our company.
            We make cutting-edge designs becuase we have a cutting-edge
            community.
          </div>
        </div>

        <div className="grid  gap-4 lg:grid-cols-2 xl:grid-cols-3 w-full mt-12">
          <div className="flex flex-col  items-center justify-center">
            <Image
              src={passion}
              className="aspect-square object-cover object-center rounded-lg max-w-sm"
            />
            <div className="items-left justify-left">
              <div className="text-3xl max-w-sm  lg:text-4xl font-semibold  mt-6 mb-4">
                Passion
              </div>
              <div className="text-lg text-gray-300 max-w-sm lg:text-xl font-medium  mb-8">
                Our team is passionate about our craft. We put our heart and
                soul into every project, shipping quality over quantity.
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center">
            <Image
              src={collaboration}
              className="aspect-square object-cover object-center rounded-lg max-w-sm"
            />
            <div className="items-left justify-left">
              <div className="text-3xl max-w-sm  lg:text-4xl font-semibold  mt-6 mb-4">
                Collaboration
              </div>
              <div className="text-lg text-gray-300  max-w-sm lg:text-xl font-medium  mb-8">
                We send and receive feedback all the time. We work with each
                other to grow together and after each day, we all grow little by
                litte.
              </div>
            </div>
          </div>

          <div className="flex flex-col  items-center justify-center">
            <Image
              src={art}
              className="aspect-square object-cover object-center rounded-lg max-w-sm"
            />
            <div className="items-left justify-left">
              <div className="text-3xl max-w-sm  lg:text-4xl font-semibold  mt-6 mb-4">
                Art
              </div>
              <div className="text-lg  text-gray-300 max-w-sm lg:text-xl font-medium  mb-8">
                Art is in everything we do. Taking an artistic approach in the
                projects we pursue help us learn and solve problems.
              </div>
            </div>
          </div>
        </div>

        <div className=" px-8 lg:px-16 xl:px-32 font-semibold text-center xl:mt-24 mt-8 lg:text-6xl text-5xl w-full lg:mb-0">
          <Image src={lumen} width={175} className="inline" /> Benefits
          <div className="text-xl mx-auto text-gray-300 lg:text-2xl font-medium max-w-3xl mt-4 mb-8">
            Work happily & freely with us.
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-3 w-full mt-12">
          <BenefitsCard
            icon={`<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 -mt-3 mr-2 h-8 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>`}
            title={"Health, Dental, & Vision"}
            text="We offer health, dental, and vision benefits for employees and their families."
          />

          <BenefitsCard
            icon={`
			<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 -mt-3 mr-2 h-8 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>`}
            title={"Learn"}
            text="We help you grow in your career and participate in networking conferences across the nation."
          />
          <BenefitsCard
            icon={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 -mt-3 mr-2 h-8 inline">
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
		  </svg>
		  `}
            title={"Mental Health"}
            text="We provide mental health and wellness offers for all of our employees."
          />
          <BenefitsCard
            icon={`
			  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 -mt-3 mr-2 h-8 inline">
			  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
			</svg>
			`}
            title={"Flexible"}
            text="We have very flexible hours, generous PTO, and even have company recharge days!"
          />
          <BenefitsCard
            icon={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 -mt-3 mr-2 h-8 inline">
			<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
		  </svg>
		  `}
            title={"Competitive salary & equity."}
            text="We pay competitive salaries and retirement plans with company contribution."
          />
          <div className="-ml-8">
            <BenefitsCard
              icon={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 -mt-3 mr-2 h-8 inline">
			<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
		  </svg>
		  `}
              title={"Reimbursements"}
              text="We reimburse for cell phones and learning/development tools."
            />
          </div>
        </div>
        <div className="xl:mt-24 mt-8 text-left lg:text-6xl text-5xl w-full lg:mb-0">
          <div className="max-w-xl mx-auto text-center   text-white mb-6  font-semibold z-50 font-['Jost']">
            Open Positions
          </div>

          {status == "authenticated" ? (
            <>
              <Link
                href="/careers/product-designer"
                passHref
                className="font-['Rubik'] -ml-2 relative z-10  w-fit text-base lg:text-lg font-bold rounded-3xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 lg:px-12 bg-black/50 border-2 border-gray-600/50 py-4 lg:py-6"
              >
                Product Designer
              </Link>
              <Link
                href="/"
                passHref
                className="font-['Rubik'] -ml-2 relative z-10  w-fit text-base lg:text-lg font-bold rounded-3xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 lg:px-12 bg-black/50 border-2 border-gray-600/50 py-4 lg:py-6"
              >
                Sales Engineer
              </Link>
            </>
          ) : (
            "please create an account or sign in before viewing"
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
