"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import lumen from "../../../public/lumen.svg";

// redirects & authentication
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Admin() {
  const [applications, setApplications] = useState({});
  const [filter, setFilter] = useState("In Progress");
  const { data: session, status } = useSession();

  const router = useRouter();

  // fetch all applications
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/fetchAll", {
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

  // once we get the user's authentication status, we redirect them if they're not an admin
  useEffect(() => {
    if (
      status == "unauthenticated" ||
      (status == "authenticated" && !session.user.admin)
    ) {
      router.push("/");
    }
  }, [status]);

  // if we're still fetching the user's authentication status, we show a loading screen
  if (status != "authenticated" || !session.user.admin) {
    return <Loading />;
  }

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

        <div className="h-0.5 bg-white mb-8" />
        <div className="text-xl mx-auto text-white font-semibold lg:text-2xl  max-w-3xl mb-8">
          Change Application Status:
          <select
            onChange={(e) => {
              fetch("/api/updateStatus", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: application.id,
                  status: e.target.value,
                }),
              });
              const idx = applications.findIndex(
                (app) => app.id === application.id
              );
              const newApplications = [...applications];
              newApplications[idx].status = e.target.value;
              setApplications(newApplications);
            }}
            className="inline px-4 py-2 rounded-lg bg-[#1A1A1A] font-['Jost'] text-xl lg:text-2xl font-semibold text-white"
          >
            <option value="Choose Status" selected disabled hidden>
              Choose Status
            </option>
            <option value="In Progress">In Progress</option>
            <option value="Under Consideration">Under Consideration</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Rejected">Rejected</option>
            <option value="Accepted">Accepted</option>
          </select>
        </div>
        <div className="text-xl mx-auto text-gray-500 lg:text-2xl font-medium max-w-3xl mb-8">
          Applied on:{" "}
          {new Date(Date.parse(application.createdAt))
            .toLocaleString("en-us", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            // reformat date with regex
            .replace(/(\d+)\/(\d+)\/(\d+)/, "$1-$2-$3")}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="px-8 lg:px-16 xl:px-32 flex  min-h-screen flex-col items-center p-6 bg-[#1A1A1A]">
        <Navbar />
        <div className="">
          <div className="xl:mt-24 mt-8 text-center lg:text-6xl text-5xl w-full lg:mb-0">
            <div className="max-w-xl text-white mb-6  font-semibold z-50 font-['Jost']">
              Admin Dashboard
              <div className="text-xl text-gray-300 lg:text-2xl font-medium mt-4 mb-8">
                Signed in as {session.user.email}.
              </div>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full mt-12  bg-gray-500" />
        {applications.length > 0 && (
          <>
            <div className="space-x-4 mt-6">
              <div className="inline text-4xl mx-auto text-white font-['Jost'] lg:text-5xl font-semibold mt-6 max-w-3xl  mb-8">
                Applications
              </div>
              <select
                onChange={(e) => setFilter(e.target.value)}
                className="inline px-4 py-2 rounded-lg bg-[#1A1A1A] font-['Jost'] text-3xl lg:text-4xl font-semibold text-white"
              >
                <option value="In Progress" selected>
                  In Progress
                </option>
                <option value="Under Consideration">Under Consideration</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Rejected">Rejected</option>
                <option value="Accepted">Accepted</option>
              </select>
            </div>
            <div className="w-full flex flex-wrap mt-12 gap-4">
              {applications.map(
                (application) =>
                  application.status == filter && (
                    <div key={application.id}>
                      <ApplicationCard application={application} />
                    </div>
                  )
              )}
            </div>
          </>
        )}
      </div>

      <div className=" px-8 lg:px-16 xl:px-32 font-semibold text-center xl:mt-24 mt-8 lg:text-6xl text-5xl w-full lg:mb-0">
        <Image alt="Lumen Logo" src={lumen} width={175} className="inline" />{" "}
        Benefits
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
