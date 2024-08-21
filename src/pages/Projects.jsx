import React from "react";
import { assets } from "../assets/assets.js";
import ProjectItems from "../components/ProjectItems.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id="projects" className="projects lg:px-24 w-full bg-[#161716]">
      <div className="projects_container w-full h-full px-6 pt-24 lg:px-20  ">
        <div className="header flex items-center gap-4">
          <div className="header_line h-[1px] bg-[#e8e8e8b7] w-full"></div>
          <h1 className="text-4xl font-black md:text-5xl">.Projects</h1>
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
            img={assets.bg2}
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
