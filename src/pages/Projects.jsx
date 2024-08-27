import React, { useRef } from "react";
import { assets } from "../assets/assets.js";
import ProjectItems from "../components/ProjectItems.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// * Ref variables

const Projects = () => {
  // * Gsap animation
  useGSAP(() => {
    // * Split text variables
    const titleText = new SplitType("#project_title");

    gsap.from(titleText.chars, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "back.out",
      scrollTrigger: {
        trigger: titleText.chars,
        scroller: "body",
        // markers: true,
        start: "top 90%",
      },
    });

    gsap.from(".header_line", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: titleText.chars,
        scroller: "body",
        // markers: true,
        start: "top 90%",
      },
    });7

    gsap.from(".container", {
      y: 150,
      opacity: 0,
      duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        // markers: true,
        start: "top 90%",
      },
    });
  });

  return (
    <div id="projects" className="projects lg:px-24 w-full bg-[#161716]">
      <div className="projects_container w-full h-full px-6 pt-24 lg:px-20  ">
        <div className="header w-full flex items-center gap-4">
          <div className="header_line h-[1px] bg-[#e8e8e8b7] w-full"></div>

          <h1
            id="project_title"
            className=" text-4xl w-[300px] font-black md:text-5xl overflow-hidden"
          >
            .Projects
          </h1>
        </div>
        <div className="container w-full">
          <ProjectItems
            img={assets.animacho_bg}
            date={"14 August 2024"}
            name={"Animacho"}
            tech={["ReactJS,", "Tailwind,", "JikanAPI,", "Postman"]}
            desc={
              "A modern Anime library consisting of all the movies and TV shows, Used JikanAPI to fetch all the data using React js."
            }
          />
          <ProjectItems
            img={assets.feastfleet_bg}
            date={"23 August 2023"}
            name={"FeastFleet"}
            tech={["ReactJS,", "Tailwind,", "NodeJS,", "MongoDB,", "Stripe"]}
            desc={
              "A fully functional Food delivering website to order delicious meals. From surfing over the food menu to placing order via secure stripe payment."
            }
          />
          <ProjectItems
            img={assets.donow_bg}
            date={"02 May 2023"}
            name={"DoNow"}
            tech={["NextJS,", "ReactJS,", "Tailwind,", "NodeJS,", "Supabase"]}
            desc={
              "A Task manager application to keep a track of all your TODO work. Keeps track of all your daily course work in it's efficient databse built using supabase."
            }
          />
          <ProjectItems
            img={assets.tuneit_bg}
            date={"19 August 2024"}
            name={"TuneIt"}
            tech={["NextJS,", "ReactJS,", "NodeJS,", "Supabase,", "Stripe"]}
            desc={
              "A modern music application built using Spotify's open source API. Built using NextJS for more flexible and efficiency, consist of database management for uploading our local music files."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
