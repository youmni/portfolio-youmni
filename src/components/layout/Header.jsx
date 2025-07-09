import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";

export default function Header() {
  const location = useLocation();
  const [isRoot, setIsRoot] = useState(location.pathname === "/");

  useEffect(() => {
    setIsRoot(location.pathname === "/");
  }, [location]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonClass =
    "w-20 h-20 rounded-full flex items-center justify-center text-m text-[#f2e9e4] bg-[#4a4e69] hover:bg-[#9a8c98] transition shadow-xl cursor-pointer transition transform hover:scale-110 duration-100 ease-out";

  return (
    <header className="hidden sm:block fixed w-full z-50 py-4">
      {isRoot && (
        <nav className="max-w-xl mx-auto flex items-center rounded-lg justify-center space-x-5 py-4 px-4">
          <button
            onClick={() => (window.location.href = "/")}
            className={buttonClass}
          >
            Home
          </button>

          <button onClick={() => scrollToSection("projects")} className={buttonClass}>
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className={buttonClass}>
            Skills
          </button>
          <button onClick={() => scrollToSection("about")} className={buttonClass}>
            About
          </button>
          <button onClick={() => scrollToSection("experience")} className={buttonClass}>
            Experience
          </button>
        </nav>
      )}
    </header>
  );
}
