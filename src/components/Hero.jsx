import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [" Youmni!", " a developer.", " a movie enthusiast."],
    loop: true,
    typeSpeed: 200,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-[#2e2e48] text-[#f2e9e4]">
      <h1 className="text-5xl sm:text-6xl md:text-7xl drop-shadow-2xl">
        Hi, I'm <br />
        <span className="text-[#c9ada7]">{text}</span>
        <Cursor cursorStyle="|" cursorColor="#f2e9e4" />
      </h1>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl opacity-90 font-light">
        A 2<sup>nd</sup> year <span className="text-[#9a8c98]">Applied Computer Science</span> student
      </p>
    </div>
  );
};

export default Hero;
