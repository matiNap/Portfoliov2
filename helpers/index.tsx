import React from "react";
import { FaHome } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import { RiRocketFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

export interface IconProps {
  color: string;
  size: string | number;
}
type IconData = ({ color, size }: IconProps) => React.ReactNode;

interface MenuProps {
  title: string;
  icon: IconData;
  routeKey: string;
}

type MenuData = MenuProps[];

export const menuData: MenuData = [
  {
    title: "Home",
    icon: ({ color, size }) => <FaHome {...{ color, size }} />,
    routeKey: "/",
  },
  {
    title: "Experience",
    icon: ({ color, size }) => <GoStar {...{ color, size }} />,
    routeKey: "experience",
  },
  {
    title: "Projects",
    icon: ({ color, size }) => <RiRocketFill {...{ color, size }} />,
    routeKey: "projects",
  },
  {
    title: "Contact",
    icon: ({ color, size }) => <IoMdMail {...{ color, size }} />,
    routeKey: "contact",
  },
];
