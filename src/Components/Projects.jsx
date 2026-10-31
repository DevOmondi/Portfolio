import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

import { projects } from "../lib/constants"

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
