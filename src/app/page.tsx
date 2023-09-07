"use client";

import React, { useState, useEffect } from "react";
import {
  Header,
  Welcome,
  About,
  Services,
  Experience,
  Contact,
  Portfolio,
  Formation,
  Footer,
} from "./components";
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
//className="mx-8 md:mx-16 lg:mx-32 "
export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <Welcome />
      </section>

      {/**CONTENT**/}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-48" >
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Formation />
        </section>
        <section id="exp">
          <Experience />
        </section>
        <section id="work">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      
      <Footer />
      <ScrollToTopButton />
      {/*<Cursor />*/}
    </div>
  );
}
