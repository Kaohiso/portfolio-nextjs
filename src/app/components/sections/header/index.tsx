import React from "react";
import {
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

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
    key: "about",
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
  return (
    <div>
      <HeaderMobile buttonData={buttonData} />

      <HeaderDesktop buttonData={buttonData} />
    </div>
  );
}
