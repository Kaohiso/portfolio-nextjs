"use client";

import React, { useState, useEffect } from "react";
import Header from "./header";
import Content from "./content";
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
    <main className="bg-gray-100">
      <div className="h-screen bg-[url('../assets/bg_home.jpeg')]">
        <Header />
        <div className="flex justify-center h-[calc(100vh-74px)]">
          <Content />
        </div>
      </div>
      <div className="h-screen"></div>
      <ScrollToTopButton />
    </main>
  );
}
