import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-5 w-full">
      <div className="w-full md:bg-[#0c0c0c] py-5 rounded-md flex items-center justify-between md:py-5 md:px-10 md:gap-2 overflow-hidden md:flex-row flex-col-reverse relative">
        <div className="md:w-[65%]">
          <div className="space-x-2">
            <span className="border border-[#292929] py-2 px-4 text-sm rounded-full">
              Development
            </span>
            <span className="border border-[#292929] py-2 px-4 text-sm rounded-full">
              SEO
            </span>
            <span className="border border-[#292929] py-2 px-4 text-sm rounded-full">
              Design
            </span>
          </div>
          <p className="my-5 md:my-10 text-3xl md:text-7xl font-[700] text-white">
            Crafting unforgettable digital journeys
          </p>
          <div className="mb-5 md:hidden">
            <p className="font-[300] text-xs text-gray-400 tracking-wider">
              I’m a web developer & software engineer✌,
            </p>
            <p className="font-[300] text-xs text-gray-400 tracking-wider">
              transforming ideas into interactive experiences.
            </p>
          </div>
          <button className="hover:bg-black hover:border-[#6e6e6e] hover:text-white transition-all border border-white rounded-full text-sm bg-white text-black py-3 px-6">
            Work With Me
          </button>
        </div>
        <Link href={"https://devverse.io"} className="md:inline-block hidden">
          <div className="absolute group bottom-10 right-[30%] z-[999] -translate-x-1/2 w-[5rem] h-[5rem] overflow-hidden rounded-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#00000091] to-[#ffffff5e] backdrop-blur-md absolute"></div>
            <div className="relative z-[99] w-full h-full flex items-center justify-center group-hover:scale-125 transition-all duration-500">
              <FaYoutube size={40} />
            </div>
          </div>
        </Link>
        <div className="">
          <div className="mb-10 md:block hidden">
            <p className="font-[300] text-base text-gray-400 tracking-wider text-end text-nowrap">
              I’m a web developer & software engineer✌,
            </p>
            <p className="font-[300] text-base text-gray-400 tracking-wider text-end text-nowrap">
              transforming ideas into interactive experiences.
            </p>
          </div>
          <div className="md:mb-0 mb-6 w-[450px] h-[400px] md:h-[550px] overflow-hidden rounded-md md:flex items-center justify-center relative">
            <Image
              src={"/images/img1.svg"}
              alt="image not loading..."
              width={500}
              height={500}
              className="w-[100%] brightness-95 contrast-150 grayscale-[1] hover:grayscale-0 hover:contrast-100 transition-all duration-500 rounded-md object-cover"
            />
            <div className="absolute showImage top-0 left-0  h-full bg-[#161616]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
