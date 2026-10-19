import PropTypes from "prop-types";

const ProjectCard = ({
  projectImg,
  projectTitle,
  projectLang,
  siteLink,
  codeLink,
}) => {
  return (
    <div className="w-[90%] mx-auto group">
      <div className="overflow-hidden rounded-lg bg-darkGrey/40 shadow-lg">
        <img
          src={projectImg}
          alt={`${projectTitle} project img`}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <h1 className="text-2xl font-bold py-[0.8rem] group-hover:text-lightGreen transition-colors duration-300">
        {projectTitle}
      </h1>
      <div className="flex gap-4 pb-[1rem] flex-wrap text-lightGrey text-sm">
        {projectLang.map((lang, index) => (
          <p key={index}>{lang}</p>
        ))}
      </div>
      <div className="flex gap-6">
        <div>
          <p className="text-center tracking-wide hover:text-lightGreen hover:cursor-pointer">
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              VIEW PROJECT
            </a>
          </p>
          <div className="h-[2px] w-[6.5rem] mt-[0.5rem] bg-lightGreen mx-auto transition-all duration-300 group-hover:w-full"></div>
        </div>
        <div>
          <p className="text-center tracking-wide hover:text-lightGreen hover:cursor-pointer">
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              VIEW CODE
            </a>
          </p>
          <div className="h-[2px] w-[5rem] mt-[0.5rem] bg-lightGreen mx-auto transition-all duration-300 group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  projectImg: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectLang: PropTypes.arrayOf(PropTypes.string).isRequired,
  siteLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
};

export default ProjectCard;
