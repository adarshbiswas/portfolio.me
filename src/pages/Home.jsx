import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <>
      <div id="home" className="homepage bg-[#161716]">
        <Navbar />
        <div className="flex">
          <div className="left w-[45%] h-screen flex items-center justify-center pt-6">
            <img class="bgLanding h-[80vh] rounded-md" src={assets.home_bg} />
          </div>
          <div className="center w-[5px] flex justify-center ">
            <div className="div bg-[#49624C] w-[2px] h-[70%]"></div>
          </div>
          <div className="right w-[54%] h-screen flex items-center justify-center">
            <div className="intro_box w-[70%]">
              <div className="heading">
                <h1 className=" text-xl font-[rocky]"><span className="text-3xl">👋</span>Hi, I'm Adarsh</h1>
              </div>
              <p className="text-5xl leading-[3.8rem] mt-3">
                "A{" "}
                <span className="span_text font-extrabold text-[#D6C09C]">
                  web developer
                </span>{" "}
                who loves turning ideas into interactive, stylish, and
                user-friendly websites."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
