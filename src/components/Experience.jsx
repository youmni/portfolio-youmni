import React from "react";
import { studies } from "../../data";

const Experience = () => {
  return (
    <div id="experience" className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl text-start text-sky-800 text-gray-800 mb-6">Studies & Experiences</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {studies.map((study, index) => (
          <a 
            key={index} 
            href={study.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 w-80 hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-lg font-semibold text-gray-700">{study.education}</p>
            <h1 className="text-xl font-medium text-sky-800">{study.description}</h1>
            <p className="text-gray-500">{study.year}</p>
            <p className="text-gray-600 font-medium">{study.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
