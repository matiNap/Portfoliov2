import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GoStar } from 'react-icons/go';
import { RiRocketFill } from 'react-icons/ri';
import locales from '../config/locales';

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
    title: 'Home',
    icon: ({ color, size }) => <FaHome {...{ color, size }} />,
    routeKey: '/',
  },
  {
    title: 'Experience',
    icon: ({ color, size }) => <GoStar {...{ color, size }} />,
    routeKey: '/experience',
  },
  {
    title: 'Projects',
    icon: ({ color, size }) => <RiRocketFill {...{ color, size }} />,
    routeKey: '/projects',
  },
];

export const isLang = (lang: string) => {
  return Boolean(locales[lang]);
};

const MOBILE_BREAKPOINT = 800;
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return true;

  if (!window) return false;
  const { innerWidth } = window;

  return innerWidth <= MOBILE_BREAKPOINT;
};
