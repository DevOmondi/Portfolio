import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import resume from "../assets/Collins_Software_Developer_Resume.pdf";
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsCode,
  BsWindow,
  BsTerminal,
  BsLaptop,
  BsDownload,
} from "react-icons/bs";
import ScrollReveal from "./ScrollReveal";

// Resume download
const DownloadButton = () => {
  return (
    <a
      href={resume}
      download="Collins_Software_Developer_Resume.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 bg-lightGreen text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <BsDownload className="text-lg" />
      <span className="font-medium">Download Resume</span>
    </a>
  );
};

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const displayContent = [
    {
      icon: <BsLaptop className="w-full h-full text-lightGreen" />,
      alt: "Laptop icon representing web development",
    },
    {
      icon: <BsCode className="w-full h-full text-lightGreen" />,
      alt: "Code icon representing programming",
    },
    {
      icon: <BsWindow className="w-full h-full text-lightGreen" />,
      alt: "Browser window icon representing web applications",
    },
    {
      icon: <BsTerminal className="w-full h-full text-lightGreen" />,
      alt: "Terminal icon representing development environment",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % displayContent.length
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [displayContent.length, isPaused]);

  return (
    <div>
      <ScrollReveal animation="fade-down" duration={600}>
        <div className="mx-auto pt-4 w-[40%] lg:flex lg:items-center lg:justify-between lg:w-[90%] lg:text-xl md:flex md:items-center md:justify-between md:w-[90%] md:text-xl">
          <div className="pl-4">
            <p className="font-bold lg:text-3xl">collinsOmondi</p>
          </div>
          <div className="flex gap-7 pt-6 lg:pt-0 md:pt-0">
            <a
              href="https://github.com/DevOmondi"
              className="hover:text-lightGreen transition-colors"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/collinsomondi/"
              className="hover:text-lightGreen transition-colors"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://twitter.com/Dev_Omondi"
              className="hover:text-lightGreen transition-colors"
            >
              <BsTwitterX />
            </a>
          </div>
        </div>
      </ScrollReveal>

      <div className="lg:flex lg:w-[92%] lg:mx-auto lg:items-center lg:pt-12 md:flex md:w-[92%] md:mx-auto md:items-center md:pt-12">
        <ScrollReveal
          animation="fade-right"
          duration={800}
          className="w-[40%] mx-auto mt-4 aspect-square relative lg:h-[600px] md:h-[400px]"
        >
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full h-full relative flex items-center justify-center bg-gray-50 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl overflow-hidden"
          >
            {displayContent.map((item, index) => {
              const isActive = index === currentImageIndex;
              return (
                <div
                  key={index}
                  role="img"
                  aria-label={item.alt}
                  className={`absolute inset-0 flex items-center justify-center p-10 lg:p-20 transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-90 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      isActive ? "animate-float" : ""
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>
              );
            })}

            {/* Slide Indicator Dots */}
            <div className="absolute bottom-4 flex gap-2 z-10">
              {displayContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "w-6 bg-lightGreen"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          animation="fade-left"
          duration={800}
          delay={150}
          className="flex-1 ml-8"
        >
          <h1 className="text-2xl font-bold text-center mt-8 mx-8 lg:text-5xl lg:text-right lg:pb-8 md:text-3xl md:text-right md:pb-6">
            Transforming Ideas into
            <span className="block mt-2">
              <span className="border-b-4 border-lightGreen">
                Digital Experiences
              </span>
            </span>
          </h1>

          <p className="mx-8 text-center mt-8 text-lightGrey lg:text-right lg:pb-8 md:text-right md:pb-6 text-lg">
            Hey there! I&apos;m{" "}
            <span className="font-semibold text-black">Collins Omondi</span>, a
            full-stack developer crafting intuitive and responsive web
            experiences. I turn complex problems into elegant, user-friendly
            solutions.
          </p>

          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-end gap-6 mx-8 mt-8">
            <Link
              to="target-contact-section"
              smooth={true}
              duration={500}
              className="group inline-block"
            >
              <p className="tracking-wide text-lg font-medium hover:text-lightGreen cursor-pointer transition-colors">
                LET&apos;S BUILD SOMETHING TOGETHER
              </p>
              <div className="h-0.5 w-0 bg-lightGreen transition-all duration-300 group-hover:w-full"></div>
            </Link>

            <DownloadButton />
          </div>
        </ScrollReveal>
      </div>

      <div className="h-px w-[90%] mt-16 bg-lightGrey mx-auto"></div>
    </div>
  );
};

export default Header;
