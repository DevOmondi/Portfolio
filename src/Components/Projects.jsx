// import React from 'react'
import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";

import audiophileImg from "../assets/audiophile.png";
import binaryPayImg from "../assets/Binary Pay.png";
import codeKenyaImg from "../assets/CodeKenya_SS.png";
import weekWiseImg from "../assets/Weekwise_SS.png";
import karegivvImg from "../assets/karegivv_SS.png";
import dokiMisImg from "../assets/Doki-Healthcare-MIS.png";
import toursWebsiteImg from "../assets/Tours-Tembea.png";
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
          projectImg={mjengoTrackerImg}
          projectTitle="MJENGO TRACKER"
          projectLang={["VUEJS", "VUETIFY", "SCSS"]}
          siteLink="https://www.mjengotracker.com/"
          codeLink="https://github.com/freddygenicho/mjengo-tracker-web"
        />
        <ProjectCard
          projectImg={codeKenyaImg}
          projectTitle="CODEKENYA ORG"
          projectLang={["API", "TAILWINDCSS", "NEXTJS", "DJANGO"]}
          siteLink="https://www.codekenya.org/"
          codeLink="https://github.com/Okemwag/CodeKenya"
        />
        <ProjectCard
          projectImg={weekWiseImg}
          projectTitle="WEEKWISE"
          projectLang={["PAYPAL", "TAILWINDCSS", "NEXTJS", "EXPRESSJS", "POSTGRESQL", "OPEN AI"]}
          siteLink="https://weekwise.me/"
          codeLink="https://github.com/DevOmondi/weekwise"
        />
        <ProjectCard
          projectImg={karegivvImg}
          projectTitle="KAREGIVV ORG"
          projectLang={["API", "TAILWINDCSS", "NEXTJS", "DJANGO"]}
          siteLink="https://www.karegivv.com/"
          codeLink="https://github.com/CareConnect-Inc/Front-end"
        />
        <ProjectCard
          projectImg={audiophileImg}
          projectTitle="AUDIOPHILE E-COMMERCE PLATFORM"
          projectLang={["TAILWINDCSS", "JAVASCRIPT", "REACTJS"]}
          siteLink="https://doba.netlify.app/"
          codeLink="https://github.com/DevOmondi/audiophile_ecommerce.git"
        />
        <ProjectCard
          projectImg={binaryPayImg}
          projectTitle="BINARY PAY ORG DASHBOARD"
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
      </div>
    </div>
  );
};

export default Projects;
