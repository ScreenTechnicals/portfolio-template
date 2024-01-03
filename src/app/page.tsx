import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";

export default function Home() {
  return (
    <main className="p-5 w-full">
      <div className="w-full xl:bg-[#0c0c0c] py-5 rounded-md flex items-center justify-between xl:py-5 xl:px-10 xl:gap-2 overflow-hidden xl:flex-row flex-col-reverse relative">
        <div className="xl:w-[65%]">
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
          <p className="my-5 xl:my-10 text-3xl xl:text-7xl font-[700] text-white">
            Crafting unforgettable digital journeys
          </p>
          <div className="mb-5 xl:hidden">
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
        <Link href={"https://devverse.io"} className="xl:inline-block hidden">
          <div className="absolute group bottom-10 right-[30%] z-[999] -translate-x-1/2 w-[5rem] h-[5rem] overflow-hidden rounded-full">
            <div className="w-full h-full bg-gradient-to-tr from-[#00000091] to-[#ffffff5e] backdrop-blur-md absolute"></div>
            <div className="relative z-[99] w-full h-full flex items-center justify-center group-hover:scale-125 transition-all duration-500">
              <FaYoutube size={40} />
            </div>
          </div>
        </Link>
        <div className="">
          <div className="mb-10 xl:block hidden">
            <p className="font-[300] text-base text-gray-400 tracking-wider text-end text-nowrap">
              I’m a web developer & software engineer✌,
            </p>
            <p className="font-[300] text-base text-gray-400 tracking-wider text-end text-nowrap">
              transforming ideas into interactive experiences.
            </p>
          </div>
          <div className="xl:mb-0 mb-6 w-[450px] h-[400px] xl:h-[550px] overflow-hidden rounded-md xl:flex items-center justify-center relative">
            <Image
              src={"/images/img1.png"}
              alt="image not loading..."
              width={500}
              height={500}
              className="w-[100%] contrast-125 grayscale-[1] hover:grayscale-0 hover:contrast-100 transition-all duration-500 rounded-md object-cover"
            />
            <div className="absolute showImage top-0 left-0  h-full bg-[#161616]"></div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full flex items-center justify-center xl:justify-end pb-10 pt-10 xl:pt-20 gap-3 flex-wrap">
        <div className="flex items-center justify-center gap-3">
          <div>
            <Image
              src={"/images/img1.png"}
              alt=""
              className="rounded-md"
              width={250}
              height={250}
            />
          </div>
          <div>
            <Image
              className="rounded-md"
              src={"/images/img1.png"}
              alt=""
              width={250}
              height={250}
            />
          </div>
        </div>
        <div>
          <div className="rounded-md w-[350px] h-[345px] object-cover overflow-hidden">
            <Image
              src={"/images/img1.png"}
              alt=""
              className="w-[100%]"
              width={350}
              height={250}
            />
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="flex w-full flex-wrap gap-5 xl:justify-end xl:py-5">
        <div className="xl:block hidden">
          <button className="border rounded-full text-sm py-4 px-6 font-bold border-[#292929] flex items-center gap-2 justify-center">
            <span>
              <TfiDownload />
            </span>
            <span>Download Resume</span>
          </button>
        </div>
        <div className="w-[650px]">
          <p className="text-2xl font-[600] mb-5">
            A Chronicle of Passion, Persistence, and Artistry
          </p>
          <p className="text-sm font-[300] text-gray-400">
            A seasoned technology enthusiast with a passion for crafting
            seamless digital experiences. As a versatile web developer and
            software engineer, I specialize in bringing ideas to life through
            code and creativity.
          </p>
        </div>
        <div className="xl:hidden">
          <button className="border rounded-full text-sm py-4 px-6 font-bold border-[#292929] flex items-center gap-2 justify-center">
            <span>
              <TfiDownload />
            </span>
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </main>
  );
}
