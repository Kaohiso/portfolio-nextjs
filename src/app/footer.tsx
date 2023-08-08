import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto text-white flex justify-between">
        {/* Première partie (à gauche) */}
        <div className="flex space-y-4">
          {/* Colonne 1 */}
          <div className="flex items-center space-x-2">
            <Image
              className="h-8 w-auto"
              src={require("../assets/Logo.png")}
              alt="Logo"
            />
            <div className="flex">
              <a href="mailto:bentini.pro@gmail.com" className="text-white">
                bentini.pro@gmail.com
              </a>
              <span className="text-white">|</span>
              <a href="tel:0684474221" className="text-white">
                06 84 47 42 21
              </a>
            </div>
          </div>
        </div>

        {/* Deuxième partie (à droite) */}
        {/* Colonne 2 */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Sections</h3>
          <a href="/portfolio" className="text-gray-400 hover:text-gray-300">
            Portfolio
          </a>
          <a href="/contact" className="text-gray-400 hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>

      {/* Ligne séparatrice */}
      <div className="w-0.5 bg-gray-600"></div>

      <div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/antoine-bentini-17b7a3197/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            {/* Icône LinkedIn */}
            <FaGithub style={{ color: "#FFFFFF" }} />
          </a>
          <a
            href="https://github.com/Kaohiso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            {/* Icône GitHub */}
            <span id="cliackableIconGithub">
              <FaLinkedin style={{ color: "#FFFFFF" }} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
