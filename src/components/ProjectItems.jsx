import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectItems = (props) => {
  return (
    <>
      <div className="item p-4">
        <img className="project_image rounded-xl h-[250px] w-[350px] object-cover" src={props.img} />
        <div className="header mt-3 flex justify-between items-center pr-2">
          <h2 className="font-semibold text-gray-100/75">{props.date}</h2>
          <h2 className="view_project flex items-center gap-1">
            view project <FaArrowRightLong className="arrow_icon" />
          </h2>
        </div>

        <div className="flex flex-col gap-5 mt-4">
          <h1 className="text-2xl font-semibold text-[#f4dcb8]">{props.name}</h1>
          <p className="text-gray-100/75">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectItems;
