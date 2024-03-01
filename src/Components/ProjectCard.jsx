// import React from 'react'

const ProjectCard = ({
  projectImg,
  projectTitle,
  projectLang,
  siteLink,
  codeLink,
}) => {
  return (
    <div className="w-[90%] mx-auto">
      <img src={projectImg} alt={`${projectTitle} project img`} />
      <div className="bg-[rgba(0,0,0,0)]"></div>
      <h1 className="text-2xl font-bold py-[0.8rem]">{projectTitle}</h1>
      <div className="flex gap-4 pb-[1rem]">
        {projectLang.map((lang, index) => (
          <p key={index}>{lang}</p>
        ))}
      </div>
      <div className="flex gap-3">
        <div>
          <p className="text-center  tracking-wide hover:text-lightGreen hover:cursor-pointer">
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              VIEW PROJECT
            </a>
          </p>
          <div className="h-[2px] w-[6.5rem] mt-[0.5rem] bg-lightGreen mx-auto"></div>
        </div>
        <div>
          <p className="text-center  tracking-wide hover:text-lightGreen hover:cursor-pointer">
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              VIEW CODE
            </a>
          </p>
          <div className="h-[2px] w-[5rem] mt-[0.5rem] bg-lightGreen mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
