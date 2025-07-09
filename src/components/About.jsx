import React from "react";

const About = () => {
  return (
    <div className="p-6 text-[#f2e9e4] my-30">
      <h1 id="about" className="text-4xl text-start text-[#c9ada7] mb-6">About Me</h1>

      <p className="text-2xl leading-relaxed">
        <span className="text-[#c9ada7] font-semibold">I am Youmni Malha</span>, a
        motivated second-year Applied Computer Science student at
        Erasmushogeschool Brussel. My passion for IT drives me to continuously
        learn and grow, with a particular interest in{" "}
        <span className="text-[#9a8c98] font-semibold">software engineering</span>{" "}
        and{" "}
        <span className="text-[#9a8c98] font-semibold">
          artificial intelligence
        </span>
        . Currently, my primary focus lies in backend development, though I also
        have experience with frontend technologies, even though they are not my
        main area of interest.
      </p>

      <br />

      <p className="text-2xl leading-relaxed">
        I also place great value on{" "}
        <span className="text-[#c9ada7] font-semibold">teamwork</span> and soft
        skills, as I believe they are crucial for both academic success and
        professional growth. I'm fluent in{" "}
        <span className="text-[#9a8c98] font-semibold">Dutch</span>,{" "}
        <span className="text-[#9a8c98] font-semibold">French</span>, and{" "}
        <span className="text-[#9a8c98] font-semibold">English</span>.
      </p>

      <br />

      <p className="text-2xl leading-relaxed">
        In my free time, I enjoy watching{" "}
        <span className="text-[#9a8c98] font-semibold">movies</span> and
        practicing <span className="text-[#9a8c98] font-semibold">sports</span>.
      </p>
    </div>
  );
};

export default About;
