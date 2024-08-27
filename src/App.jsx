import React from "react";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ReactLenis root>
      <div className="app h-screen w-full bg-[#161716] text-white font-[poppins]">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
