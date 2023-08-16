"use client";

import React, { useState, useEffect } from "react";
import Header from "./header";
import { WhoIAm, Services } from "./content";
import Footer from "./footer";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

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
  return (
    <div className="bg-gradient-to-b from-slate-200 to-gray-100 ">
      <Header />
      <WhoIAm />
      <Services />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
