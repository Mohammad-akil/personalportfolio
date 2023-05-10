import React from "react";
import Heroimg from "../assets/images/fotor-ai-20230510101929.jpg";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:mt-4 xl:mt-0 lg:grid-cols-2 gap-3 md:gap-5 justify-stretch xl:py-32">
        <div className="justify-items-start mx-auto flex items-center">
          <img
            className=" w-44 h-44 mt-4 xl:mt-0 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full lg:rounded-xl transition duration-500 cursor-pointer ease-in-out hover:scale-105  border-4"
            src={Heroimg}
            alt="Profile"
          />
        </div>
        <div className=" text-left font-semibold h-full lg:flex items-center">
          <p className="text-center text-xl block lg:hidden md:text-4xl ">
            Hi, I am <br />
            <span className="customGradient ">Mohammad Akil</span> <br />I am a
            Frontend Developer
          </p>

          <p
            className="leading-relaxed text-4xl text-center lg:text-left hidden lg:block"
            style={{ fontWeight: 700, color: "#3730A3" }}
          >
            Hi 👏, <br className="hidden lg:block" />
            My Name is <br />
            <span className="customGradient ">
              <span className="block lg:hidden">----</span>Mohammad Akil
              <span className="block lg:hidden">----</span>
            </span>{" "}
            <br />I am a Frontend Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
