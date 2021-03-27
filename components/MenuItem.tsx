import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { palette } from '../styles/theme';
import { IconProps, isMobile } from '../helpers/index';
import { useTranslation } from 'react-i18next';
interface Props {
  title?: string;
  icon: (props: IconProps) => ReactNode;
  routeKey: string;
}

const ICON_SIZE = 30;
const MOBILE_ICON_SIZE = 25;

const MenuItem = ({ title, icon, routeKey }: Props) => {
  const router = useRouter();
  const selected = router.pathname === routeKey;
  const color = selected ? palette.accent : palette.text.primary;
  const { t } = useTranslation();
  const tTtile = title ? t(title) : '';
  const size = isMobile() ? MOBILE_ICON_SIZE : ICON_SIZE;
  return (
    <li>
      {icon({
        color,
        size,
      })}
      {Boolean(title) && <p style={{ color }}>{tTtile}</p>}
    </li>
  );
};

export default MenuItem;
