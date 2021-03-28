import React from 'react';
import styles from '../styles/components/WebMenu.module.scss';
import Logo from './Logo';
import { menuData } from '../helpers/index';
import MenuItem from './MenuItem';
import { RiGithubLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useSpring } from 'react-spring';
import { LANG_PL } from '../i18n';
import { animated } from 'react-spring';

const ICON_SIZE = 30;

const PL_WIDTH = '90px';
const EN_WIDTH = '75px';

const Menu = () => {
  const { i18n } = useTranslation();
  const props = useSpring({
    width: i18n.language === LANG_PL ? PL_WIDTH : EN_WIDTH,
  });
  return (
    <animated.div style={props} className={styles.container}>
      <Logo />

      <ul className={styles.list}>
        {menuData.map(({ title, icon, routeKey }) => {
          return <MenuItem key={title} {...{ title, routeKey }} icon={icon} />;
        })}
      </ul>

      <a href="https://github.com/matiNap" target="_blank">
        <RiGithubLine size={ICON_SIZE} />
      </a>
    </animated.div>
  );
};

export default Menu;
