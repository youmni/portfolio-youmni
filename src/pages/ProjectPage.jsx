import React, {useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data";
import { Button } from "../components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { FiArrowLeft } from "react-icons/fi";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]); 

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6 pt-20 text-center">
        <h1 className="text-4xl font-bold text-red-800">Project Not Found</h1>
        <p className="text-lg text-gray-700">We couldn't find the project you're looking for.</p>
        <Link
          to="/"
          className="inline-block text-sky-800 border-2 border-sky-800 hover:bg-black hover:text-white hover:border-black rounded-full px-3 py-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
        >
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pt-20">
      <Link
        to="/"
        className="inline-block text-sky-800 border-2 border-sky-800 hover:bg-black hover:text-white hover:border-black rounded-full px-3 py-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
      >
        <FiArrowLeft className="mr-2" />{" "}
      </Link>
      <h1 className="text-4xl font-bold text-sky-800">{project.title}</h1>
      <p className="text-gray-700 text-lg">{project.description}</p>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full md:h-[500px] rounded-lg overflow-hidden shadow-lg"
      >
        {project.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain bg-gray-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="border border-sky-600 text-sky-600 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Authors</h2>
        <ul className="flex flex-wrap gap-4 text-gray-700">
          {project.authors.map((author) => (
            <li key={author.name}>
              <a
                className="px-6 py-2 border-2 border-red-800 text-red-800 font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-red-800 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 cursor-pointer"
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {author.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            View Repository
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectPage;
