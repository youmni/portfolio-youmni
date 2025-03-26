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

  const buttonClass = "hover:bg-black hover:text-white hover:border-black rounded-full px-6 py-2 cursor-pointer";

  return (
    <header className="hidden sm:block fixed w-full z-50 py-4">
      {isRoot && (
        <nav className="max-w-xl bg-white mx-auto flex items-center rounded-lg justify-center shadow-xl space-x-5 py-4 text-sky-900 px-4 hover:bg-white hover:text-sky-900">
          <button
            onClick={() => (window.location.href = "/")}
            className={`${buttonClass} text-sky-900`}
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
