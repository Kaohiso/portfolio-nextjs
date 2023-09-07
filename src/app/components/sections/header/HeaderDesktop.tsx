import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, useMotionValue, transform, useTransform } from "framer-motion";
import { HiOutlineHome } from "react-icons/hi";

export default function HeaderDesktop(data: any) {
  const [isHovering, setIsHovering] = useState(-1);

  return (
    <div className="hidden lg:block fixed top-1/2 left-0 transform -translate-y-1/2 pl-6 z-50">
      {data.buttonData.map((button: any) => (
        <Link
          key={button.id}
          to={button.key.toLowerCase()}
          spy={true}
          smooth={true}
          duration={500}
        >
          <motion.button
            className="flex flex-row rounded-full p-3 bg-indigo-500 text-white drop-shadow-sm my-3"
            //whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovering(button.id)}
            onHoverEnd={() => setIsHovering(-1)}
            //onMouseEnter={() => setIsHovering(button.id)}
            //onMouseLeave={() => setIsHovering(-1)}
          >
            {button.icon}
            {isHovering === button.id && (
              <span className="ml-2">{button.text}</span>
            )}
          </motion.button>
        </Link>
      ))}
    </div>
  );
}

/* 
<div className="hidden lg:block fixed top-1/2 left-0 transform -translate-y-1/2 pl-6 z-50">
{buttonData.map((button) => (
  <Link
    key={button.id}
    to={button.key.toLowerCase()}
    spy={true}
    smooth={true}
    duration={500}
  >
    <button
      className={`rounded-full p-3 flex items-center text-gray-900 drop-shadow-sm my-2 ${
        button.id === hoveredButton || button.key === visibleSection
          ? "bg-indigo-400 text-white"
          : "bg-white"
      }`}
      onMouseEnter={() => handleMouseEnter(button.id)}
      onMouseLeave={handleMouseLeave}
    >
      {button.icon}
      {hoveredButton === button.id && (
        <span className="ml-2">{button.text}</span>
      )}
    </button>
  </Link>
))}
</div>
*/
