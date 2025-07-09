import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data";
import { Button } from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
        <h1 className="text-4xl font-bold text-[#9a8c98]">Project Not Found</h1>
        <p className="text-lg text-[#f2e9e4]">We couldn't find the project you're looking for.</p>
        <Link
          to="/"
          className="inline-block text-[#c9ada7] border-2 border-[#c9ada7] hover:bg-[#22223b] hover:text-[#f2e9e4] hover:border-[#22223b] rounded-full px-3 py-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c9ada7] focus:ring-opacity-75"
        >
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pt-20 text-[#f2e9e4]">
      <Link
        to="/"
        className="inline-flex items-center text-[#c9ada7] border-2 border-[#c9ada7] hover:bg-[#22223b] hover:text-[#f2e9e4] hover:border-[#22223b] rounded-full px-3 py-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c9ada7] focus:ring-opacity-75"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </Link>

      <h1 className="text-4xl font-bold text-[#c9ada7]">{project.title}</h1>
      <p className="text-lg text-[#f2e9e4]">{project.description}</p>

      <div id="swiper-container" className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          className="w-full md:h-[500px] rounded-lg overflow-hidden"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain bg-[#2e2e48]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="custom-swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer text-[#f2e9e4] bg-[#22223b] rounded-full border-2 border-[#9a8c98] pointer-events-auto p-1">
          <FaArrowLeft size={30} />
        </div>
        <div className="custom-swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer text-[#f2e9e4] bg-[#22223b] rounded-full border-2 border-[#9a8c98] pointer-events-auto p-1">
          <FaArrowRight size={30} />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#c9ada7]">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="border border-[#c9ada7] text-[#c9ada7] px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#c9ada7]">Authors</h2>
        <ul className="flex flex-wrap gap-4">
          {project.authors.map((author) => (
            <li key={author.name}>
              <a
                className="px-6 py-2 border-2 border-[#9a8c98] text-[#9a8c98] font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-[#9a8c98] hover:text-[#22223b] shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#c9ada7] focus:ring-opacity-75 cursor-pointer"
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
