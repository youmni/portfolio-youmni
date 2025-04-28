import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { projects } from "../../data";

const ProjectSwiper = () => {
  return (
    <div id="projects" className="max-w-6xl mx-auto px-4 relative">
      <h1 className="text-3xl text-start text-gray-800 mb-6">
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

      <div className="custom-swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer text-gray-800 bg-white rounded-full border-2 border-black pointer-events-auto">
        <FaArrowLeft size={30} />
      </div>
      <div className="custom-swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer text-gray-800 bg-white rounded-full border-2 border-black pointer-events-auto">
        <FaArrowRight size={30} />
      </div>
    </div>
  );
};

export default ProjectSwiper;
