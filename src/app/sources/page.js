"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Sources() {
  return (
    <>
      <div className="px-8 lg:px-16 xl:px-32 flex min-h-screen   flex-col items-center p-6 bg-[#1A1A1A]">
        <Navbar />
        <div className="justify-center flex  flex-col items-center">
          <div className="flex text-center flex-col">
            <div className="xl:mt-24 mt-8 lg:text-7xl text-4xl md:text-6xl w-full lg:mb-0">
              <div className="max-w-2xl text-white mb-6  font-semibold z-50 font-['Jost']">
                Libraries/Tools Used.
              </div>
            </div>

            <div className="xl:mt-16 mt-8 lg:text-5xl text-2xl md:text-4xl w-full lg:mb-0">
              <div className="max-w-2xl text-[#ABFF3A] mb-6  font-semibold z-50 font-['Jost']">
                Web
              </div>
            </div>
            <ul className="list-disc max-w-2xl text-white text-xl md:text-2xl space-y-3">
              <li>
                <a
                  href="https://nextjs.org/"
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                >
                  Next.JS (Frontend Web Framework)
                </a>
                <br />
                <div className="text-xl text-gray-400">
                  Also used for routing and server side rendering. Allowed us to
                  do optimizations and build a fast and responsive website.
                </div>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                >
                  Tailwind CSS (CSS Framework)
                </a>
                <br />
                <div className="text-xl text-gray-400">
                  Allowed us to build a responsive and mobile-first website.
                </div>
              </li>
              <li>
                <a
                  href="https://nodemailer.com/"
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                >
                  Nodemailer (Emailing Library)
                </a>
                <br />
                <div className="text-xl text-gray-400">
                  Connected us to the Gmail SMTP (mailing server), which enabled
                  us to send emails to our users.
                </div>
              </li>
              <li>
                <a
                  href="https://next-auth.js.org/"
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                >
                  Next Auth (User Management)
                </a>
                <br />
                <div className="text-xl text-gray-400">
                  Allowed us to manage user sessions and authentication.
                </div>
              </li>
              <li>
                <a
                  href="https://www.framer.com/motion/"
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                >
                  Framer Motion (Animation Library)
                </a>
                <br />
                <div className="text-xl text-gray-400">
                  Enabled us to create and add animations to our website.
                </div>
              </li>
            </ul>

            <div className="xl:mt-16 mt-8 lg:text-5xl md:text-4xl text-2xl w-full lg:mb-0">
              <div className="max-w-2xl text-[#ABFF3A] mb-6  font-semibold z-50 font-['Jost']">
                Storage
              </div>
            </div>
            <ul className="list-disc max-w-2xl text-white text-xl md:text-2xl space-y-3">
              <li>
                <a
                  href="https://www.postgresql.org/"
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                >
                  PostgreSQL (Database)
                </a>
                <br />
                <div className="text-xl text-gray-400">
                  Used to store user data and other information. Hosted using
                  CockroachDB through Google Cloud Platform.
                </div>
              </li>
              <li>
                <a
                  href="https://www.prisma.io/"
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                >
                  Prisma
                </a>
                <br />
                <div className="text-xl text-gray-400">
                  Backend ORM used to interact with the database.
                </div>
              </li>
            </ul>

            <div className="xl:mt-16 mt-8 lg:text-5xl md:text-4xl text-2xl w-full lg:mb-0">
              <div className="max-w-2xl text-[#ABFF3A] mb-6  font-semibold z-50 font-['Jost']">
                Programming Languages/Tools
              </div>
            </div>
            <ul className="list-disc max-w-2xl text-white text-2xl space-y-3">
              <li>JavaScript</li>
              <li>Figma</li>
              <li>VS Code</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>Tailwind CSS</li>
              <li>
                <a
                  href="https://react.dev/"
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                >
                  React.JS
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:mt-16 text-center mt-8 lg:text-5xl md:text-4xl text-2xl w-full lg:mb-0">
            <div className="max-w-2xl text-[#ABFF3A] mb-6  font-semibold z-50 font-['Jost']">
              Media
            </div>
          </div>
          <ul className="list-disc max-w-2xl text-white text-xl md:text-2xl space-y-3">
            <li>
              <a
                href="https://unsplash.com/"
                rel="noreferrer"
                className="underline"
                target="_blank"
              >
                Unsplash
              </a>
            </li>
            <li>
              <a
                href="https://heroicons.com/"
                rel="noreferrer"
                className="underline"
                target="_blank"
              >
                HeroIcons
              </a>
            </li>
          </ul>
        </div>
        <div className="text-xl text-gray-400 mt-8">
          All images/products represented in the website are from Unsplash. They
          do not reflect the actual products of the company or the work done by
          the photographers.
        </div>
      </div>
      <Footer />
    </>
  );
}
