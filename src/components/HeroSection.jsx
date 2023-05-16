import React from "react";
import Heroimg from "../assets/images/fotor-ai-20230510101929.jpg";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div id="home" className=" grow mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 lg:mt-4 xl:mt-0 lg:grid-cols-2 gap-3 md:gap-5 justify-stretch xl:py-32">
        <div className="justify-items-start mx-auto flex items-center ">
          <img
            className="w-44 h-44 mt-4 xl:mt-0 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full lg:rounded-xl transition duration-500 cursor-pointer ease-in-out hover:scale-105  border-4 hover:border-indigo-600"
            src={Heroimg}
            alt="Profile"
          />
        </div>
        <div className="text-left font-semibold h-full  items-center">
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
          <div className="flex justify-center lg:justify-start gap-6 mt-3">
            <a
              href="https://www.linkedin.com/in/mohammad-akil-3b0438203/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative flex justify-center items-center">
                <FiLinkedin />
                <span className="ml-2">Linkdein</span>
              </span>
            </a>
            <a
              href="https://github.com/Mohammad-akil/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 relative rounded group font-medium text-white  inline-block"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative flex justify-center items-center">
                <FiGithub />
                <span className="ml-2">Github</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
