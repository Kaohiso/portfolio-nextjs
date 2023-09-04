import { useState, useEffect } from "react";
import {
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineX,
  HiOutlineUser
} from "react-icons/hi";
import { HiOutlineBars3, HiOutlineEnvelope } from "react-icons/hi2";
import { Link } from "react-scroll";

const buttonData = [
  {
    id: 1,
    icon: <HiOutlineHome className="text-2xl" />,
    text: "Accueil",
    key: "home",
  },
  {
    id: 7,
    icon: <HiOutlineUser className="text-2xl" />,
    text: "A propos",
    key: "about"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Ajout de l'état du menu mobile

  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
    <div>
      {/* Mobile Menu Button */}
      <div className="z-40 md:hidden fixed right-0 m-4">
        <button
          type="button"
          className="bg-white rounded-full p-3 drop-shadow-md"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`z-50 fixed right-0 drop-shadow-md md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white w-64 absolute right-0 top-0 h-screen flex flex-col p-4">
          {/* Close Button */}
          <button
            type="button"
            className="self-end p-2 text-gray-700"
            onClick={closeMobileMenu}
          >
            <span className="sr-only">Close menu</span>
            <HiOutlineX className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Menu Items */}
          <ul className="text-white">
            {buttonData.map((button) => (
              <Link
                key={button.id}
                className="flex justify-content-center items-center space-x-2"
                to={button.key.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                <li key={button.id}>
                  <button
                    className={`rounded-md p-3 flex items-center text-gray-900 my-2 space-x-2 ${
                      button.id === hoveredButton ||
                      button.key === visibleSection
                        ? "bg-indigo-400 text-white"
                        : "bg-transparent "
                    }`}
                    onMouseEnter={() => handleMouseEnter(button.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {button.icon}
                    <span>{button.text}</span>
                  </button>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/**DESKTOP */}
      <div className="hidden md:block fixed top-1/2 left-0 transform -translate-y-1/2 pl-6 z-50">
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
    </div>
  );
}
