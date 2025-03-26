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
    <div id="projects" className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl text-start text-sky-800 text-gray-800 mb-6">My projects</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev", 
        }}
        breakpoints={{
          640: { slidesPerView: 1.1 },
        }}
        className="my-6"
        noSwipingClass="swiper-no-swiping"
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

        <div className="swiper-button-next absolute top-1/2 right-4 z-10">
        </div>
        <div className="swiper-button-prev absolute top-1/2 left-4 z-10">
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectSwiper;
