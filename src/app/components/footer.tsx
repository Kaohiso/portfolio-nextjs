import React from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineCopyright } from "react-icons/ai";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-10">
      {/**First part */}
      <div className="p-4 text-white flex justify-between">
        {/* Colonne 1 */}
        <div className="flex flex-col">
          <a href="/" className="flex">
            <Image
              className="h-8 w-auto mr-2"
              src={require("../../assets/Logo.png")}
              alt=""
            />
            <div className="flex flex-col font-medium text-xs">
              <span>Antoine</span>
              <span>BENTINI</span>
            </div>
          </a>
          <div className="flex flex-col">
            <a
              href="mailto:bentini.pro@gmail.com"
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              bentini.pro@gmail.com
            </a>
            <a
              href="tel:0684474221"
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              +33 6 84 47 42 21
            </a>
          </div>
        </div>

        {/* Colonne 2 */}
        <div className="grid grid-cols-2 gap-20 text-sm">
          <div className="flex flex-col">
            <h3 className="text-md font-semibold mb-2">Navigation</h3>
            <a href="/portfolio" className="text-gray-400 hover:text-gray-300">
              Portfolio
            </a>
            <a href="/contact" className="text-gray-400 hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="text-md font-semibold mb-2">Réseau</h3>
            <a href="https://www.linkedin.com/in/antoine-bentini-17b7a3197/" className="text-gray-400 hover:text-gray-300">
              LinkedIn
            </a>
            <a href="https://github.com/Kaohiso" className="text-gray-400 hover:text-gray-300">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/**Ligne séparatrice horizontale */}
      <hr className="border-t border-gray-600 my-4" />

      {/**Second part */}
      <div className="flex flex-col text-gray-600 text-xs">
        <span className="flex flex-row">
          <AiOutlineCopyright className="h-3 w-3 mr-1" /> 2023 developed with <AiFillHeart className="mx-1" color="FF0000" /> by Koahiso
        </span>
        <span className="flex flex-row">
          <Square3Stack3DIcon className="h-3 w-3 mr-1" aria-hidden="true" /> stack
          utilisé: React, NextJS, TailwindCSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
