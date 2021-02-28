import React from "react";
import { FaHome } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import { RiRocketFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

interface IconProps {
  color: string;
  size: string | number;
}
type IconData = ({ color, size }: IconProps) => React.ReactNode;

interface MenuProps {
  title: string;
  icon: IconData;
}

type MenuData = MenuProps[];

export const menuData: MenuData = [
  {
    title: "Home",
    icon: ({ color, size }) => <FaHome {...{ color, size }} />,
  },
  {
    title: "Experience",
    icon: ({ color, size }) => <GoStar {...{ color, size }} />,
  },
  {
    title: "Projects",
    icon: ({ color, size }) => <RiRocketFill {...{ color, size }} />,
  },
  {
    title: "Contact",
    icon: ({ color, size }) => <IoMdMail {...{ color, size }} />,
  },
];
