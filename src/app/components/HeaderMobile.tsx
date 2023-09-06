import React, { useEffect, useState, useRef } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-scroll";
import { motion, useCycle } from "framer-motion";

export default function HeaderMobile(data: any) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const container = {
    hidden: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.05,
        staggerDirection: 1
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <nav
      //initial={"hidden"}
      //animate={isOpen ? "open" : "closed"}
      className="lg:hidden"
      //ref={containerRef}
    >
      {/* BOUTON */}
      <motion.button
        type="button"
        className="z-50 fixed right-0 m-4 bg-white rounded-full p-3 drop-shadow-md"
        onClick={() => toggleOpen()}
        whileTap={{ scale: 0.9 }}
      >
        <span className="sr-only">Open main menu</span>
        <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
      </motion.button>
      {/* Menu Items */}
      <motion.ul
        variants={container}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
        className={`z-50 fixed top-20 right-4 top-10 right-0 `}
        //ref={containerRef}
      >
        {data.buttonData.map((button: any) => (
          <motion.li
            className="pb-4"
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              key={button.id}
              to={button.key.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
            >
              <button
                className="space-x-1 bg-indigo-500 p-3 rounded-full text-white drop-shadow-md"
                onClick={() => toggleOpen()}
              >
                {button.icon}
              </button>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
