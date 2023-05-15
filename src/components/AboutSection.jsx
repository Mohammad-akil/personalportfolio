import React from "react";

const AboutSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <h2 class="text-center mb-8 font-bold mt-11 md:mt-14 lg:mt-20 xl:mt-3 text-2xl md:text-3xl lg:text-5xl text-indigo-900">
        <span>About Me</span>
      </h2>
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0 md:space-x-8">
        <div class="max-w-lg">
          <p class="text-lg leading-7 font-medium text-gray-700 mb-4">
            Hello, I'm Mohammad Akil Shakir Husain, a dedicated front-end
            developer and computer science student. With a passion for creating
            beautiful, user-friendly interfaces, I have developed a strong skill
            set in frontend technologies.
          </p>

          <p class="text-lg leading-7 font-medium text-gray-700 mb-4">
            I have over 2000 connections and followers on LinkedIn, and I
            completed my React JS internship at Kode Creators. Currently, I am
            working as a frontend freelancer, leveraging my expertise in{" "}
            <span class="text-blue-800">
              React, Redux, HTML, CSS, JavaScript, Firebase, Tailwind, SASS, and
              Material-UI
            </span>{" "}
            to create responsive, performant applications that meet my clients'
            needs.
          </p>

          <p class="text-lg leading-7 font-medium text-gray-700 mb-4">
            I have a deep passion for coding, and I'm always looking for new
            ways to expand my skills. My focus is on crafting visually stunning
            designs that provide an excellent user experience. My projects
            showcase my attention to detail and commitment to producing
            high-quality work.
          </p>

          <p class="text-lg leading-7 font-medium text-gray-700">
            One of my recent accomplishments is the creation of a Google Clone
            using React and Firebase. I also developed an admin dashboard with
            Firebase authentication, which highlighted my proficiency in
            building complex, frontend-heavy applications.
          </p>
        </div>

        <div class="max-w-lg">
          <p class="text-lg leading-7 font-medium text-gray-700 mb-4">
            You can see these projects and more on my portfolio website, which
            showcases my design and development skills. With a goal of becoming
            a full-stack developer within the next six months, I am excited to
            continue honing my skills and contributing to innovative projects.
          </p>

          <p class="text-lg leading-7 font-medium text-gray-700">
            Thank you for considering me as a potential candidate. I look
            forward to the opportunity to demonstrate my frontend development
            skills and work with you to create exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
