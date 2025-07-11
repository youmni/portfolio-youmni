import Hero from "../components/Hero";
import React from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Experience from "../components/Experience";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Youmni Malha";
  }, []);
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Experience />
    </>
  );
};

export default Home;
