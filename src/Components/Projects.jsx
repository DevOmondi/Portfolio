import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

import audiophileImg from "/project_images/audiophile_project.webp";
import saizunaImg from "/project_images/saizuna_project.webp";
import codeKenyaImg from "/project_images/codekenya_project.webp";
import finfunImg from "/project_images/finfun_project.webp";
import heavensImg from "/project_images/heavens_project.webp";
import lavostiImg from "/project_images/lavosti_project.webp";
import mjengoTrackerImg from "/project_images/mjengo-tracker_project.webp";
import langiriImg from "/project_images/langiri_project.webp";

const projects = [
  {
    order: 1,
    projectImg: mjengoTrackerImg,
    projectTitle: "MJENGO TRACKER",
    projectLang: ["VUEJS", "VUETIFY", "SCSS"],
    siteLink: "https://www.mjengotracker.com/",
    codeLink: "https://github.com/freddygenicho/mjengo-tracker-web",
  },
  {
    order: 4,
    projectImg: codeKenyaImg,
    projectTitle: "CODEKENYA ORG",
    projectLang: ["API", "TAILWINDCSS", "NEXTJS", "DJANGO"],
    siteLink: "https://www.codekenya.org/",
    codeLink: "https://github.com/Okemwag/CodeKenya",
  },
  {
    order: 5,
    projectImg: lavostiImg,
    projectTitle: "LAVOSTI ELECTRONIC PRESSKIT",
    projectLang: ["NEXTJS", "TAILWINDCSS", "SUPABASE", "GA4"],
    siteLink: "https://www.lavosti.com/",
    codeLink: "https://github.com/dexterbrian/lavosti",
  },
  {
    order: 6,
    projectImg: heavensImg,
    projectTitle: "HEAVENS BEAUTY AND SPA",
    projectLang: [
      "TAILWINDCSS",
      "NEXTJS",
    ],
    siteLink: "https://www.heavensbeautyandspa.co.ke/",
    codeLink: "https://github.com/DevOmondi/Heavens_Beauty_Spa",
  },
  {
    order: 7,
    projectImg: saizunaImg,
    projectTitle: "SAIZUNA",
    projectLang: ["NEXTJS", "TAILWINDCSS"],
    siteLink: "https://saizuna-landing.vercel.app/",
    codeLink: "https://github.com/DevOmondi/Saizuna_landing",
  },
  {
    order: 8,
    projectImg: audiophileImg,
    projectTitle: "AUDIOPHILE E-COMMERCE PLATFORM",
    projectLang: ["TAILWINDCSS", "JAVASCRIPT", "REACTJS"],
    siteLink: "https://doba.netlify.app/",
    codeLink: "https://github.com/DevOmondi/audiophile_ecommerce.git",
  },
  {
    order: 3,
    projectImg: finfunImg,
    projectTitle: "FINFUN LTD E-COMMERCE SITE",
    projectLang: ["INTASEND", "SUPABASE", "REACTJS", "TAILWINDCSS"],
    siteLink: "https://finfunltd.com/",
    codeLink: "#",
  },
  {
    order: 2,
    projectImg: langiriImg,
    projectTitle: "GERALD LANGIRI PORTFOLIO WEBSITE",
    projectLang: ["NEXTJS", "TAILWINDCSS", "SUPABASE"],
    siteLink: "https://www.geraldlangiri.com/",
    codeLink: "https://github.com/dexterbrian/Akta",
  },
];

const Projects = () => {
  const sortedProjects = [...projects].sort(
    (a, b) => (a.order ?? Infinity) - (b.order ?? Infinity)
  );

  return (
    <div className="mt-[4rem]">
      <ScrollReveal animation="fade-in">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <h1 className="text-3xl font-bold lg:text-7xl md:text-5xl">Projects</h1>

          <div>
            <Link to="target-contact-section" smooth={true} duration={500}>
              <p className="text-center tracking-wide hover:text-lightGreen hover:cursor-pointer">
                CONTACT ME
              </p>
            </Link>
            <div className="h-[2px] w-[6.5rem] mt-[0.5rem] bg-lightGreen mx-auto"></div>
          </div>
        </div>
      </ScrollReveal>

      {/* Project cards section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:w-[90%] lg:mx-auto gap-[2rem] mt-[2rem] pb-[4rem]">
        {sortedProjects.map((project, index) => (
          <ScrollReveal
            key={project.projectTitle}
            animation="fade-up"
            delay={(index % 2) * 120}
          >
            <ProjectCard
              projectImg={project.projectImg}
              projectTitle={project.projectTitle}
              projectLang={project.projectLang}
              siteLink={project.siteLink}
              codeLink={project.codeLink}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
