import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlSocialGithub } from "react-icons/sl";
import { SiHyperskill } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div
      id="about"
      className="about px-4 lg:px-24 lg:h-screen w-full bg-[#161716]"
    >
      <div className="about_container w-full h-full px-6 py-24 lg:px-20 ">
        <div className="header flex items-center gap-4">
          <h1 className="text-4xl font-black md:text-5xl">About.</h1>
          <div className="header_line h-[1px] bg-[#e8e8e8b7] w-full"></div>
        </div>
        <div className="about_content flex flex-col md:flex-row gap-10 md:gap-6 w-full mt-8">
          <div className="left_contents flex flex-col gap-5 w-full md:w-[70%] text-gray-200 md:px-4 border-r border-r-white/70">
            <p className="about_type font-extralight     text-lg w-full md:w-[90%] text-gray-300">
              <span className="text-3xl">H</span>ey! I'm Adarsh, if you haven't
              already gathered that by now. I'm a self-taught full-stack web
              developer from Bhopal, India. I specialize in the Full-stack web
              development, primarily with Next & React for front-end and NodeJs
              for backend, but love building with whatever tools are right for
              the job.
            </p>

            <p className="about_type font-extralight text-lg w-full md:w-[90%] text-gray-300">
              I'm currently in my senior year of college, pursuing Bachelor's In
              Computer Science from Technocrats Institute of Technology.
            </p>

            <p className="about_type font-extralight text-lg w-full md:w-[90%] text-gray-300">
              Outside of work, I love to play video games, play sports, read my
              favourite books and watch Anime!
            </p>

            <p className="about_type font-extralight text-lg w-full md:w-[90%] text-gray-300">
              I'm passively looking for new positions where I can merge my love
              for code with my love for developing applications. If you think
              you've got an opening that I might like, let's connect 🔗
            </p>

            <div className="about_links flex items-center gap-4">
              <h3 className="flex items-center gap-2 text-lg text-nowrap">
                My links <FaArrowRightLong />
              </h3>
              <div className="link_links flex items-center gap-4">
                <button className="px-6 py-2 bg-[#526B56] border-none outline-none rounded-lg hover:scale-105 duration-150 hover:bg-[#5f9361]">
                  Resume
                </button>
                <a href="https://github.com/adarshbiswas" target="blank">
                  <div className="bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                    <SlSocialGithub
                      className="text-[#546E59] cursor-pointer"
                      size={22}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="right_contents flex flex-col gap-8 w-full md:w-[30%]">
            <div className="skills ">
              <div className="skill_title text-xl font-bold flex gap-2 items-center">
                <SiHyperskill size={22} className="text-green-300" /> Skill
                Respository
              </div>
              <div className="skill_items flex flex-wrap gap-2 mt-4">
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  JavaScript
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  React
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  NextJS
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  HTML
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  CSS
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  Redux
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  NodeJS
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  Express
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  Postgres
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  MongoDB
                </span>
                <span className="skill_items_item px-4 py-1 border-[1px] rounded-full">
                  GitHub
                </span>
                {/* <span className="skill_items_item px-4 py-1 border-2 rounded-full"></span> */}
              </div>
            </div>
            <div className="more_info">
              <div className="skill_title text-xl font-bold flex gap-2 items-center">
                <BsFillInfoSquareFill size={22} className="text-green-300" />{" "}
                More Info
              </div>
              <div className="more_info_items flex flex-col gap-2 mt-4 text-gray-200/90">
                <h3 className="flex items-center gap-3">
                  <IoIosArrowForward /> Full Name: Adarsh Biswas
                </h3>
                <h3 className="flex items-center gap-3">
                  <IoIosArrowForward /> DOB: 23 August 2003
                </h3>
                <h3 className="flex items-center gap-3">
                  <IoIosArrowForward /> Location: Bhopal, India
                </h3>
                <h3 className="flex items-center gap-3">
                  <IoIosArrowForward /> Experience: 2 years
                </h3>
                <h3 className="flex items-start gap-3">
                  <IoIosArrowForward size={30} /> Education: Technocrats
                  Institute of Technology [B.Tech CSE 2025]
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
