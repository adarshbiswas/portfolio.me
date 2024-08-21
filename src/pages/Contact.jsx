import React from "react";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialReddit } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact px-4 lg:px-24 min-h-screen w-full bg-[#161716]"
    >
      <div className="contact_container w-full h-full px-6 py-20 lg:py-24 lg:px-20 flex flex-col items-center gap-4 ">
        <div className="header_content w-full text-center flex flex-col gap-1 items-center justify-center">
          <h1 className="text-6xl font-black">Contact.</h1>
          <h3 className="text-xl md:text-xl mt-6">I'm always up for a chat!</h3>
          <p className="text-lg md:text-xl">
            Pop me an email at{" "}
            <span className="text-[#E0CDAE] font-medium">
              adarshbiswas.dev@gmail.com
            </span>{" "}
            or give me a shout on social media.
          </p>
        </div>

        <div className="main_content w-full gap-6 flex flex-col lg:flex-row mt-12">
          <div className="main_left w-full lg:w-[50%]">
            <p className="text-4xl">Wanna get to know more? Hit me up!</p>
            <p className="font-extralight mt-4">
              Tighten up your belt & join me in the path of creating your dream
              website.
            </p>
          </div>
          <div className="main_right mt-8 lg:mt-0 w-full lg:w-[50%]">
            <form
              className="flex flex-col justify-center gap-8 w-full"
              action=""
            >
              <div className="flex flex-col">
                <label className="text-lg text-white" htmlFor="Name">
                  Full Name
                </label>
                <input
                  className="px-3 py-3 w-full rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg text-white" htmlFor="Email ID">
                  Email ID
                </label>
                <input
                  className="px-3 py-3 rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                  type="email"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg text-white" htmlFor="Message">
                  Message
                </label>
                <input
                  className="px-3 py-6 rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                  type="text"
                  placeholder="message"
                />
              </div>
              <input
                className="bg-[#405841] text-[#f4dcb8] mx-auto px-6 py-2 rounded-md hover:scale-105 duration-150 hover:bg-[#5f9361]"
                type="submit"
              />
            </form>
          </div>
        </div>

        {/* <div className="contact_left h-full w-[50%]">
          <h1 className="text-3xl">Contact me!</h1>
          <div className="contact_left_content mt-8">
            <h1 className="text-5xl font-semibold">Wanna get to know more?</h1>
            <h1 className="text-5xl font-semibold">Hit me up!</h1>
            <p className="text-gray-200">
              Tighten up your belt & join me in the path of creating
              <span className="text-[#f4dcb8]"> your dream website</span>.
            </p>
          </div>
          <div className="social_container mt-36">
            <h1 className="text-2xl">I'm always up for a chat. </h1>
            <div className="email mt-4">
              <h1 className="text-xl">
                <a
                  href="mailto:adarshbiswas.dev@gmail.com?
                cc=adarshbiswas.dev@gmail.com&
                subject=Query realted email&
                body=Write your query here?"
                >
                  <span className="flex items-center gap-2 underline decoration-1 cursor-pointer text-[#546E59] hover:text-[#6fa179] duration-150 font-semibold ">
                    Pop me an email at <MdOutlineEmail />
                  </span>
                </a>
                <span>adarshbiswas.dev@gmail.com </span>
                or give me a shout on social media.
              </h1>
            </div>
            <div className="social_container_icons hidden mt-4 md:flex gap-4 ">
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

        <div className="contact_right h-[90%] w-[50%] flex items-center px-8">
          <form
            className="flex flex-col justify-center gap-8 w-[85%]"
            action=""
          >
            <div className="flex flex-col">
              <label className="text-lg text-white" htmlFor="Name">
                Full Name
              </label>
              <input
                className="px-3 py-3 rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-white" htmlFor="Email ID">
                Email ID
              </label>
              <input
                className="px-3 py-3 rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                type="email"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-white" htmlFor="Message">
                Message
              </label>
              <input
                className="px-3 py-6 rounded-md border-none text-[#f4dcb8] outline-none text-lg bg-[#d6d6d648]"
                type="text"
                placeholder="message"
              />
            </div>
            <input
              className="bg-[#405841] text-[#f4dcb8] mx-auto px-6 py-2 rounded-md hover:scale-105 duration-150 hover:bg-[#5f9361]"
              type="submit"
            />
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
