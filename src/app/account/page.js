"use client";
import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Loading from "../components/Loading";

// authentication and redirecting
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Account() {
  const [applications, setApplications] = useState({});
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    // pull all of the user's job applications
    async function fetchData() {
      const res = await fetch("/api/history", {
        method: "GET",
      });

      if (res.ok) {
        return res.json();
      } else {
        return {};
      }
    }
    fetchData().then((res) => {
      setApplications(res);
    });
  }, []);

  // if user is not authenticated, redirect to the home page
  useEffect(() => {
    if (status == "unauthenticated") {
      router.refresh();
      router.push("/");
    }
  }, [status]);

  // reused component for each application
  const ApplicationCard = ({ application }) => {
    return (
      <div
        key={application.id}
        className="font-['Rubik'] px-6  max-w-2xl text-xs font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300  bg-black/50 border-2 border-gray-600/50  "
      >
        <div className="text-2xl mx-auto font-semibold text-gray-300 lg:text-3xl max-w-3xl mt-4 mb-2">
          {application.firstName} {application.lastName}{" "}
          <span className="text-gray-600 text-xl lg:text-2xl">
            ({application.status})
          </span>
        </div>
        <div className="text-xl mx-auto text-gray-500 lg:text-2xl font-medium max-w-3xl mb-8">
          Applying for {application.jobTitle}.
        </div>

        <div className="text-xl mx-auto text-[#ABFF3A] font-semibold lg:text-2xl  max-w-3xl mb-8">
          Contact Email:{" "}
          <span className="text-white font-medium">
            {application.contactEmail}
          </span>
        </div>

        <div className="text-xl mx-auto text-[#ABFF3A] font-semibold lg:text-2xl  max-w-3xl mb-8">
          Phone Number:{" "}
          <span className="text-white font-medium ">
            {application.phoneNumber}
          </span>
        </div>
        <div className="text-xl mx-auto text-[#ABFF3A] font-semibold lg:text-2xl  max-w-3xl mb-8">
          Resume:{" "}
          <a
            href={application.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="text-white font-medium underline-offset-2 underline"
          >
            {application.resumeLink}
          </a>
        </div>
        <div className="text-xl mx-auto text-[#ABFF3A] font-semibold lg:text-2xl  max-w-3xl mb-8">
          Address:{" "}
          <span className="text-white font-medium ">{application.address}</span>
        </div>
        <div className="h-0.5 bg-white mb-8" />
        {application.linkedin && (
          <div className="text-xl mx-auto text-[#ABFF3A] font-semibold lg:text-2xl  max-w-3xl mb-8">
            Linkedin:{" "}
            <a
              href={"https://linkedin.com/in/" + application.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium underline-offset-2 underline"
            >
              {"https://linkedin.com/in/" + application.linkedin}
            </a>
          </div>
        )}
        {application.github && (
          <div className="text-xl mx-auto text-[#ABFF3A] font-semibold lg:text-2xl  max-w-3xl mb-8">
            Github:{" "}
            <a
              href={"https://github.com/" + application.github}
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium underline-offset-2 underline"
            >
              {"https://github.com/" + application.github}
            </a>
          </div>
        )}
        {application.twitter && (
          <div className="text-xl mx-auto text-[#ABFF3A] font-semibold lg:text-2xl  max-w-3xl mb-8">
            Twitter (X.com):{" "}
            <a
              href={"https://twitter.com/" + application.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium underline-offset-2 underline"
            >
              {"https://twitter.com/" + application.twitter}
            </a>
          </div>
        )}
        {application.portfolio && (
          <div className="text-xl mx-auto text-[#ABFF3A] font-semibold lg:text-2xl  max-w-3xl mb-8">
            Portfolio:{" "}
            <a
              href={application.portfolio}
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium underline-offset-2 underline"
            >
              {application.portfolio}
            </a>
          </div>
        )}

        <div className="text-xl mx-auto text-gray-500 lg:text-2xl font-medium max-w-3xl mb-8">
          Applied on:{" "}
          {new Date(Date.parse(application.createdAt))
            .toLocaleString("en-us", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
        </div>
      </div>
    );
  };

  if (status != "authenticated") {
    return <Loading />;
  }
  return (
    <>
      <div className="px-8 lg:px-16 xl:px-32 flex  min-h-screen flex-col items-center p-6 bg-[#1A1A1A]">
        <Navbar />
        <div className="">
          <div className="xl:mt-24 mt-8 text-center lg:text-6xl text-5xl w-full lg:mb-0">
            <div className="max-w-xl text-white mb-6  font-semibold z-50 font-['Jost']">
              Welcome back!
              <div className="text-xl text-gray-300 lg:text-2xl font-medium mt-4 mb-8">
                Signed in as {session.user.email}.
              </div>
            </div>
          </div>
        </div>
        {applications.length > 0 && (
          <>
            <div className="text-xl mx-auto text-gray-300 lg:text-2xl font-medium max-w-3xl mt-4 mb-8">
              Open Applications:
            </div>

            <div className="w-full flex gap-4 flex-wrap mt-12">
              {applications.map((application) => (
                <div key={application.id}>
                  <ApplicationCard application={application} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
