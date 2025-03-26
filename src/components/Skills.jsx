import React from "react";
import { skills } from "../../data";

const Skills = () => {
  return (
    <>
      <h1 id="skills" className="text-3xl text-start text-sky-800 text-gray-800 mb-6 my-30">
        Skills
      </h1>
      <h2 className="indent-8 text-2xl text-start text-sky-800 text-gray-800 mb-6 my-10"> <span className="inline-block w-2.5 h-2.5 bg-sky-800 rounded-full mr-2"></span>Technical skills</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {skills.hardskills.map((skill, index) => (
          <div
            key={index}
            className="w-24 h-24 flex flex-col justify-start items-center group p-4 transition-all duration-300 hover:scale-115"
          >
            <div className="text-7xl text-sky-600">
              {React.createElement(skill.icon, { color: skill.color })}
            </div>
            <div className=" text-center text-lg text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              {skill.name}
            </div>
          </div>
        ))}
        </div>
        <h2 className="list-disc indent-8 text-2xl text-start text-sky-800 text-gray-800 mb-6 my-10"> <span className="inline-block w-2.5 h-2.5 bg-sky-800 rounded-full mr-2"></span>Soft skills</h2>
        <div className="flex flex-wrap gap-8 justify-center">
        {skills.softskills.map((skill, index) => (
          <div
            key={index}
            className="w-24 h-24 flex flex-col justify-start items-center group p-4 transition-all duration-300 hover:scale-115"
          >
            <div className="text-7xl text-sky-600">
              {React.createElement(skill.icon, { color: skill.color })}
            </div>
            <div className=" text-center text-lg text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              {skill.name}
            </div>
          </div>
        ))}
        </div>
    </>
  );
};

export default Skills;
