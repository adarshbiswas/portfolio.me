import React from "react";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar hidden md:block md:fixed z-30 top-0 left-0 w-16 h-screen bg-black">
        <div className="links flex flex-col items-center gap-20 text-white py-16 text-center text-xl">
          <a className="side_links" href="#home">Home</a>
          <a className="side_links" href="#about">About</a>
          <a className="side_links" href="#projects">Projects</a>
          <a className="side_links" href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
