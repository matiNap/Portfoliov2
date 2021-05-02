/* eslint-disable react/jsx-no-target-blank */
import moment from 'moment';
import React from 'react';
import styles from '../styles/components/Footer.module.scss';
import NextLogo from '../assets/next-js.svg';
import FirebaseLogo from '../assets/firebase.svg';
import TsLogo from '../assets/ts.svg';
import { SiReact, SiGithub } from 'react-icons/si';
import { EMAIL } from '../config/consts';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const year = moment().year();
  const { t } = useTranslation();

  return (
    <footer className={styles.container}>
      <h3>{`Copyright \u00A9 ${year}`}</h3>

      <div className={styles.authorContainer}>
        <h2>{t('Created with')}</h2>
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
        <h2>{t('by')} Mateusz Napieralski</h2>
      </div>
      <div className={styles.contact}>
        <h3>{EMAIL}</h3>
        <div className={styles.contactIcon}>
          <SiGithub size={31} />
        </div>
      </div>
      <a href="https://github.com/matiNap/Portfoliov2" target="_blank">
        <h4>{t('Webpage source')}</h4>
      </a>
    </footer>
  );
};

export default Footer;
