// import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className="text-center grid grid-cols-1 gap-[2rem] lg:grid-cols-3 md:grid-cols-2 lg:mb-[15rem] mt-[3rem]">
        <div>
          <h1 className="text-2xl font-bold">HTML</h1>
          <p className="text-lightGrey">3 Years Experience</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">CSS</h1>
          <p className="text-lightGrey">3 Years Experience</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Javascript</h1>
          <p className="text-lightGrey">2 Years Experience</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">React JS</h1>
          <p className="text-lightGrey">1 Year Experience</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Responsive Design</h1>
          <p className="text-lightGrey">2 Years Experience</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Tailwind CSS</h1>
          <p className="text-lightGrey">1 Year Experience</p>
        </div>
      </div>
      <div className="h-[1px] w-[90%] mt-[1rem] bg-lightGrey mx-auto lg:hidden"></div>
    </div>
  );
};

export default Skills;
