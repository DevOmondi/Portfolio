import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiPhp,
  SiSymfony,
  SiPostgresql,
  SiTailwindcss,
  SiJira,
} from "react-icons/si";
import { TbDevices } from "react-icons/tb";

import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Javascript", icon: SiJavascript },
  { name: "PHP", icon: SiPhp },
  { name: "Symfony", icon: SiSymfony },
  { name: "React JS", icon: SiReact },
  { name: "Next JS", icon: SiNextdotjs },
  { name: "Vue JS", icon: SiVuedotjs },
  { name: "Node JS", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Postgresql", icon: SiPostgresql },
  { name: "Jira", icon: SiJira },
  { name: "Responsive Design", icon: TbDevices },
];

const Skills = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 mt-12 mb-16 lg:mb-36">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <ScrollReveal
              key={skill.name}
              animation="fade-up"
              delay={(index % 4) * 70}
              className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-darkGrey/40 transition-all duration-300 group cursor-default"
            >
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 group-hover:text-lightGreen transition-colors duration-300">
                {skill.name}
              </h1>
              <div className="text-4xl lg:text-5xl text-lightGreen group-hover:scale-110 transition-transform duration-300">
                <Icon />
              </div>
            </ScrollReveal>
          );
        })}
      </div>
      <div className="h-px w-[90%] mt-8 bg-lightGrey mx-auto lg:hidden"></div>
    </div>
  );
};

export default Skills;
