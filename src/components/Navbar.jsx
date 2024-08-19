import React from "react";
import { Link } from "react-scroll";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="navbar absolute z-10 bg-transparent flex justify-between items-center w-full px-8 pt-6">
      <Link to="/">
        <img className="h-16" src={assets.main_logo} alt="" />
      </Link>
      <div className="nav_items flex gap-12 mr-10">
        <ul className="nav_items_menu flex gap-6 text-lg font-bold">
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            <li>About</li>
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li>Projects</li>
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li>Contact</li>
          </Link>

          <Link to="blog" spy={true} smooth={true} offset={50} duration={500}>
            <li>Blog</li>
          </Link>
        </ul>
        <img
          className="h-9 cursor-pointer hover:scale-105 "
          src={assets.light}
          alt="light mode icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
