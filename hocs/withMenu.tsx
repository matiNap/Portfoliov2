/* eslint-disable react/display-name */
import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import LangSwitch from '../components/LangSwitch';
import MobileMenu from '../components/MobileMenu';
import WebMenu from '../components/WebMenu';

const withMenu = (component: (props: any) => ReactNode) => (props: any) => {
  return (
    <div>
      {component(props)}
      <Footer />
      <WebMenu />
      <MobileMenu />
      <LangSwitch />
    </div>
  );
};

export default withMenu;
