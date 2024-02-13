import Image from "next/image";
import lumen from "../../../public/lumen.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-[#131313] w-full flex py-16 px-4 ">
      <div className="w-full">
        <div className="float-left">
          <Image src={lumen} width={150} />
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
            href="/"
            passHref
            className="font-['Rubik']  text-white  font-bold opacity-70 transition-opacity hover:opacity-100 duration-200"
          >
            <p>WORKS </p>
          </Link>
          <br />
          <Link
            href="/"
            passHref
            className="font-['Rubik'] mt-12 w-fit text-xs font-bold rounded-xl hover:border-gray-600/90 transition hover:text-gray-100 duration-200 text-gray-300 px-8 bg-black/50 border-2 border-gray-600/50  py-2"
          >
            <span>CONTACT </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
