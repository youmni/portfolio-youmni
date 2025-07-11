import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { projects } from "../../data";

const ProjectSwiper = () => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  return (
    <div id="projects" className="max-w-6xl mx-auto px-4 relative">
      <h1 className="text-3xl text-start text-[#f2e9e4] mb-6">
        My projects
      </h1>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        speed={400}
        threshold={10}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        onReachBeginning={() => setAtStart(true)}
        onReachEnd={() => setAtEnd(true)}
        onFromEdge={() => {
          setAtStart(false);
          setAtEnd(false);
        }}
        breakpoints={{
          640: { slidesPerView: 1.1 },
        }}
        className="my-6"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Card
              imageUrl={project.images[0]}
              title={project.title}
              description={project.description.split(".")[0] + "."}
              url={project.url}
              ID={project.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`custom-swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer bg-white rounded-full border-2 border-black pointer-events-auto transition-opacity duration-300 ${atStart ? "opacity-30 cursor-default" : "text-gray-800"
          }`}
      >
        <FaArrowLeft size={30} />
      </div>

      <div
        className={`custom-swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer bg-white rounded-full border-2 border-black pointer-events-auto transition-opacity duration-300 ${atEnd ? "opacity-30 cursor-default" : "text-gray-800"
          }`}
      >
        <FaArrowRight size={30} />
      </div>
      
    </div>
  );
};

export default ProjectSwiper;
