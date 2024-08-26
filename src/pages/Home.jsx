import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Home = () => {
  const titleRef = useRef();
  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 200,
      opacity: 0,
      ease: "elastic",
      duration: 1,
      delay: 1,
    });

    gsap.from(".balls", {
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <section id="home" className="homepage w-full h-full bg-[#161716]">
      <div className="home_content relative w-full h-full text-center flex items-center justify-center">
        <div className="ball1 balls absolute h-[38vw] w-[38vw] md:h-[30vw] md:w-[30vw] rounded-full bg-[#49614C]"></div>
        <div className="ball2 balls absolute  h-[38vw] w-[38vw] md:h-[30vw] md:w-[30vw] rounded-full bg-[#49614C]"></div>

        <div ref={titleRef} className="intro_box md:w-[44%] px-2">
          <div className="heading">
            <h1 className=" relative text-lg mr-4 md:mr-auto md:text-xl font-[rocky]">
              <span className="text-4xl md:text-3xl">👋</span>Hi, I'm Adarsh
            </h1>
          </div>

          <p className="text-2xl relative font-['Gilroy'] md:text-[2.3rem] leading-none mt-3 md:mt-5 md:text-center ">
            "A{" "}
            <span className="span_text font-extrabold font-['Gilroy'] text-[#D6C09C]">
              Web Developer
            </span>{" "}
            who loves turning ideas into interactive, stylish, and user-friendly
            websites."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
