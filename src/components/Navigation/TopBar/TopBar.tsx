import React from "react";
import navLinks from "@/utils/NavLinks/navLinks";
import Link from "next/link";
import { GoTriangleRight } from "react-icons/go";

const TopBar = ({ toggleTopBar }: { toggleTopBar: boolean }) => {
  return (
    <div
      className={
        toggleTopBar
          ? "fixed top-[5.55rem] left-0 bg-black w-full duration-300 transition-all overflow-hidden md:hidden"
          : "fixed -top-60 left-0 bg-black w-full duration-300 transition-all overflow-hidden md:hidden"
      }
    >
      <div className="p-5">
        {navLinks?.map((link, index) => (
          <Link href={link.path} key={index} className="p-2 block">
            <span className="group flex items-center justify-between">
              <span className="capitalize group-hover:text-[#fff] transition-all font-[200] text-sm text-gray-400">
                {link?.name}
              </span>
              <span className="capitalize group-hover:text-[#fff] transition-all font-[200] text-sm text-gray-400">
                <GoTriangleRight />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
