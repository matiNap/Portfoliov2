import React from "react";
import styles from "../styles/components/Logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link href="./">
        <a href="" className={styles.image}>
          {/* <Image width={IMG_SIZE} height={IMG_SIZE} alt="logo" src="/logo.png" /> */}
        </a>
      </Link>
    </div>
  );
};

export default Logo;
