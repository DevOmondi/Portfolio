// import React from 'react'
import ProjectCard from "./ProjectCard";

import audiophileImg from "../assets/audiophile.png";
import binaryPayImg from "../assets/Binary Pay.png";
import countriesImg from "../assets/Countries __ Where in the world_.png";
import devfinderImg from "../assets/devfinder __ stalk that dev.png";
import countdownTimerImg from "../assets/Countdown Timer.png";
import youtubeCloneImg from "../assets/YouTube.png";
import whackamoleImg from "../assets/Whack A Mole!.png";
import DictionaryImg from "../assets/Dictionary.png";

const Projects = () => {
  return (
    <div className="mt-[4rem]">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h1 className="text-3xl font-bold lg:text-7xl md:text-5xl">Projects</h1>

        <div>
          <p className="text-center  tracking-wide hover:text-lightGreen hover:cursor-pointer">
            CONTACT ME
          </p>
          <div className="h-[2px] w-[6.5rem] mt-[0.5rem] bg-lightGreen mx-auto"></div>
        </div>
      </div>
      {/* Project cards section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:w-[90%] lg:mx-auto gap-[2rem] mt-[2rem] pb-[4rem]">
        <ProjectCard
          projectImg={audiophileImg}
          projectTitle="AUDIOPHILE E-COMMERCE PLATFORM"
          projectLang={["TAILWINDCSS", "JAVASCRIPT", "REACTJS"]}
          siteLink="https://doba.netlify.app/"
          codeLink="https://github.com/DevOmondi/audiophile_ecommerce.git"
        />
        <ProjectCard
          projectImg={binaryPayImg}
          projectTitle="BINARY PAY DASHBOARD"
          projectLang={["MATERIALUI", "JAVASCRIPT", "REACTJS"]}
          siteLink="https://admin.binarypay.co.ke/"
          codeLink="https://github.com/DevOmondi/Binary-Pay-Dashboard"
        />
        <ProjectCard
          projectImg={countriesImg}
          projectTitle="COUNTRIES WEB APP"
          projectLang={["API", "TAILWINDCSS", "JAVASCRIPT", "REACTJS"]}
          siteLink="https://sakacountry.netlify.app/"
          codeLink="https://github.com/DevOmondi/countries_api_app"
        />
        <ProjectCard
          projectImg={devfinderImg}
          projectTitle="DEVFINDER WEB APP"
          projectLang={["API", "TAILWINDCSS", "JAVASCRIPT", "REACTJS"]}
          siteLink="https://sakadev.netlify.app/"
          codeLink="https://github.com/DevOmondi/Devfinder"
        />
        <ProjectCard
          projectImg={countdownTimerImg}
          projectTitle="COUNTDOWN TIMER"
          projectLang={["HTML", "CSS", "JAVASCRIPT"]}
          siteLink="https://devomondi.github.io/CountDownTimer/"
          codeLink="https://github.com/DevOmondi/CountDownTimer"
        />
        <ProjectCard
          projectImg={youtubeCloneImg}
          projectTitle="YOUTUBE CLONE"
          projectLang={["HTML", "CSS"]}
          siteLink="https://devomondi.github.io/Youtube-Clone/"
          codeLink="https://github.com/DevOmondi/Youtube-Clone"
        />
        <ProjectCard
          projectImg={whackamoleImg}
          projectTitle="WHACK A MOLE GAME"
          projectLang={["HTML", "CSS", "JAVASCRIPT"]}
          siteLink="https://devomondi.github.io/whack-a-mole-game/"
          codeLink="https://github.com/DevOmondi/whack-a-mole-game"
        />
        <ProjectCard
          projectImg={DictionaryImg}
          projectTitle="DICTIONARY WEB APP"
          projectLang={["API", "TAILWINDCSS", "JAVASCRIPT", "REACTJS"]}
          siteLink="https://ngoso.netlify.app/"
          codeLink="https://github.com/DevOmondi/Dictionary-web-app"
        />
      </div>
    </div>
  );
};

export default Projects;
