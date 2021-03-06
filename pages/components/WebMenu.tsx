import React from "react";
import styles from "../../styles/components/WebMenu.module.scss";
import Logo from "./Logo";
import { menuData } from "../../helpers/index";
import MenuItem from "./MenuItem";
import { GoMarkGithub } from "react-icons/go";
import Link from "next/link";

const ICON_SIZE = 30;

const Menu = () => {
  return (
    <div className={styles.container}>
      <Logo />

      <ul className={styles.list}>
        {menuData.map(({ title, icon, routeKey }) => {
          return <MenuItem {...{ title, routeKey }} icon={icon} />;
        })}
      </ul>

      <a href="https://github.com/matiNap" target="_blank">
        <GoMarkGithub size={ICON_SIZE} />
      </a>
    </div>
  );
};

export default Menu;
