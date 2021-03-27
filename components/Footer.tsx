import moment from 'moment';
import React from 'react';
import styles from '../styles/components/Footer.module.scss';
import NextLogo from '../assets/next-js.svg';
import FirebaseLogo from '../assets/firebase.svg';
import TsLogo from '../assets/ts.svg';
import { SiReact, SiGithub } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import { palette } from '../styles/theme';

const Footer = () => {
  const year = moment().year();

  return (
    <footer className={styles.container}>
      <h3>{`Copyright \u00A9 ${year}`}</h3>

      <div className={styles.authorContainer}>
        <h2>Created with</h2>
        <div className={styles.iconsRow}>
          <div className={styles.icon}>
            <NextLogo />
          </div>
          <div className={styles.icon}>
            <SiReact color="#60DAFB" size={26} />
          </div>
          <div className={styles.icon}>
            <TsLogo />
          </div>
          <div className={styles.icon}>
            <FirebaseLogo />
          </div>
        </div>
        <h2>by Mateusz Napieralski</h2>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.contactIcon}>
          <SiGithub size={31} />
        </div>
        <div className={styles.contactIcon}>
          <HiMail size={42} />
        </div>
      </div>
      <a href="https://github.com/matiNap/Portfoliov2" target="_blank">
        <h4>Webpage source</h4>
      </a>
    </footer>
  );
};

export default Footer;
