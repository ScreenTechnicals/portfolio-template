import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  path: string;
  image: string;
  title: string;
  subheading1: string;
  subheading2: string;
  year?: number;
  category: "blogs" | "works";
};

const Card = (props: CardProps) => {
  return (
    <div className="w-full">
      <Link href={props.path} className="w-full">
        <div className="w-full group">
          <div className="w-full overflow-hidden rounded-md mb-5">
            <Image
              src={props.image}
              alt=""
              width={500}
              height={500}
              className="w-full rounded-xl duration-1000 pointer-events-none group-hover:scale-110 scale-105 transition-all"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <p
                className={`text-xl ${
                  props.category === "blogs" ? undefined : "md:text-2xl"
                } font-[400]`}
              >
                {props.title}
              </p>
              <p className="flex items-center gap-5 text-gray-400 text-sm md:text-base font-[300]">
                <span className="text-gray-400">{props.subheading1}</span>
                <span className="text-gray-400">{props.subheading2}</span>
              </p>
            </div>
            <div className="tex-xl md:text-2xl font-[400]">{props.year}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
