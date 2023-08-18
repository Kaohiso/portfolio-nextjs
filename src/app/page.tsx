"use client";

import React, { useState, useEffect } from "react";
import Header from "./header";
import { WhoIAm, Services, Experience } from "./content";
import Footer from "./footer";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import { motion, useAnimation } from "framer-motion"; // Importez les composants motion et useAnimation de framer-motion

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-white text-white rounded-full shadow-md"
        >
          <ArrowSmallUpIcon className="w-6 h-6" color="black" />
        </button>
      )}
    </>
  );
};

export default function Home() {
  const controls = useAnimation(); // Utilisez le hook useAnimation de framer-motion
  const timelineData = [
    { year: "2005", event: "Événement 1" },
    { year: "2010", event: "Événement 2" },
    // Ajoutez d'autres éléments de la frise chronologique ici
  ];

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 ">
      <Header />
      <WhoIAm />
      <Services controls={controls} />
      <Experience />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
