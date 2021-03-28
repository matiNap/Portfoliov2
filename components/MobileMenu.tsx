import React, {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { menuData } from '../helpers';
import MenuItem from './MenuItem';
import LangSelect from './LangSelect';
import styles from '../styles/components/MobileMenu.module.scss';
import Logo from './Logo';
import { animated, useSpring } from 'react-spring';

const MobileMenu = () => {
  const prevScroll = useRef<number>(0);
  const [hidden, setHidden] = useState(false);
  const onScroll = useCallback((e) => {
    if (prevScroll.current < window.scrollY) setHidden(true);
    else setHidden(false);
    prevScroll.current = window.scrollY;
  }, []);
  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const props = useSpring({ top: hidden ? '-100px' : '0px' });

  return (
    <div className={styles.container}>
      {/* Top menu */}
      <animated.div className={styles.headerContainer} style={props}>
        <header className={styles.header}>
          <Logo />
          <LangSelect />
        </header>
      </animated.div>

      {/* Nav menu */}
      <ul className={styles.list}>
        {menuData.map(({ title, icon, routeKey }) => {
          return <MenuItem key={title} {...{ title, routeKey }} icon={icon} />;
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
