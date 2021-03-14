import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "../styles/components/LangSwitch.module.scss";
import { useCookies } from "react-cookie";
import { LANG_EN, LANG_PL } from "../i18n";
import useCurrentLang from "../hooks/useCurrentLang";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const CONTAINER_WIDTH = 76;

const LangSwitch = ({}) => {
  const [leftToggled, setLeftToggled] = useState(false);
  //@ts-ignore
  const [_, setCookie] = useCookies(["lang"]);
  const props = useSpring({
    marginLeft: leftToggled ? "0px" : `${CONTAINER_WIDTH / 2}px`,
  });
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentLang = useCurrentLang();
  useEffect(() => {
    if (currentLang === LANG_PL) setLeftToggled(true);
    else setLeftToggled(false);
  }, [currentLang]);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setLeftToggled(!leftToggled);
        const newLang = leftToggled ? LANG_EN : LANG_PL;

        router.push(`/${newLang}`, undefined, {
          shallow: true,
          locale: newLang,
        });
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
