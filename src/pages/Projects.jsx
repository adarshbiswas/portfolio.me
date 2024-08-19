import React from "react";
import { assets } from "../assets/assets.js";
import ProjectItems from "../components/ProjectItems.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="projects w-full h-full md:h-screen py-24 px-20 bg-[#161716]">
      <h1 className="text-4xl underline decoration-dashed underline-offset-8 flex items-center gap-3 px-4">
        Projects I built <FaArrowRightLong />
      </h1>

      <div className="container">
        <ProjectItems
          img={assets.feastfleet_bg}
          date={"23 August 2023"}
          name={"FeastFleet"}
          desc={
            "Fully functional E-commerce food delivering website to order delicious meals. Developed with MERN tech stack. ReactJS and Tailwind CSS for the UI, ExpressJS for backend handling and MongoDB for database management."
          }
        />
        <ProjectItems
          img={assets.bg2}
          date={"02 May 2023"}
          name={"DoNow"}
          desc={
            "A Task manager application to keep a track of all your TODO work. It Is developed using NextJs with ReactJs for the seamless UI, also Prisma and MongoDB to manage the database."
          }
        />
        <ProjectItems
          img={assets.spotify_bg}
          date={"19 August 2024"}
          name={"Spotify clone"}
          desc={
            "It mirrors Spotify's functionality with efficiency and style. It blends server-side rendering, dynamic interfaces, has payment gateway, robust database management, and sleek styling for a seamless user experience.."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
