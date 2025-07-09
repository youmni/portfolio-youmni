import React from "react";
import { studies } from "../../data";

const Experience = () => {
  return (
    <div id="experience" className="max-w-6xl mx-auto p-6 text-[#f2e9e4]">
      <h1 className="text-3xl text-start text-[#c9ada7] mb-6">Studies & Experiences</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {studies.map((study, index) => (
          <a 
            key={index} 
            href={study.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 bg-[#22223b] rounded-2xl shadow-md border border-[#4a4e69] w-80 hover:shadow-xl transition shadow-xl cursor-pointer transition transform hover:scale-110 duration-300 ease-out"
          >
            <p className="text-lg font-semibold text-[#f2e9e4]">{study.education}</p>
            <h1 className="text-xl font-medium text-[#9a8c98]">{study.description}</h1>
            <p className="text-[#c9ada7]">{study.year}</p>
            <p className="text-[#f2e9e4] font-medium">{study.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
