import { useState, useEffect } from "react";
import {
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineClock,
} from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link } from "react-scroll";

const buttonData = [
  {
    id: 1,
    icon: <HiOutlineHome className="text-2xl" />,
    text: "Accueil",
    key: "home",
  },
  {
    id: 2,
    icon: <HiOutlineCog className="text-2xl" />,
    text: "Services",
    key: "service",
  },
  {
    id: 3,
    icon: <HiOutlineLightBulb className="text-2xl" />,
    text: "Compétences",
    key: "skill",
  },
  {
    id: 4,
    icon: <HiOutlineClock className="text-2xl" />,
    text: "Expériences",
    key: "exp",
  },
  {
    id: 5,
    icon: <HiOutlineBriefcase className="text-2xl" />,
    text: "Portfolio",
    key: "work",
  },
  {
    id: 6,
    icon: <HiOutlineEnvelope className="text-2xl" />,
    text: "Contact",
    key: "contact",
  },
];

export default function Header() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [visibleSection, setVisibleSection] = useState(null);

  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const determineVisibleSection = () => {
    const sections = document.querySelectorAll("section");
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        return section.id;
      }
    }
    return null;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionId = determineVisibleSection();
      setVisibleSection(sectionId);
    };

    handleScroll(); // Call the function on initial render
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionId = determineVisibleSection();
    setVisibleSection(sectionId);
  }, []);

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 pl-6 z-50">
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
              (button.id === hoveredButton || button.key === visibleSection) ? "bg-indigo-400 text-white" : "bg-white"
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
  );
}
