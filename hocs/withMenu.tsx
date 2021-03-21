/* eslint-disable react/display-name */
import React, { ReactNode, useCallback, useLayoutEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import LangSwitch from '../components/LangSwitch';
import MobileMenu from '../components/MobileMenu';
import WebMenu from '../components/WebMenu';

const withMenu = (component: (props: any) => ReactNode) => (props: any) => {
  return (
    <div>
      {component(props)}
      <WebMenu />
      <MobileMenu />
      <LangSwitch />
    </div>
  );
};

export default withMenu;
