import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, title, description, url, ID }) => {
  return (
    <div className="relative w-full md:h-[500px] overflow-hidden rounded-lg shadow-xl my-6 border-4 border-[#000000]">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover shadow-lg opacity-100"
      />
      <div className="absolute inset-0 bg-black/50 sm:bg-black/0 md:bg-black/0"></div>
      <div className="relative flex flex-col justify-end h-full text-white p-8 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-3xl md:text-4xl mb-4 text-sky-950 font-bold text-white">{title}</h3>
        <p className="text-lg mb-6 text-sky-950 font-bold text-white">{description}</p>
        <Link to={`/project/${ID}`} className="swiper-no-swiping">
          <Button>Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;