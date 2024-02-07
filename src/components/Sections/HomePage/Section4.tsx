import Card from "@/components/Cards/Category/Card";
import React from "react";
import { IoOpenOutline } from "react-icons/io5";

const Section4 = () => {
  return (
    <div className="w-full">
      <p className="md:text-4xl text-2xl py-5 md:pt-10 md:px-10 font-[400]">
        My Selected Works
      </p>
      <div className="w-full  md:p-10 grid gap-10 grid-cols-1 xl:grid-cols-2">
        <Card
          path="/"
          image="/images/attendee.png"
          title="Attendee 3.0"
          subheading1="College's"
          subheading2="App"
          category="works"
        />
        <Card
          path="/"
          image="/images/attendee.png"
          title="Attendee 3.0"
          subheading1="College's"
          subheading2="App"
          category="works"
        />
        <Card
          path="/"
          image="/images/attendee.png"
          title="Attendee 3.0"
          subheading1="College's"
          subheading2="App"
          category="works"
        />
        <Card
          path="/"
          image="/images/attendee.png"
          title="Attendee 3.0"
          subheading1="College's"
          subheading2="App"
          category="works"
        />
      </div>
      <div className="flex items-center justify-center md:justify-end w-full my-10">
        <button className="flex items-center gap-2 px-6 font-bold py-4 border rounded-full bg-black transition-all hover:invert border-[#444444]">
          <span>View All</span>
          <span>
            <IoOpenOutline />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Section4;
