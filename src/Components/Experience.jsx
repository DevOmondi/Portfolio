import ScrollReveal from "./ScrollReveal";
import { experiences, educationAndLeadership } from '../lib/constants'

const Experience = () => {
  return (
    <section id="experience" className="mt-[4rem] lg:mt-[6rem]">
      {/* Section Header */}
      <ScrollReveal animation="fade-in">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <h1 className="text-3xl font-bold lg:text-7xl md:text-5xl">Experience</h1>

          <div>
            <a
              href="/Collins_Software_Developer_Resume.pdf"
              download="Collins_Software_Developer_Resume.pdf"
              className="group inline-block"
            >
              <p className="text-center tracking-wide text-sm sm:text-base hover:text-lightGreen hover:cursor-pointer transition-colors">
                GET RESUME
              </p>
              <div className="h-[2px] w-[5rem] sm:w-[6.5rem] mt-[0.5rem] bg-lightGreen mx-auto transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Experience Timeline */}
      <div className="w-[90%] mx-auto mt-12 lg:mt-16 space-y-10 lg:space-y-14">
        {experiences.map((exp, index) => (
          <ScrollReveal
            key={`${exp.company}-${exp.role}`}
            animation="fade-up"
            delay={(index % 4) * 100}
          >
            <div className="relative pl-6 sm:pl-8 lg:pl-10 border-l border-white/10 group hover:border-lightGreen transition-colors duration-300">
              {/* Timeline indicator node */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-darkBg border-2 border-lightGrey group-hover:border-lightGreen group-hover:bg-lightGreen transition-all duration-300"></div>

              {/* Top row: Role, company, period */}
              <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 lg:gap-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-lightGreen transition-colors duration-300">
                    {exp.role}
                  </h2>
                  <span className="text-lightGreen font-semibold text-base sm:text-lg">
                    @ {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-1 lg:mt-0">
                  <span className="text-xs text-lightGrey/60 hidden sm:inline">
                    {exp.location}
                  </span>
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-darkGrey text-lightGrey border border-white/5">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Role summary */}
              <p className="mt-3 text-lightGrey leading-relaxed text-sm sm:text-base">
                {exp.description}
              </p>

              {/* Quantifiable Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mt-3 space-y-2 text-sm text-lightGrey/90">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lightGreen mt-0.5 text-xs">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech tag badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs tracking-wider uppercase px-2.5 py-1 rounded bg-darkGrey/60 text-lightGrey border border-white/5 group-hover:border-lightGreen/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Education & Mentorship Subsection */}
      <div className="w-[90%] mx-auto mt-16 pt-12 border-t border-white/5">
        <ScrollReveal animation="fade-in">
          <p className="text-xs tracking-widest uppercase text-lightGrey/60 font-semibold mb-6">
            Education &amp; Leadership
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {educationAndLeadership.map((item, index) => (
            <ScrollReveal
              key={item.title}
              animation="fade-up"
              delay={index * 100}
              className="p-5 rounded-xl bg-darkGrey/20 border border-white/5 hover:border-lightGreen/30 transition-all duration-300 group"
            >
              <span className="inline-block text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-darkGrey text-lightGreen border border-lightGreen/20 mb-3">
                {item.type}
              </span>
              <h3 className="font-bold text-white group-hover:text-lightGreen transition-colors text-base">
                {item.title}
              </h3>
              <p className="text-sm text-lightGrey/80 mt-1 font-medium">
                {item.organization}
              </p>
              <p className="text-xs text-lightGrey/60 mt-2 leading-relaxed">
                {item.details}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Section bottom divider */}
      <div className="h-px w-[90%] mt-16 bg-white/10 mx-auto"></div>
    </section>
  );
};

export default Experience;
