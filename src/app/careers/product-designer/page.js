"use client";
import React from "react";
import Link from "next/link";

// animation & authentication
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

// redirect
import { useRouter } from "next/navigation";

// for form fields
import { useState } from "react";

import Navbar from "@/../../src/app/components/Navbar";
import Footer from "@/../../src/app/components/Footer";

const AnimatedText = ({ text }) => {
  // splitting text into letters
  const words = text.split(" ");

  // variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  // variants for each word
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
      className="  font-semibold break-normal"
      variants={container}
      initial="hidden"
      animate="visible"
    >
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

export default function ProductDesigner() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [address, setAddress] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const [error, setError] = useState("");

  const { data: session, status } = useSession();
  const router = useRouter();

  const submitApplication = async () => {
    if (!firstName || !lastName || !phoneNumber || !resumeLink || !address) {
      return;
    }

    const res = await fetch("/api/apply", {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify({
        jobTitle: "Product Designer",
        firstName,
        lastName,
        phoneNumber,
        resumeLink,
        address,
        linkedin,
        github,
        twitter,
        portfolio,
        contactEmail,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // error messages
    if (res.statusText === "Already applied") {
      setError("You have already applied for this position.");
    } else if (res.statusText === "User not found") {
      setError("You must be logged in to apply.");
    } else if (res.statusText === "bad-request") {
      setError("Please fill out all required fields.");
    } else if (res.statusText === "unauthorized") {
      setError("You must be logged in to apply.");
    } else {
      // redirect to account page if successful
      router.push("/account");
    }
  };

  return (
    <>
      <div className="px-8 lg:px-16 xl:px-32 flex   flex-col items-center p-6 bg-[#1A1A1A]">
        <Navbar />
        <div>
          <div className="flex text-center flex-col">
            <div className="xl:mt-24 mt-8 lg:text-7xl text-6xl w-full lg:mb-0">
              <div className="max-w-2xl text-white mb-6  font-semibold z-50 font-['Jost']">
                <AnimatedText text="Product Designer" />
                <div className="text-xl text-gray-300 lg:text-2xl font-medium mt-4 mb-8">
                  Full Time • Sales
                </div>
                <div className="text-gray-400 text-xl lg:text-2xl font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  SF Bay Area
                </div>
                <div className="text-gray-400 text-xl lg:text-2xl font-medium mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                  $150,000 - $220,000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-gray-500 w-full my-4" />
        <div className="px-4 lg:px-12 xl:px-16 w-full">
          <div className="grid-cols-1 gap-4 divide-slate-500 xl:divide-none divide-y-2 xl:grid-cols-2 grid w-full">
            <div>
              <div className="text-3xl text-white font-semibold text-left lg:text-4xl   mt-6 mb-4">
                Description
              </div>
              <div className="text-lg text-gray-300 max-w-3xl lg:text-xl font-medium  mb-8">
                We are seeking a talented and motivated Product Engineer to join
                our team. As a Product Engineer at LUMEN, you will play a key
                role in the development and execution of cutting-edge design
                projects. You will collaborate closely with designers,
                developers, and clients to bring innovative products to life.
                The ideal candidate is passionate about technology, has a keen
                eye for detail, and thrives in a fast-paced, collaborative
                environment.
              </div>
            </div>

            <div>
              <div className="text-3xl text-white font-semibold text-left lg:text-4xl   mt-6 mb-4">
                Responsibilities
              </div>
              <div className="text-lg text-gray-300 max-w-3xl lg:text-xl font-medium  mb-8">
                <ul className="list-disc space-y-2">
                  <li>
                    Collaborate with cross-functional teams to understand
                    project requirements, user needs, and design objectives.
                  </li>
                  <li>
                    Develop innovative and user-centric product designs,
                    considering factors such as usability, aesthetics, and
                    functionality.
                  </li>
                  <li>
                    Create sketches, wireframes, prototypes, and mock-ups to
                    communicate design concepts and iterate on ideas.
                  </li>
                  <li>
                    Use design tools such as Adobe Creative Suite, Sketch, or
                    Figma to create detailed design specifications and assets.
                  </li>
                  <li>
                    Conduct user research, usability testing, and feedback
                    sessions to gather insights and validate design decisions.
                  </li>
                  <li>
                    Work closely with engineers, developers, and other
                    stakeholders to ensure seamless integration of design
                    solutions into the final product.
                  </li>
                  <li>
                    Stay updated on industry trends, emerging technologies, and
                    best practices in product design to drive innovation and
                    maintain a competitive edge.
                  </li>
                  <li>
                    Provide design guidance and support to junior designers or
                    interns, fostering a collaborative and creative work
                    environment.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-3xl text-white font-semibold text-left lg:text-4xl   mt-6 mb-4">
                About You
              </div>
              <div className="text-lg text-gray-300 max-w-3xl lg:text-xl font-medium  mb-8">
                <ul className="list-disc space-y-2">
                  <li>
                    Bachelor's degree in Industrial Design, Product Design,
                    Graphic Design, or related field. A master's degree or
                    relevant certifications is a plus.
                  </li>
                  <li>
                    Proven experience (typically 3-5 years) in product design
                    roles, preferably in a design agency or creative studio
                    environment.
                  </li>
                  <li>
                    Proficiency in design software such as Adobe Creative Suite
                    (Photoshop, Illustrator, InDesign), Sketch, Figma, or other
                    relevant tools.
                  </li>
                  <li>
                    Strong portfolio showcasing a range of product design
                    projects, including concept development, user
                    interface/experience design, and prototyping.
                  </li>
                  <li>
                    Excellent communication and collaboration skills, with the
                    ability to work effectively in cross-functional teams and
                    articulate design concepts and rationale to stakeholders.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-3xl text-white font-semibold text-left lg:text-4xl   mt-6 mb-4">
                Perks
              </div>
              <div className="text-lg text-gray-300 max-w-3xl lg:text-xl font-medium  mb-8">
                <ul className="list-disc space-y-2">
                  <li>Competitive salary and benefits package.</li>
                  <li>
                    Opportunities for professional development and career
                    growth.
                  </li>
                  <li>Collaborative and inclusive work environment.</li>
                  <li>
                    Company-sponsored events and team-building activities.
                  </li>
                  <li>Flexible work arrangements and remote work options.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* only show if the user is signed in */}
        {status == "authenticated" ? (
          <div>
            <div className=" px-8 lg:px-16 xl:px-32 font-semibold text-center text-white xl:mt-24 mt-8 lg:text-6xl text-5xl w-full lg:mb-0">
              Apply Now
            </div>
            <form
              className="px-4 md:px-24 xl:px-56 w-full mt-12 "
              onSubmit={(e) => {
                e.preventDefault();
                submitApplication();
              }}
            >
              <div className="grid lg:grid-cols-2  gap-8">
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="firstName" className="text-white">
                    First Name<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                  />
                </div>
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="lastName" className="text-white">
                    Last Name<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                  />
                </div>
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="contactEmail" className="text-white">
                    Contact Email<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@email.com"
                    name="contactEmail"
                    id="contactEmail"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="block rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                  />
                </div>
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="phoneNumber" className="text-white">
                    Phone Number<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    required
                    placeholder="123 456 7890"
                    value={phoneNumber}
                    onChange={(e) =>
                      setPhoneNumber(
                        e.target.value
                          .replace("/([0-9]{3})/", "\x01 ")
                          .replace("/[0-9]{3} ([0-9]{3})/", "\x01 ")
                      )
                    }
                    className="block rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                  />
                </div>

                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="resumeLink" className="text-white">
                    Resume Link<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="resumeLink"
                    id="resumeLink"
                    required
                    placeholder="https://website.com/resume.pdf"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    className="block rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                  />
                </div>
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="address" className="text-white">
                    Address<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="123 Alley St. San Francisco, CA 94107"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="block rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                  />
                </div>
              </div>

              <div className="bg-gray-500 h-0.5 w-full my-4" />
              <div className="text-gray-400  mb-4 text-center  text-xl font-medium ">
                Optionally, let us know if there are any social links you'd like
                to share:
              </div>
              <div className="grid lg:grid-cols-2  gap-8">
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="linkedin" className="text-white">
                    Linkedin
                  </label>
                  <div className="flex flex-row w-full">
                    <div className=" w-1/3 inline rounded-md  border-0 py-3 text-lg bg-gray-700 text-gray-400 pl-4 shadow-sm \  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6">
                      linkedin.com/in/
                    </div>

                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      className="inline w-2/3  rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="github" className="text-white">
                    Github
                  </label>
                  <div className="flex flex-row w-full">
                    <div className=" w-1/3 inline rounded-md  border-0 py-3 text-lg bg-gray-700 text-gray-400 pl-4 shadow-sm \  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6">
                      github.com/
                    </div>

                    <input
                      type="text"
                      name="github"
                      id="github"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      className="inline w-2/3  rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="twitter" className="text-white">
                    Twitter (x.com)
                  </label>
                  <div className="flex flex-row w-full">
                    <div className=" w-1/3 inline rounded-md  border-0 py-3 text-lg bg-gray-700 text-gray-400 pl-4 shadow-sm \  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6">
                      x.com/
                    </div>

                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      className="inline w-2/3  rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-col basis-1/2 flex-1">
                  <label htmlFor="portfolio" className="text-white">
                    Portfolio
                  </label>

                  <input
                    type="text"
                    name="portfolio"
                    id="portfolio"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className="inline rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-8">
                <button
                  type="submit"
                  className="font-['Rubik'] -ml-2 relative z-10  w-fit text-base lg:text-lg font-bold rounded-3xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 lg:px-12 bg-black/50 border-2 border-gray-600/50 py-4 lg:py-6"
                >
                  Submit Application
                </button>

                {error && (
                  <div className="mt-2 text-red-500 font-semibold">
                    Error: {error}
                  </div>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className=" px-8 lg:px-16 xl:px-32 font-semibold text-center text-white xl:mt-24 mt-8 lg:text-6xl text-5xl w-full lg:mb-0">
              Apply Now
            </div>
            <div className="text-gray-400 text-xl text-center lg:text-2xl mt-12">
              Please{" "}
              <Link
                href="/sign-in"
                passHref
                className="font-['Rubik'] relative z-10  w-fit text-base lg:text-lg font-bold rounded-3xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-4 lg:px-6 bg-black/50 border-2 border-gray-600/50 py-2 lg:py-3"
              >
                Sign in
              </Link>{" "}
              before applying.
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
