import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10 mb-5 bg-slate-100 shadow-xl rounded-xl"
    >
      <h2 className="text-center mb-8 font-bold mt-11 md:mt-14 lg:mt-20 xl:mt-3 text-2xl md:text-3xl lg:text-5xl text-indigo-900 ">
        <span>About Me</span>
      </h2>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold my-4">Hello, I'm Mohammad Akil</h2>
          <div className="flex flex-col gap-2 justify-center items-center text-center ">
            <div className="flex items-center justify-center p-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full">
              <img
                className="h-20 w-20 rounded-full border "
                src="https://media.licdn.com/dms/image/D4D03AQEqOOhFA4XPrw/profile-displayphoto-shrink_100_100/0/1671196374874?e=1689206400&v=beta&t=ridO3X1L8pegZxNYv_HMDhj1t24qxFlNZ5CMECqKce8"
                alt="Profile"
              />
            </div>
            <p className="text-xl text-gray-700 mb-4 ">
              I'm a passionate Frontend Developer with expertise in React,
              Redux, Firebase, and Tailwind CSS.
            </p>
          </div>
          <p className="text-lg text-gray-700">
            With a strong foundation in modern web development, I strive to
            create efficient, responsive, and visually appealing user
            interfaces. My goal is to combine functionality with aesthetics to
            deliver exceptional experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
