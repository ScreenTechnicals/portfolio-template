"use client";

import React, { useState } from "react";
import navLinks from "@/utils/NavLinks/navLinks";
import myDetails from "@/utils/myDetails/myDetails";
import Image from "next/image";
import Link from "next/link";
import TopBar from "../TopBar/TopBar";

const Header = () => {
  const { myName, profession } = myDetails;
  const [toggleTopBar, setToggleTopBar] = useState<boolean>(false);

  return (
    <header className="w-full bg-black xl:py-5 xl:px-20 p-5 flex items-center justify-between xl:border-none border-b z-[9999] border-[#292929] xl:static sticky top-0 left-0">
      <div className="flex items-center gap-1 xl:gap-2">
        <Link href={"/"}>
          <Image
            className="xl:w-[45px] w-[40px]"
            src={"/images/logo.svg"}
            alt="logo"
            width={45}
            height={45}
          />
        </Link>
        <div>
          <p className=" text-[#989898] font-[300] text-sm">{myName}</p>
          <p className="font-[500] text-[13px] xl:text-sm uppercase">
            {profession}
          </p>
        </div>
      </div>
      <nav className="py-3 xl:block hidden px-4 border rounded-full space-x-10 border-[#292929]">
        {navLinks?.map((link, index) => (
          <Link href={link.path} key={index} className="p-2">
            <span className="capitalize hover:text-[#fff] transition-all font-[400] text-sm text-gray-400">
              {link?.name}
            </span>
          </Link>
        ))}
      </nav>
      <div className="xl:block hidden">
        <Link
          href={"/contact"}
          className="flex items-center justify-center gap-1"
        >
          <span className="block relative w-[7px] h-[7px] bg-white rounded-full"></span>
          <span className="block tracking-wider text-md font-[400]">
            Contact me
          </span>
        </Link>
      </div>
      <div className="xl:hidden">
        <button
          onClick={() => {
            setToggleTopBar(!toggleTopBar);
          }}
          className="relative"
        >
          <span
            className={
              toggleTopBar
                ? "w-[40px] absolute top-0 left-0 rotate-45 duration-500 transition-all my-2 h-[2px] bg-white block"
                : "w-[40px] transition-all my-2 h-[2px] duration-500 bg-white block"
            }
          ></span>
          <span
            className={
              toggleTopBar
                ? "w-[40px] my-2 h-[2px] bg-black block"
                : "w-[40px] my-2 h-[2px] bg-white block"
            }
          ></span>
          <span
            className={
              toggleTopBar
                ? "w-[40px] absolute -rotate-45 top-0 left-0 duration-500 transition-all my-2 h-[2px] bg-white block"
                : "w-[40px] transition-all my-2 h-[2px] duration-500 bg-white block"
            }
          ></span>
        </button>
      </div>
      <TopBar toggleTopBar={toggleTopBar} />
    </header>
  );
};

export default Header;
