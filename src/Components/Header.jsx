// import React from 'react'
import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

import { Link } from "react-scroll";
import profileImg from "../assets/profileImg.png";

const Header = () => {
  return (
    <div>
      <div className="mx-auto pt-[1rem] w-[40%] lg:flex lg:items-center lg:justify-between lg:w-[90%] lg:text-xl md:flex md:items-center md:justify-between md:w-[90%] md:text-xl">
        <div className="pl-[1rem]">
          <p className="font-bold lg:text-3xl">collinsOmondi</p>
        </div>
        <div className="flex gap-7 pt-[1.5rem] lg:pt-[0px] md:pt-[0px]">
          <a href="https://github.com/DevOmondi">
            <BsGithub />
          </a>
          <a href="https://stackoverflow.com/users/12764403/collins-omondi">
            <BsStackOverflow />
          </a>
          <a href="https://www.linkedin.com/in/collinsomondi/">
            <BsLinkedin />
          </a>
          <a href="https://twitter.com/Dev_Omondi">
            <BsTwitter />
          </a>
        </div>
      </div>
      {/* Intro section */}
      <div className="lg:flex lg:w-[92%] lg:mx-auto lg:items-center lg:pt-[3rem] md:flex md:w-[92%] md:mx-auto md:items-center md:pt-[3rem]">
        <img
          src={profileImg}
          alt="man working on laptop"
          className="w-[40%] mx-auto mt-[1rem] lg:h-[600px] md:h-[400px]"
        />
        <div>
          <h1 className="text-3xl font-bold text-center mt-[2rem] mx-[2rem] lg:text-7xl lg:text-right lg:pb-[3rem] md:text-4xl md:text-right md:pb-[2rem]">
            Nice to meet you!
            <br /> I’m{" "}
            <span className="border-solid  border-b-[4px] border-lightGreen">
              Collins Omondi
            </span>
            .
          </h1>
          <p className="mx-[2rem] text-center mt-[2rem] text-sm text-lightGrey lg:text-right lg:pb-[4rem] md:text-right md:pb-[2rem]">
            Based in Kenya, I’m a front-end developer <br /> passionate about
            building accessible web apps that users love.
          </p>
          <Link to="target-contact-section" smooth={true} duration={500}>
            <p className="text-center mt-[2rem] tracking-wide hover:text-lightGreen hover:cursor-pointer lg:mr-[1.8rem] lg:text-right md:mr-[1.8rem] md:text-right">
              CONTACT ME
            </p>
          </Link>
          <div className="h-[2px] w-[6.5rem] mt-[0.5rem] bg-lightGreen mx-auto lg:mr-[1.5rem]  md:mr-[1.5rem]"></div>
        </div>
      </div>
      <div className="h-[1px] w-[90%] mt-[4rem] bg-lightGrey mx-auto"></div>
    </div>
  );
};

export default Header;
