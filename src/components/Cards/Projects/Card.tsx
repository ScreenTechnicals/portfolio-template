import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="w-full">
      <Link href={"/"} className="w-full">
        <div className="w-full group">
          <div className="w-full overflow-hidden rounded-md mb-5">
            <Image
              src={"/images/attendee.png"}
              alt=""
              width={500}
              height={500}
              className="w-full rounded-xl duration-1000 pointer-events-none group-hover:scale-110 scale-105 transition-all"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-xl md:text-2xl font-[400]">Attendee 3.0</p>
              <p className="flex items-center gap-5 text-gray-400 text-sm md:text-base font-[300]">
                <span className="text-gray-400">College's</span>
                <span className="text-gray-400">App</span>
              </p>
            </div>
            <div className="tex-xl md:text-2xl font-[400]">2023</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
