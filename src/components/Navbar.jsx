import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { IoClose } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";

// import { SlSocialGithub } from "react-icons/sl";
// import { SlSocialInstagram } from "react-icons/sl";
// import { SlSocialLinkedin } from "react-icons/sl";
// import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="navbar fixed z-20 top-0 left-0 backdrop-blur-sm flex justify-between items-center w-full px-6 py-6">
        <h1 className=" text-sm font-[rocky] ">Portfolio</h1>

        <div className="nav_items hidden md:flex items-center gap-12 mr-10">
          <ul className="nav_items_menu flex gap-6 text-lg font-light text-white/80">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
            <a href="#blog">
              <li>Blogs</li>
            </a>
          </ul>
          <img
            className="h-9 cursor-pointer hover:scale-105 "
            src={assets.light}
            alt="light mode icon"
          />
        </div>

        <div className="menu_btn block md:hidden" onClick={handleNav}>
          {!nav ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
        </div>
      </div>

      <div
        className={
          !nav
            ? "mobile_sidebar fixed z-50 md:hidden top-0 left-0 w-[60%] h-screen bg-[#161716] px-6 py-8  border-r border-r-gray-300 ease-in-out duration-300"
            : "mobile_sidebar fixed z-50 md:hidden top-0 left-[-100%] w-[60%] h-screen bg-[#161716] px-6 py-8  border-r border-r-gray-300 ease-in-out duration-300"
        }
      >
        <div className="sidebar_items flex flex-col gap-6">
          {/* <h1 className=" text-sm font-[rocky] ">Portfolio</h1> */}

          <ul className="nav_items_menu flex flex-col gap-6 text-3xl font-light text-white/80  mt-6">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
            <a href="#blog">
              <li>Blogs</li>
            </a>
          </ul>
          <div className="theme ">
            <img
              className="h-9 cursor-pointer hover:scale-105 "
              src={assets.light}
              alt="light mode icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
