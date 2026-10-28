import { Link } from "react-scroll";
import { BsQuote, BsArrowUpRight } from "react-icons/bs";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Collins delivered an exceptional digital press kit that exceeded our expectations. His responsiveness, eye for detail, and ability to translate creative vision into a sleek, high-performance web experience is top tier.",
    author: "Lavosti",
    role: "Recording Artist & Founder",
    project: "Lavosti EPK",
    siteLink: "https://www.lavosti.com/",
  },
  {
    quote:
      "Collaborating with Collins on our portfolio platform was effortless. He has a sharp instinct for modern design, solid engineering discipline, and shipped clean, reliable code on schedule.",
    author: "Gerald Langiri",
    role: "Actor & Film Producer",
    project: "Gerald Langiri Portfolio",
    siteLink: "https://www.geraldlangiri.com/",
  },
  {
    quote:
      "Collins brings technical depth and thoughtful problem-solving to the table. From intricate frontend state management to seamless API integrations, he delivers robust, maintainable work every time.",
    author: "Freddy Genicho",
    role: "Lead Engineer & Collaborator",
    project: "Mjengo Tracker",
    siteLink: "https://www.mjengotracker.com/",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-[4rem] lg:mt-[6rem]">
      <ScrollReveal animation="fade-in">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <h1 className="text-3xl font-bold lg:text-7xl md:text-5xl">Testimonials</h1>

          <div>
            <Link to="target-contact-section" smooth={true} duration={500}>
              <p className="text-center tracking-wide text-sm sm:text-base hover:text-lightGreen hover:cursor-pointer transition-colors">
                WORK WITH ME
              </p>
            </Link>
            <div className="h-[2px] w-[6.5rem] mt-[0.5rem] bg-lightGreen mx-auto transition-all duration-300"></div>
          </div>
        </div>
      </ScrollReveal>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-[90%] mx-auto mt-12 lg:mt-16">
        {testimonials.map((item, index) => (
          <ScrollReveal
            key={item.author}
            animation="fade-up"
            delay={(index % 3) * 120}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-darkGrey/30 hover:bg-darkGrey/60 border border-white/5 hover:border-lightGreen/30 transition-all duration-300 group"
          >
            <div>
              <BsQuote className="text-3xl lg:text-4xl text-lightGreen/40 group-hover:text-lightGreen transition-colors duration-300" />
              <p className="mt-4 text-lightGrey text-sm sm:text-base leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-white group-hover:text-lightGreen transition-colors duration-300">
                  {item.author}
                </h2>
                <p className="text-xs text-lightGrey/70 mt-0.5">{item.role}</p>
              </div>

              {item.siteLink && (
                <a
                  href={item.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-lightGrey/70 hover:text-lightGreen transition-colors group-hover:translate-x-0.5"
                  aria-label={`Visit ${item.project}`}
                >
                  <span>{item.project}</span>
                  <BsArrowUpRight className="text-xs" />
                </a>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Section bottom divider */}
      <div className="h-px w-[90%] mt-16 bg-white/10 mx-auto"></div>
    </section>
  );
};

export default Testimonials;

