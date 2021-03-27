import moment from 'moment';
import React from 'react';
import styles from '../styles/components/Footer.module.scss';
import NextLogo from '../assets/next-js.svg';

const Footer = () => {
  const year = moment().year();

  return (
    <footer className={styles.container}>
      <h3>{`Copyright \u00A9 ${year}`}</h3>
      <div className={styles.iconsRow}>
        <h2>Created with</h2>
        <div className={styles.iconsRow}>
          <div className={styles.icon}>
            <img src={NextLogo} />
          </div>
          <div className={styles.icon}></div>
        </div>
        <h2>by Mateusz Napieralski</h2>
      </div>
    </footer>
  );
};

export default Footer;
