"use client";

import React, { useState, useEffect } from "react";
import {
  Header,
  WhoIAm,
  Services,
  Experience,
  Contact,
  Portfolio,
  Skills,
  Footer,
} from "./components";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import MultiLayerParallax from "./components/MultiLayerParallax";
import About from "./components/About";

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
    <div>
      <Header />
      <section id="home">
        <MultiLayerParallax />
      </section>
      <section id="about">
          <About />
      </section>
      <section id="service">
        <Services />
      </section>
      <section id="skill">
        <Skills />
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
      <Footer />
      <ScrollToTopButton />
      {/*<Cursor />*/}
    </div>
  );
}
