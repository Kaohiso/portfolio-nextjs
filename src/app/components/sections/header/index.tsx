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
    icon: <HiOutlineHome />,
    text: "Accueil",
    key: "home",
  },
  {
    id: 2,
    icon: <HiOutlineUser />,
    text: "A propos",
    key: "about",
  },
  {
    id: 3,
    icon: <HiOutlineLightBulb />,
    text: "Compétences",
    key: "skill",
  },
  {
    id: 4,
    icon: <HiOutlineClock />,
    text: "Expériences",
    key: "exp",
  },
  {
    id: 5,
    icon: <HiOutlineBriefcase />,
    text: "Portfolio",
    key: "work",
  },
  {
    id: 6,
    icon: <HiOutlineEnvelope />,
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
