"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  // redirect if user is signed in
  useEffect(() => {
    if (status == "authenticated") {
      router.push("/account");
    }
  }, []);

  return (
    <>
      <div className="px-8 lg:px-16 xl:px-32 flex min-h-screen   flex-col items-center p-6 bg-[#1A1A1A]">
        <Navbar />
        <div className="justify-center flex  flex-col items-center">
          <div className="flex text-center flex-col">
            <div className="xl:mt-24 mt-8 lg:text-7xl text-6xl w-full lg:mb-0">
              <div className="max-w-2xl text-white mb-6  font-semibold z-50 font-['Jost']">
                Sign in
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-1/2 flex-1">
            <label htmlFor="contactEmail" className="text-white">
              Email<span className="text-red-400">*</span>
            </label>
            <form>
              <input
                type="email"
                placeholder="johndoe@email.com"
                name="contactEmail"
                id="contactEmail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block rounded-md  border-0 py-3 text-xl bg-gray-700 text-gray-200 px-4 shadow-sm ring-2 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ABFF3A]  sm:leading-6"
              />
              <div className="flex items-center justify-center ">
                <button
                  type="button"
                  // call signIn function with email provider and email
                  onClick={() => signIn("email", { email })}
                  className=" mt-4 font-['Rubik']  w-fit text-xl  font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 bg-black/50 border-2 border-gray-600/50  py-2"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
