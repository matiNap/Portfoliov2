import React, { ReactNode } from "react";

interface Props {
  title?: string;
  icon: ReactNode;
}

const MenuItem = ({ title, icon }: Props) => {
  return (
    <li>
      {icon}
      {Boolean(title) && <p>{title}</p>}
    </li>
  );
};

export default MenuItem;
