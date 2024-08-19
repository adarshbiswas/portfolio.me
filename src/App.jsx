import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Link } from "react-scroll";

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <div className="app relative w-full h-full text-white bg-black">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="floating_btn fixed z-99 bottom-6 right-5 px-3 py-3 bg-[#546E59] rounded-full hover:scale-105 duration-150 hover:bg-[#5f9361] cursor-pointer">
            <FaLongArrowAltUp />
          </div>
        </Link>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
