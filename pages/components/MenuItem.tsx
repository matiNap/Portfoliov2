import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { palette } from "../../styles/theme";
import { IconProps } from "../../helpers/index";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const tTtile = title ? t(title) : "";
  return (
    <li>
      {icon({
        color,
        size: ICON_SIZE,
      })}
      {Boolean(title) && <p style={{ color }}>{tTtile}</p>}
    </li>
  );
};

export default MenuItem;
