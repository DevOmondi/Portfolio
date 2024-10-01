// import React from 'react'
import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";

import audiophileImg from "../assets/audiophile.png";
import binaryPayImg from "../assets/Binary Pay.png";
import countriesImg from "../assets/Countries __ Where in the world_.png";
import devfinderImg from "../assets/devfinder __ stalk that dev.png";
import dokiMisImg from "../assets/Doki-Healthcare-MIS.png";
import toursWebsiteImg from "../assets/Tours-Tembea.png";
import DictionaryImg from "../assets/Dictionary.png";
import mjengoTrackerImg from "../assets/mjengo-tracker_hero.png";

const Projects = () => {
  return (
    <div className="mt-[4rem]">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h1 className="text-3xl font-bold lg:text-7xl md:text-5xl">Projects</h1>

        <div>
          <Link to="target-contact-section" smooth={true} duration={500}>
            <p className="text-center  tracking-wide hover:text-lightGreen hover:cursor-pointer">
              CONTACT ME
            </p>
          </Link>
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
          projectImg={toursWebsiteImg}
          projectTitle="CAMPING SINGLE PAGE WEBSITE"
          projectLang={["NEXTJS", "TAILWINDCSS"]}
          siteLink="https://tour-safari.vercel.app/"
          codeLink="https://github.com/DevOmondi/Tours"
        />

        <ProjectCard
          projectImg={dokiMisImg}
          projectTitle="HEALTHCARE WEB APP"
          projectLang={["NEXTJS", "TAILWINDCSS", "APPWRITE"]}
          siteLink="https://meet-doki.vercel.app/"
          codeLink="https://github.com/DevOmondi/Doki"
        />

        <ProjectCard
          projectImg={mjengoTrackerImg}
          projectTitle="MJENGO TRACKER"
          projectLang={["VUEJS", "VUETIFY", "SCSS"]}
          siteLink="https://www.mjengotracker.com/"
          codeLink="https://github.com/freddygenicho/mjengo-tracker-web"
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
