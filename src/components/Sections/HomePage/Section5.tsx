import DropDown from "@/components/DropDowns/HomePage/Section5/DropDown";
import Image from "next/image";
import React from "react";

const Section5 = () => {
  return (
    <div className="flex w-full mb-20 min-h-[50vh] justify-between md:px-10 md:flex-row flex-col">
      <div className="md:w-[35%] flex flex-col justify-between gap-5">
        <p className="text-4xl md:text-6xl font-[400]">What I Do</p>
        <p className="text-lg text-gray-400">
          I specialize in crafting custom solutions that seamlessly blend
          innovation with functionality.
        </p>
      </div>
      <div className="w-full md:w-[60%] space-y-10 md:my-0 my-10">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        {/* <DropDown /> */}
      </div>
    </div>
  );
};

export default Section5;
