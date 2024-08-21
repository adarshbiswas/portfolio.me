import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { FaGithubSquare } from "react-icons/fa";

const ProjectItems = (props) => {
  return (
    <>
      <div className="item p-4 ">
        <div className="image_container_box relative h-[280px] bg-[#232323] cursor-pointer overflow-hidden rounded-lg">
          <img
            className="project_image rounded-lg h-[95%] w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 object-cover"
            src={props.img}
          />
        </div>
        <div className="project_info">
          <div className="header mt-4 flex items-center gap-3">
            {/* <h2 className="font-semibold text-gray-100/75">{props.date}</h2>   */}

            <h1 className="text-2xl text-nowrap font-semibold text-[#f4dcb8]">
              {props.name}
            </h1>

            <div className="underline_elem h-[0.5px] bg-[#e8e8e8b7] w-full"></div>

            <h2 className="view_github flex items-center gap-1 hover:scale-110 duration-300 cursor-pointer">
              <FaGithubSquare size={28} className=" opacity-75" />
            </h2>

            <h2 className="view_project flex items-center gap-1 text-nowrap">
              {/* <LuArrowUpRightFromCircle size={26} className="rotate-45" /> */}
              Live <FaArrowRightLong className="project_arrow" />
            </h2>
          </div>
          <div className=" flex flex-col gap-5 mt-4">
            <div className="tech_used w-full break-words flex gap-2 font-medium text-white ">
              {props.tech?.map((item, index) => {
                return (
                  <span key={index} className="">
                    {item}
                  </span>
                );
              })}
            </div>

            <p className="text-white/60 font-extralight">
              {props.desc} {/*  */}
              <span className="text-[#f4dcb8] font-medium hover:underline hover:cursor-pointer duration-500">
                Learn More...
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItems;
