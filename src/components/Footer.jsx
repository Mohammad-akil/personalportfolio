import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-2  max-w-7xl  sm:px-6 lg:px-8 py-2 md:py-6 m-2 border-b-2">
        <div className="text-center">
          <span className="font-semibold text-2xl cursor-pointer customGradient">
            Akil.dev
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-8">
          <span>
            <a href="#">mohammadakilshakirhusian@gmail.com</a>
          </span>
          <div className="flex gap-7">
            <AiFillGithub size={25} />
            <AiFillLinkedin size={25} />
            <AiFillTwitterCircle size={25} />
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8 py-6 m-2 flex justify-center items-center">
        <span>
          Design and Build by <span className="customGradient">Akil</span> with{" "}
          <span className="customGradient">Coffee</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
