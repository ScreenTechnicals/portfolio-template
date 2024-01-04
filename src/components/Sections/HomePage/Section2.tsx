import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className="w-full flex items-center justify-center xl:justify-end pb-10 pt-10 xl:pt-20 gap-3 flex-wrap">
      <div className="flex items-center justify-center gap-3">
        <div>
          <Image
            src={"/images/img1.png"}
            alt=""
            className="rounded-md"
            width={250}
            height={250}
          />
        </div>
        <div>
          <Image
            className="rounded-md"
            src={"/images/img1.png"}
            alt=""
            width={250}
            height={250}
          />
        </div>
      </div>
      <div>
        <div className="rounded-md w-[350px] h-[345px] object-cover overflow-hidden">
          <Image
            src={"/images/img1.png"}
            alt=""
            className="w-[100%]"
            width={350}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
