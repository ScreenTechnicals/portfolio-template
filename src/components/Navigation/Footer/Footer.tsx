import navLinks from "@/utils/NavLinks/navLinks";
import myDetails from "@/utils/myDetails/myDetails";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const { myName, profession, email, socialMediaLinks } = myDetails;

  return (
    <footer className="w-full min-h-[35vh] md:px-20 py-5 p-5 flex justify-between lg:flex-row flex-col">
      <div className="lg:space-y-5 space-y-2 mb-7">
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
        <div className="flex items-center gap-2 pl-2">
          <MdEmail size={25} />

          <a
            href={`mailto:${email}`}
            className=" font-[400] tracking-wider text-sm"
            referrerPolicy="no-referrer"
          >
            {email}
          </a>
        </div>
      </div>
      <div className="flex md:gap-32 gap-5 lg:flex-row flex-col">
        <div className="flex md:gap-16 gap-10">
          <div className="">
            {navLinks?.slice(0, 2)?.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link?.path}
                  className="block text-lg text-gray-400 hover:text-white transition-all p-1 font-[400]"
                >
                  {link?.name}
                </Link>
              );
            })}
          </div>
          <div>
            {navLinks?.slice(2, navLinks?.length)?.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link?.path}
                  className="block text-lg text-gray-400 hover:text-white transition-all p-1 font-[400]"
                >
                  {link?.name}
                </Link>
              );
            })}
            <Link
              href={"/contact"}
              className="block text-lg text-gray-400 hover:text-white transition-all p-1 font-[400]"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="lg:space-y-3 lg:space-x-0 space-x-3 lg:block flex items-center">
          {socialMediaLinks?.x && (
            <a
              href={socialMediaLinks?.x}
              className="text-xl block p-2 border-[#484848] hover:border-[#646464] transition-all border rounded-full"
            >
              <FaXTwitter />
            </a>
          )}
          {socialMediaLinks?.instagram && (
            <a
              href={socialMediaLinks?.instagram}
              className="text-xl block border rounded-full p-2 border-[#484848] hover:border-[#646464] transition-all"
            >
              <FaInstagram />
            </a>
          )}
          {socialMediaLinks?.facebook && (
            <a
              href={socialMediaLinks?.facebook}
              className="text-xl block border rounded-full p-2 border-[#484848] hover:border-[#646464] transition-all"
            >
              <FaFacebook />
            </a>
          )}
          {socialMediaLinks?.youtube && (
            <a
              href={socialMediaLinks?.youtube}
              className="text-xl block border rounded-full p-2 border-[#484848] hover:border-[#646464] transition-all"
            >
              <FaYoutube />
            </a>
          )}
          {socialMediaLinks?.github && (
            <a
              href={socialMediaLinks?.github}
              className="text-xl block border rounded-full p-2 border-[#484848] hover:border-[#646464] transition-all"
            >
              <FaGithub />
            </a>
          )}
          {socialMediaLinks?.linkedin && (
            <a
              href={socialMediaLinks?.linkedin}
              className="text-xl block border rounded-full p-2 border-[#484848] hover:border-[#646464] transition-all"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
