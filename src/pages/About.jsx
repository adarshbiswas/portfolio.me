import React, { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlSocialGithub } from "react-icons/sl";
import { SiHyperskill } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  //* Ref variables
  // const linkRef = useRef();

  //* Gsap animation
  useGSAP(() => {
    //* Split text variables
    const titleText = new SplitType("#about_title");

    gsap.from(titleText.chars, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "back.out",
      scrollTrigger: {
        trigger: titleText.chars,
        // markers: true,
        start: "top 90%",
      },
    });
    gsap.from(".about_line", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: titleText.chars,
        // markers: true,
        start: "top 90%",
      },
    });

    gsap.from(".para_texts", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#para_text",
        // markers: true,
        start: "top 80%",
      },
    });

    gsap.from("#link_elems", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".about_links",
        // markers: true,
        start: "top 80%",
      },
    });

    gsap.from(".skill_title, .skill_title2", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".skill_title2",
        // markers: true,
        start: "top bottom",
      },
    });

    gsap.from(".skill_items_item, .about_elems", {
      y: 100,
      opacity: 0,
      delay: 0.1,
      duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".skill_title2",
        // markers: true,
        start: "top bottom",
      },
    });
  });

  return (
    <div id="about" className="about lg:px-24 lg:h-screen w-full bg-[#161716]">
      <div className="about_container w-full h-full px-4 py-24 lg:px-20 ">
        <div className="header flex items-center gap-4 pr-4">
          <h1
            id="about_title"
            className="text-4xl font-black w-[230px] md:text-5xl overflow-hidden text-center"
          >
            About.
          </h1>
          <div className="about_line h-[1px] bg-[#e8e8e8b7] w-full"></div>
        </div>
        <div className="about_content flex flex-col md:flex-row gap-10 md:gap-6 w-full mt-8">
          <div className="left_contents flex flex-col gap-5 w-full md:w-[70%] text-gray-200 md:px-4 md:border-r md:border-r-white/70">
            <div className="para_container overflow-hidden">
              <p
                id="para_text"
                className="para_texts font-extralight text-lg w-full md:w-[90%] text-gray-300 "
              >
                Hey! I'm Adarsh, if you haven't already gathered that by now.
                I'm a self-taught full-stack web developer from Bhopal, India. I
                specialize in the Full-stack web development, primarily with
                Next & React for front-end and NodeJs for backend, but love
                building with whatever tools are right for the job.
              </p>
            </div>
            <div className="para_container overflow-hidden">
              <p className="para_texts font-extralight text-lg w-full md:w-[90%] text-gray-300 ">
                I'm currently in my senior year of college, pursuing Bachelor's
                In Computer Science from Technocrats Institute of Technology.
              </p>
            </div>
            <div className="para_container overflow-hidden">
              <p className="para_texts font-extralight text-lg w-full md:w-[90%] text-gray-300 ">
                Outside of work, I love to play video games, play sports, read
                my favourite books and watch Anime!
              </p>
            </div>
            <div className="para_container overflow-hidden">
              <p className="para_texts font-extralight text-lg w-full md:w-[90%] text-gray-300 ">
                I'm passively looking for new positions where I can merge my
                love for code with my love for developing applications. If you
                think you've got an opening that I might like, let's connect 🔗
              </p>
            </div>

            <div className="about_links flex items-center gap-4 pt-4 px-2 w-fit overflow-hidden">
              <h3
                id="link_elems"
                className="flex items-center gap-2 text-lg text-nowrap "
              >
                My links <FaArrowRightLong />
              </h3>
              <div
                id="link_elems"
                className="link_links flex items-center gap-4"
              >
                <a
                  href="../assets/just for fun.pdf"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <button className="px-6 py-2 bg-[#526B56] border-none outline-none rounded-lg hover:scale-105 duration-150 hover:bg-[#5f9361]">
                    Resume
                  </button>
                </a>
                <a
                  id="link_elems"
                  href="https://github.com/adarshbiswas"
                  target="_blank"
                >
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
            <div className="skills overflow-hidden">
              <div className="w-fit overflow-hidden">
                <h1 className="skill_title flex gap-2 items-center text-xl font-bold">
                  <SiHyperskill size={22} className="text-green-300" /> Skill
                  Repository
                </h1>
              </div>
              <div className="skill_items flex flex-wrap gap-2 pt-4 overflow-hidden">
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
              <div className="w-fit overflow-hidden">
                <h1 className="skill_title2 text-xl font-bold flex gap-2 items-center">
                  <BsFillInfoSquareFill size={22} className="text-green-300" />{" "}
                  More Info
                </h1>
              </div>
              <div className="more_info_items flex flex-col gap-2 pt-4 text-gray-200/90 overflow-hidden">
                <h3 className="about_elems flex items-center gap-3">
                  <IoIosArrowForward /> Full Name: Adarsh Biswas
                </h3>
                <h3 className="about_elems flex items-center gap-3">
                  <IoIosArrowForward /> DOB: 23 August 2003
                </h3>
                <h3 className="about_elems flex items-center gap-3">
                  <IoIosArrowForward /> Location: Bhopal, India
                </h3>
                <h3 className="about_elems flex items-center gap-3">
                  <IoIosArrowForward /> Experience: 2 years
                </h3>
                <h3 className="about_elems flex items-start gap-3">
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
