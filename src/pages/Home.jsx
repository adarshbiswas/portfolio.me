import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

const Home = () => {
  //* Ref variables
  const titleRef = useRef();
  const paraRef = useRef();

  // const titleRef = useRef();

  //* Gsap animation
  useGSAP(() => {
    const titleText = new SplitType("#intro_title");
    const paraText = new SplitType("#intro_para");

    gsap.from(".balls", {
      opacity: 0,
      duration: 1,
    });

    gsap.from(titleText.words, {
      opacity: 0,
      yPercent: 130,
      ease: "back.out",
      stagger: 0.05,
      duration: 1,
      delay: 0.2,
    });

    gsap.from(paraText.words, {
      opacity: 0,
      yPercent: 130,
      ease: "back.out",
      stagger: 0.05,
      duration: 1,
      delay: 0.2,
    });
  });

  return (
    <section id="home" className="homepage w-full h-full bg-[#161716]">
      <div className="home_content relative w-full h-full text-center flex items-center justify-center">
        <div className="ball1 balls absolute h-[38vw] w-[38vw] md:h-[30vw] md:w-[30vw] rounded-full bg-[#49614C]"></div>
        <div className="ball2 balls absolute  h-[38vw] w-[38vw] md:h-[30vw] md:w-[30vw] rounded-full bg-[#49614C]"></div>

        <div className="intro_box md:w-[44%] px-2">
          <div className="heading font-[rocky]">
            <h1
              id="intro_title"
              ref={titleRef}
              className="title_elem relative text-lg mr-4 md:mr-auto md:text-xl font-[rocky] flex"
            >
              <span className="text-4xl md:text-3xl">👋</span>Hi, I'm Adarsh
            </h1>
          </div>

          <div className="para_item ">
            <p
              id="intro_para"
              ref={paraRef}
              className="para_elem text-2xl relative font-['Gilroy'] md:text-[2.3rem] leading-none mt-3 md:mt-5 md:text-center "
            >
              "A{" "}
              <span className="span_text font-extrabold font-['Gilroy'] text-[#D6C09C]">
                Web Developer
              </span>{" "}
              who loves turning ideas into interactive, stylish, and
              user-friendly websites."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
