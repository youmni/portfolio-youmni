import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiDownload } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#22223b] text-[#f2e9e4] py-6 mt-12 border-t border-[#4a4e69]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-6 space-y-4">
        <div className="flex flex-row items-center space-y-2 space-x-3">
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} Youmni Malha
        </p>
        <a href="/public/cv.pdf" download="Youmni_Malha_CV.pdf" className="no-underline">
          <FiDownload
            size={24}
            className="cursor-pointer text-[#f2e9e4] hover:text-[#288e9c] transition-colors"
          />
        </a>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/youmni-malha-0a54972a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9ada7] transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Youmni/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9a8c98] transition"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope size={24} />
            <a
              href="mailto:youmni.malha@student.ehb.be"
              className="hover:text-[#c9ada7] transition"
            >
              youmni.malha@student.ehb.be
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
