import Image from "next/image";
import lumen from "../../../public/lumen.svg";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return (
      <div className="z-10 max-w-7xl w-full items-center justify-between   lg:flex ">
        <div className="rounded-3xl w-80 h-80 filter blur-3xl -left-12  opacity-10 mix-blend-multiply absolute -top-48 bg-white"></div>

        <div className="text-white items-center flex justify-center">
          <Link
            href="/"
            passHref
            className="font-['Rubik'] text-white font-bold opacity-80 transition-opacity hover:opacity-100 duration-200"
          >
            <Image src={lumen} width={150} />
          </Link>
        </div>
        <div className="text-center flex  items-center justify-center lg:text-right lg:mt-0 mt-6 text-sm">
          <div className="text-white space-x-8 flex flex-row ">
            <Link
              href="/careers"
              passHref
              className="font-['Rubik'] text-white font-bold opacity-70 transition-opacity hover:opacity-100 duration-200"
            >
              CAREERS
            </Link>
            <Link
              href="/"
              passHref
              className="font-['Rubik'] text-white font-bold opacity-70 transition-opacity hover:opacity-100 duration-200"
            >
              WORKS
            </Link>
            <Link
              href="/"
              passHref
              className="font-['Rubik']  -mt-2 w-fit text-xs font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 bg-black/50 border-2 border-gray-600/50  py-2"
            >
              LOADING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="z-10 max-w-7xl w-full items-center justify-between   lg:flex ">
      <div className="rounded-3xl w-80 h-80 filter blur-3xl -left-12  opacity-10 mix-blend-multiply absolute -top-48 bg-white"></div>

      <div className="text-white items-center flex justify-center">
        <Link
          href="/"
          passHref
          className="font-['Rubik'] text-white font-bold opacity-80 transition-opacity hover:opacity-100 duration-200"
        >
          <Image src={lumen} width={150} />
        </Link>
      </div>
      <div className="text-center flex  items-center justify-center lg:text-right lg:mt-0 mt-6 text-sm">
        <div className="text-white space-x-8 flex flex-row ">
          <Link
            href="/careers"
            passHref
            className="font-['Rubik'] text-white font-bold opacity-70 transition-opacity hover:opacity-100 duration-200"
          >
            CAREERS
          </Link>
          <Link
            href="/"
            passHref
            className="font-['Rubik'] text-white font-bold opacity-70 transition-opacity hover:opacity-100 duration-200"
          >
            WORKS
          </Link>
          <Link
            href={status == "unauthenticated" ? "/api/auth/signin" : "/account"}
            passHref
            className="font-['Rubik']  -mt-2 w-fit text-xs font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 bg-black/50 border-2 border-gray-600/50  py-2"
          >
            {status == "unauthenticated" ? "SIGN IN" : "ACCOUNT"}
          </Link>
          {status == "authenticated" && (
            <button
              onClick={() => signOut()}
              className="font-['Rubik']  -mt-2 w-fit text-xs font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 bg-black/50 border-2 border-gray-600/50  py-2"
            >
              SIGN OUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
