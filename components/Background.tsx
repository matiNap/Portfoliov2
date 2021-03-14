import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  return <div className="background">{children}</div>;
};

export default Background;
