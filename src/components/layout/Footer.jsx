import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-6 space-y-4">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Youmni Malha</p>
        
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/youmni-malha-0a54972a3/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Youmni/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub size={24} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope size={24} />
            <a href="mailto:youmni.malha@student.ehb.be" className="hover:text-red-400 transition">
              youmni.malha@student.ehb.be
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
