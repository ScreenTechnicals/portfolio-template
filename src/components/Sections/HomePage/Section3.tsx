import React from "react";
import { TfiDownload } from "react-icons/tfi";

const Section3 = () => {
  return (
    <div className="flex mb-10 w-full flex-wrap gap-5 xl:justify-end xl:py-5">
      <div className="xl:block hidden">
        <button className="border rounded-full 2xl:text-xl text-sm py-4 px-6 font-bold border-[#292929] flex items-center gap-2 justify-center">
          <span>
            <TfiDownload />
          </span>
          <span>Download Resume</span>
        </button>
      </div>
      <div className="w-[650px] 2xl:w-[830px]">
        <p className="text-2xl 2xl:text-4xl font-[600] mb-5">
          A Chronicle of Passion, Persistence, and Artistry
        </p>
        <p className="text-sm 2xl:text-lg font-[300] text-gray-400">
          A seasoned technology enthusiast with a passion for crafting seamless
          digital experiences. As a versatile web developer and software
          engineer, I specialize in bringing ideas to life through code and
          creativity.
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
  );
};

export default Section3;
