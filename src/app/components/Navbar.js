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
            href={status == "unauthenticated" ? "/sign-in" : "/account"}
            passHref
            className="flex items-center justify-center font-['Rubik']  -mt-2 w-fit text-xs font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 bg-black/50 border-2 border-gray-600/50  py-2"
          >
            {status == "unauthenticated" ? "SIGN IN" : "ACCOUNT"}
          </Link>
          {/* if the user is an administrator, link the admin dashboard */}
          {status == "authenticated" && session.user.admin && (
            <Link
              href={"/admin"}
              passHref
              className="flex items-center justify-center font-['Rubik']  -mt-2 w-fit text-xs font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 bg-black/50 border-2 border-gray-600/50  py-2"
            >
              ADMIN
            </Link>
          )}
          {/* if the user is authenticated, show the sign out button */}
          {status == "authenticated" && (
            <button
              onClick={() => signOut()}
              className="font-['Rubik']  -mt-2 w-fit text-xs font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-3 bg-black/50 border-2 border-gray-600/50  py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
