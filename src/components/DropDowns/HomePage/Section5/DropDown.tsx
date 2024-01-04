import Image from "next/image";
import React from "react";

const DropDown = () => {
  return (
    <button className="w-full cursor-pointer group block border-b border-[#181818] pb-4 focus:border-[#444444] transition-all">
      <span className="flex items-center justify-between">
        <span className="flex items-center gap-2 md:gap-10">
          <span className="block">
            <Image
              src={"/images/s1.svg"}
              alt="s1 not loading..."
              width={500}
              height={500}
              className="md:w-[50px] w-[40px]"
            />
          </span>
          <span className="block text-base md:text-2xl">
            Full-Stack Development
          </span>
        </span>
        <span className="flex items-center justify-center relative duration-1000 transition-all group-focus:-rotate-90">
          <span className="w-[15px] md:w-[25px] absolute bg-white h-[1px] transition-all duration-500 group-focus:bg-transparent"></span>
          <span className="w-[15px] md:w-[25px] absolute bg-white h-[1px] -rotate-90 transition-all"></span>
          <span className="w-[15px] md:w-[25px] block h-[1px] rotate-90 transition-all"></span>
        </span>
      </span>
      <span className="block text-left overflow-hidden group-focus:h-[150px] h-0 duration-1000 transition-all ">
        <span className="px-5 text-gray-400 text-xs md:text-lg pt-7 pb-10 block">
          The artistry and precision of Full-Stack Development. From crafting
          interactive front-end experiences that captivate users to architecting
          robust back-end systems.
        </span>
      </span>
    </button>
  );
};

export default DropDown;
