import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { LANG_EN, LANG_PL } from '../i18n';
import { useTranslation } from 'react-i18next';
import useCurrentLang from '../hooks/useCurrentLang';
import styles from '../styles/components/LangSelect.module.scss';

const LangSwitch = ({}) => {
  // @ts-ignore
  const [_, setCookie] = useCookies(['lang']);
  const [toggle, setToggle] = useState(true);
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentLang = useCurrentLang();
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0, position: 'absolute' },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  useEffect(() => {
    setToggle(currentLang !== LANG_PL);
  }, [currentLang]);

  return (
    <button
      className={styles.container}
      onClick={() => {
        setToggle(!toggle);

        const newLang = !toggle ? LANG_EN : LANG_PL;
        router.push(`${router.pathname}${newLang}`, undefined, {
          shallow: true,
          locale: newLang,
        });
        i18n.changeLanguage(newLang);
        setCookie('user', JSON.stringify({ lang: newLang }));
      }}
    >
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <p>EN</p>
          </animated.div>
        ) : (
          <animated.div style={props} key={key}>
            <p>PL</p>
          </animated.div>
        ),
      )}
    </button>
  );
};

export default LangSwitch;
