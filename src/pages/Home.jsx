import Hero from "../components/Hero";
import React from 'react';
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Experience from "../components/Experience";
const Home = () => {
    return (
      <>
        <Hero />
        <Projects />
        <Skills/>
        <About/>
        <Experience/>
      </>
    );
}

export default Home;