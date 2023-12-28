import React from "react";
import navLinks from "@/utils/NavLinks/navLinks";
import myDetails from "@/utils/myDetails/myDetails";
import Image from "next/image";

const Header = () => {
  const { myName, profession } = myDetails;
  return (
    <header className="w-full p-5 flex items-center justify-around">
      <div className="flex items-center gap-2">
        <Image src={"/images/logo.svg"} alt="logo" width={50} height={50} />
        <div>
          <p className=" text-[#989898]" style={{ fontFamily: "400" }}>
            {myName}
          </p>
          <p className="font-[900] text-sm uppercase">{profession}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
