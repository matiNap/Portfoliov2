import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "../../styles/components/LangSwitch.module.scss";

const CONTAINER_WIDTH = 76;

const LangSwitch = () => {
  const [leftToggled, setLeftToggled] = useState(false);
  const props = useSpring({
    marginLeft: leftToggled ? "0px" : `${CONTAINER_WIDTH / 2}px`,
  });
  return (
    <div
      className={styles.container}
      onClick={() => {
        setLeftToggled(!leftToggled);
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
