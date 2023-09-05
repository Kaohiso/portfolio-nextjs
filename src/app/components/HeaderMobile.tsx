import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-scroll";
import { motion, useCycle } from "framer-motion";

export default function HeaderMobile(data: any) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 100}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(20px at 216px 40px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="md:hidden"
      ref={containerRef}
    >
      {/* BOUTON */}
      <button
        type="button"
        className="z-50 md:hidden fixed right-0 m-4 bg-white rounded-full p-3 drop-shadow-md"
        onClick={() => toggleOpen()}
      >
        <span className="sr-only">Open main menu</span>
        <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
      </button>
      {/**SIDE BAR */}
      <motion.div
        className="z-40 fixed top-0 right-0 bottom-0 w-64 bg-white flex flex-end shadow-md"
        variants={sidebar}
      />
      {/* Menu Items */}
      <ul className="z-50 fixed p-16 top-10 right-0">
        {data.buttonData.map((button: any) => (
          <Link
            key={button.id}
            to={button.key.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
          >
            <motion.li
              className="pb-4"
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="flex text-gray-900 space-x-1 bg-indigo-500 p-3 rounded-md text-white"
                onClick={() => toggleOpen()}
              >
                {button.icon}
                <span>{button.text}</span>
              </button>
            </motion.li>
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
}