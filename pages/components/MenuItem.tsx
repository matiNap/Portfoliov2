import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { palette } from "../../styles/theme";
import { IconProps } from "../../helpers/index";
interface Props {
  title?: string;
  icon: (props: IconProps) => ReactNode;
  routeKey: string;
}

const ICON_SIZE = 30;

const MenuItem = ({ title, icon, routeKey }: Props) => {
  const router = useRouter();
  const selected = router.pathname === routeKey;
  const color = selected ? palette.accent : palette.text.primary;
  console.log(router.pathname);
  return (
    <li>
      {icon({
        color,
        size: ICON_SIZE,
      })}
      {Boolean(title) && <p style={{ color }}>{title}</p>}
    </li>
  );
};

export default MenuItem;
