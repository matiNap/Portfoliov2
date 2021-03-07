import React, { ReactNode } from "react";
import LangSwitch from "../components/LangSwitch";
import WebMenu from "../components/WebMenu";

const withMenu = (component: (props: any) => ReactNode) => (props: any) => {
  return (
    <>
      {component(props)}
      <WebMenu />
      <LangSwitch />
    </>
  );
};

export default withMenu;
