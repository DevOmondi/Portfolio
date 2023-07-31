// import React from 'react'
import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-darkGrey pt-[1.5rem] pb-[3rem]">
      <div className="flex flex-col mx-auto pt-[1rem] w-[40%] lg:flex-row lg:items-center lg:w-[85%] lg:justify-between md:flex-row md:items-center md:w-[85%] md:justify-between">
        <div className="pl-[1rem] lg:pl-0">
          <p className="font-bold lg:text-3xl">collinsOmondi</p>
        </div>
        <div className="flex gap-7 pt-[1rem] lg:pt-0 md:pt-0">
          <a href="https://github.com/DevOmondi">
            <BsGithub className="hover:text-lightGreen" />
          </a>
          <a href="https://stackoverflow.com/users/12764403/collins-omondi">
            <BsStackOverflow className="hover:text-lightGreen" />
          </a>
          <a href="https://www.linkedin.com/in/collinsomondi/">
            <BsLinkedin className="hover:text-lightGreen" />
          </a>
          <a href="https://twitter.com/Dev_Omondi">
            <BsTwitter className="hover:text-lightGreen" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
