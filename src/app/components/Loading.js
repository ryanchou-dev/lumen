import Navbar from "./Navbar";
export default function Loading() {
  return (
    <div className="px-8 lg:px-16 xl:px-32 flex  min-h-screen flex-col items-center p-6 bg-[#1A1A1A]">
      <Navbar />
      <div className="flex h-full flex-col justify-center items-center text-white font-semibold text-4xl lg:text-5xl">
        Loading...
      </div>
    </div>
  );
}
