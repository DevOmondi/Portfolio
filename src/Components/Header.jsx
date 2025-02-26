import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import resume from "../assets/Collins-Resume.pdf";
import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsTwitter,
  BsCode,
  BsWindow,
  BsTerminal,
  BsLaptop,
  BsDownload
} from 'react-icons/bs';

// Resume download
const DownloadButton = () => {
  return (
    <a
      href={resume}
      download="Collins-Resume.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 bg-lightGreen text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <BsDownload className="text-lg" />
      <span className="font-medium">Download Resume</span>
    </a>
  );
};

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayContent = [
    {
      icon: <BsLaptop className="w-full h-full text-lightGreen" />,
      alt: "Laptop icon representing web development"
    },
    {
      icon: <BsCode className="w-full h-full text-lightGreen" />,
      alt: "Code icon representing programming"
    },
    {
      icon: <BsWindow className="w-full h-full text-lightGreen" />,
      alt: "Browser window icon representing web applications"
    },
    {
      icon: <BsTerminal className="w-full h-full text-lightGreen" />,
      alt: "Terminal icon representing development environment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % displayContent.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="mx-auto pt-4 w-[40%] lg:flex lg:items-center lg:justify-between lg:w-[90%] lg:text-xl md:flex md:items-center md:justify-between md:w-[90%] md:text-xl">
        <div className="pl-4">
          <p className="font-bold lg:text-3xl">collinsOmondi</p>
        </div>
        <div className="flex gap-7 pt-6 lg:pt-0 md:pt-0">
          <a href="https://github.com/DevOmondi" className="hover:text-lightGreen transition-colors">
            <BsGithub />
          </a>
          <a href="https://stackoverflow.com/users/12764403/collins-omondi" className="hover:text-lightGreen transition-colors">
            <BsStackOverflow />
          </a>
          <a href="https://www.linkedin.com/in/collinsomondi/" className="hover:text-lightGreen transition-colors">
            <BsLinkedin />
          </a>
          <a href="https://twitter.com/Dev_Omondi" className="hover:text-lightGreen transition-colors">
            <BsTwitter />
          </a>
        </div>
      </div>

      <div className="lg:flex lg:w-[92%] lg:mx-auto lg:items-center lg:pt-12 md:flex md:w-[92%] md:mx-auto md:items-center md:pt-12">
        <div className="w-[40%] mx-auto mt-4 aspect-square relative lg:h-[600px] md:h-[400px] flex items-center justify-center bg-gray-50 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl">
          {displayContent[currentImageIndex].icon}
        </div>

        <div className="flex-1 ml-8">
          <h1 className="text-2xl font-bold text-center mt-8 mx-8 lg:text-5xl lg:text-right lg:pb-8 md:text-3xl md:text-right md:pb-6">
            Transforming Ideas into
            <span className="block mt-2">
              <span className="border-b-4 border-lightGreen">
                Digital Experiences
              </span>
            </span>
          </h1>

          <p className="mx-8 text-center mt-8 text-lightGrey lg:text-right lg:pb-8 md:text-right md:pb-6 text-lg">
            Hey there! I&apos;m <span className="font-semibold text-black">Collins Omondi</span>,
            a full-stack developer crafting intuitive and responsive web experiences.
            I turn complex problems into elegant, user-friendly solutions.
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
        </div>
      </div>

      <div className="h-px w-[90%] mt-16 bg-lightGrey mx-auto"></div>
    </div>
  );
};

export default Header;