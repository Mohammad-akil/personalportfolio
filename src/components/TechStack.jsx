import React from "react";
import TechCarousel from "./TechCarousel";

const TechStack = () => {
  return (
    <div id="techstack" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="text-center flex flex-col gap-1 xl:gap-2">
        <p className="font-bold mt-11 md:mt-14 lg:mt-20 xl:mt-3 text-2xl md:text-3xl lg:text-5xl text-indigo-900">
          My Tech Stack
        </p>
        <p className="font-bold text-lg md:text-xl lg:text-2xl md:-tracking-tighter text-black ">
          Technologies i've been working recently
        </p>
      </div>
      <TechCarousel />
    </div>
  );
};

export default TechStack;
