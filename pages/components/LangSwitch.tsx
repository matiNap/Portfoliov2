import React, { useLayoutEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "../../styles/components/LangSwitch.module.scss";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import { LANG_EN, LANG_PL } from "../../i18n";

const CONTAINER_WIDTH = 76;

export const getStaticProps = async (ctx) => {
  console.log("ctx", ctx);

  return { props: { ctx } };
};

const LangSwitch = ({ ctx }) => {
  console.log(ctx);
  const [leftToggled, setLeftToggled] = useState(false);
  const [cookie, setCookie] = useCookies(["lang"]);
  const props = useSpring({
    marginLeft: leftToggled ? "0px" : `${CONTAINER_WIDTH / 2}px`,
  });
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    const { user } = cookie;
    if (user && user.lang) {
      const { lang } = user;
      i18n.changeLanguage(lang);
      setLeftToggled(lang === LANG_PL);
    }
  }, []);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setLeftToggled(!leftToggled);
        const newLang = leftToggled ? LANG_EN : LANG_PL;
        i18n.changeLanguage(newLang);
        setCookie("user", JSON.stringify({ lang: newLang }));
      }}
    >
      <animated.div className={styles.indicator} style={props}></animated.div>
      <div className={styles.content}>
        <p>PL</p>
        <p>EN</p>
      </div>
    </div>
  );
};

export default LangSwitch;
