import Link from "next/link";
import React from "react";
import { Whisper } from "next/font/google";

const whisper = Whisper({ weight: "400", preload: false });

const Section6 = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center min-h-[50vh] bg-[#0c0c0c] rounded-xl p-5">
      <div className="md:w-[65%]">
        <p className="text-xl md:text-3xl">
          Whether it's a stunning website, a custom software solution, or a
          seamless mobile app, I'm here to help.
        </p>
        <p className="text-xl md:text-4xl py-5 font-[300]">
          Ready?{" "}
          <Link href={"/"} className="underline font-[300]">
            Let’s Get Started.
          </Link>
        </p>
        <p className={"text-5xl md:text-8xl md:py-5 " + whisper.className}>
          Chinmaya Sa
        </p>
      </div>
    </div>
  );
};

export default Section6;
