import React from "react";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialReddit } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    // * split text variables
    const contactText = new SplitType("#contact_item");

    gsap.from(contactText.chars, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      stagger: 0.02,
      ease: "back.out",
      scrollTrigger: {
        trigger: contactText.chars,
        // markers: true,
        start: "top 90%",
      },
    });

    gsap.from(".sub_titles", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      stagger: 0.02,
      ease: "back.out",
      scrollTrigger: {
        trigger: contactText.chars,
        // markers: true,
        start: "top 90%",
      },
    });

    gsap.from(".left_detail_items, .social_icons_left, .form_data_items", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      stagger: 0.05,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".main_content",
        // markers: true,
        start: "top 80%",
      },
    });
  });

  return (
    <div
      id="contact"
      className="contact px-4 lg:px-24 w-full min-h-full bg-[#161716]"
    >
      <div className="contact_container w-full h-full px-6 pt-20 lg:pt-24 lg:px-20 flex flex-col items-center gap-4 bg-inherit">
        <div className="header_content w-full text-center flex flex-col gap-1 items-center justify-center">
          <h1 className="text-6xl font-black pt-2 overflow-hidden">
            <span id="contact_item" className="contact_title">
              Contact.
            </span>
          </h1>
          <h1 className="sub_title_elem overflow-hidden">
            <h3 className="sub_titles text-xl md:text-xl mt-6">
              I'm always up for a chat!
            </h3>
            <p className="sub_titles text-lg md:text-xl">
              Pop me an email at{" "}
              <span className="text-[#E0CDAE] font-medium">
                adarshbiswas.dev@gmail.com
              </span>{" "}
              or give me a shout on social media.
            </p>
          </h1>
        </div>

        <div className="main_content w-full gap-6 flex flex-col lg:flex-row mt-12">
          <div className="main_left h-fit w-full lg:w-[50%]">
            <div className="left_details overflow-hidden w-fit ">
              <p className="left_detail_items text-4xl font-semibold">
                Wanna get to know more? Hit me up!
              </p>
              <p className="left_detail_items font-extralight mt-4 w-[90%]">
                Tighten up your belt & join me in the path of creating your
                dream website.
              </p>
            </div>

            <div className="social_container_icons hidden pt-4 md:flex gap-4 overflow-hidden ">
              <a
                className="social_icons_left"
                href="https://github.com/adarshbiswas"
                target="blank"
              >
                <div className=" bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <SlSocialGithub className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
              <a
                className="social_icons_left"
                href="https://www.instagram.com/geek.adxsh/"
                target="blank"
              >
                {" "}
                <div className=" bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <SlSocialInstagram className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
              <a
                className="social_icons_left"
                href="https://www.linkedin.com/in/adarshbiswas/"
                target="blank"
              >
                {" "}
                <div className=" bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <SlSocialLinkedin className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
              <a
                className="social_icons_left"
                href="https://www.reddit.com/user/Sykick23/"
                target="blank"
              >
                {" "}
                <div className="bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <SlSocialReddit className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
              <a
                className="social_icons_left"
                href="https://x.com/geekxdxrsh"
                target="blank"
              >
                {" "}
                <div className=" bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <FaXTwitter className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
            </div>
          </div>
          <div className="main_right mt-6 lg:mt-0 w-full lg:w-[50%]">
            <form className="flex flex-col gap-4 w-full pt-2" action="">
              <div className="  overflow-hidden">
                <div className="form_data_items flex flex-col">
                  <label className="text-lg text-white" htmlFor="Name">
                    Full Name
                  </label>
                  <input
                    className="px-3 py-2 w-full rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="  overflow-hidden">
                <div className="form_data_items flex flex-col">
                  <label className="text-lg text-white" htmlFor="Email ID">
                    Email ID
                  </label>
                  <input
                    className="px-3 py-2 rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                    type="email"
                    placeholder="abc@gmail.com"
                  />
                </div>
              </div>
              <div className="  overflow-hidden">
                <div className="form_data_items flex flex-col">
                  <label className="text-lg text-white" htmlFor="Message">
                    Message
                  </label>
                  <textarea
                    className="px-3 py-2 rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                    name="message"
                    rows="5"
                    placeholder="Write something here..."
                  ></textarea>
                </div>
              </div>
              <div className="submit_btn w-full text-center md:text-right overflow-hidden">
                <div className="form_data_items">
                  <input
                    className=" bg-[#405841] text-[#f4dcb8] mx-auto px-6 py-2 rounded-md cursor-pointer hover:scale-105 duration-150 hover:bg-[#5f9361]"
                    type="submit"
                  />
                </div>
              </div>
            </form>
            <div className="social_container_icons w-full flex items-center justify-center md:hidden mt-8 gap-4 ">
              <a href="https://github.com/adarshbiswas" target="blank">
                <div className="bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <SlSocialGithub className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
              <a href="https://www.instagram.com/geek.adxsh/" target="blank">
                {" "}
                <div className="bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <SlSocialInstagram className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/adarshbiswas/"
                target="blank"
              >
                {" "}
                <div className="bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <SlSocialLinkedin className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
              <a href="https://www.reddit.com/user/Sykick23/" target="blank">
                {" "}
                <div className="bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <SlSocialReddit className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
              <a href="https://x.com/geekxdxrsh" target="blank">
                {" "}
                <div className="bg-[#E0CDAE] p-2 rounded-full hover:scale-110 duration-150">
                  <FaXTwitter className="text-3xl text-[#546E59] cursor-pointer " />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="footer form_data_items w-full flex items-center justify-center">
          <p className="py-1 ">Made with ❣️ by Adarsh.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
