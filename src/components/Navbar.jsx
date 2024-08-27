import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { IoClose } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".navbar", {
      y: -100,
      opacity: 0,
      duration:1,
    });
  });

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
            <Link className="cursor-pointer" to="home" spy={true} smooth={true} duration={500}>
              <li>home</li>
            </Link>
            <Link className="cursor-pointer" to="about" spy={true} smooth={true} duration={500}>
              <li>about</li>
            </Link>
            <Link className="cursor-pointer" to="projects" spy={true} smooth={true} duration={500}>
              <li>projects</li>
            </Link>
            <Link className="cursor-pointer" to="contact" spy={true} smooth={true} duration={500}>
              <li>contact</li>
            </Link>
            <Link className="cursor-pointer" to="blog" spy={true} smooth={true} duration={500}>
              <li>blogs</li>
            </Link>
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
            ? "mobile_sidebar fixed z-50 md:hidden top-0 left-0 w-[60%] h-screen backdrop-blur-md px-6 py-8 border-r border-r-gray-300 ease-in-out duration-300"
            : "mobile_sidebar fixed z-50 md:hidden top-0 left-[-100%] w-[60%] h-screen backdrop-blur-md px-6 py-8  border-r border-r-gray-300 ease-in-out duration-300"
        }
      >
        <div className="sidebar_items flex flex-col gap-6">
          {/* <h1 className=" text-sm font-[rocky] ">Portfolio</h1> */}

          <ul className="nav_items_menu flex flex-col gap-6 text-3xl font-light text-white/80 mt-6">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <li>Home</li>
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <li>About</li>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <li>Projects</li>
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <li>Contact</li>
            </Link>
            <Link to="blog" spy={true} smooth={true} duration={500}>
              <li>Blogs</li>
            </Link>
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
