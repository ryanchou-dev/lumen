import Image from "next/image";
import lumen from "../../../public/lumen.svg";
import Link from "next/link";
// check if user is signed in
import { useSession } from "next-auth/react";

export default function Footer() {
  const { data: session, status } = useSession();
  return (
    <div className="bg-[#131313] w-full flex py-16 px-4 ">
      <div className="w-full">
        <div className="float-left">
          <Image src={lumen} width={150} />

          <div className="font-['Jost'] mt-4 text-white">
            Copyright 2024 ©️ LUMEN Design
          </div>
        </div>

        <div className="text-white text-sm text-right space-x-12 float-right  ">
          <Link
            href="/"
            passHref
            className="font-['Rubik'] text-white font-bold opacity-70 transition-opacity hover:opacity-100 duration-200"
          >
            <p>CAREERS </p>
          </Link>
          <Link
            href="/sources"
            passHref
            className="font-['Rubik'] text-white font-bold opacity-70 transition-opacity hover:opacity-100 duration-200"
          >
            <p>SOURCES</p>
          </Link>
          <br />
          <Link
            href={status == "unauthenticated" ? "/sign-in" : "/account"}
            passHref
            className="font-['Rubik'] text-white font-bold opacity-70 transition-opacity hover:opacity-100 duration-200"
          >
            {status == "unauthenticated" ? "SIGN IN" : "ACCOUNT"}
          </Link>
        </div>
      </div>
    </div>
  );
}
