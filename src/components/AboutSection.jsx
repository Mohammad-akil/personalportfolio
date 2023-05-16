import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10 ">
      <h2 className="text-center mb-8 font-bold mt-11 md:mt-14 lg:mt-20 xl:mt-3 text-2xl md:text-3xl lg:text-5xl text-indigo-900 ">
        <span>About Me</span>
      </h2>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Hello, I'm Mohammad Akil</h2>
          <p className="text-xl text-gray-700 mb-8">
            I'm a passionate Frontend Developer with expertise in React, Redux,
            Firebase, and Tailwind CSS.
          </p>
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
