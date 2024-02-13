"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import lumen from "../../../public/lumen.svg";
import focus from "../../../public/career/focus.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollFade from "../components/ScrollFade";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getServerSession } from "next-auth";

export default function Careers() {
  const [applications, setApplications] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/history", {
        method: "GET",
      });

      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to fetch data.");
      }
    }
    fetchData().then((res) => {
      setApplications(res);
    });
  }, []);

  return (
    <>
      <div className="px-8 lg:px-16 xl:px-32 flex   flex-col items-center p-6 bg-[#1A1A1A]">
        <Navbar />
        <div className="grid xl:grid-cols-2">
          <div className="xl:mt-24 mt-8 text-left lg:text-6xl text-5xl w-full lg:mb-0">
            <div className="max-w-xl text-white mb-6  font-semibold z-50 font-['Jost']">
              test
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

      <div className=" px-8 lg:px-16 xl:px-32 font-semibold text-center xl:mt-24 mt-8 lg:text-6xl text-5xl w-full lg:mb-0">
        <Image src={lumen} width={175} className="inline" /> Benefits
        <div className="text-xl mx-auto text-gray-300 lg:text-2xl font-medium max-w-3xl mt-4 mb-8">
          Work happily & freely with us.
        </div>
      </div>

      <div className="xl:mt-24 mt-8 text-left lg:text-6xl text-5xl w-full lg:mb-0">
        <div className="max-w-xl mx-auto text-center   text-white mb-6  font-semibold z-50 font-['Jost']">
          Open Positions
        </div>

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
      </div>

      <Footer />
    </>
  );
}
