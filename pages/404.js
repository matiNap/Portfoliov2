import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/404.module.scss';
import Background from '../components/Background';
import Button from '../components/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { palette } from '../styles/theme';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Background>
      <div className={styles.container}>
        <h1>404</h1>
        <h2>Ups... {t(`You got lost ony my website`)} :/</h2>
        <Button
          onClick={() => {
            router.push('/');
          }}
          title={t(`Home page`)}
          icon={<FiArrowLeft size={30} color={palette.text.primary} />}
        />
      </div>
    </Background>
  );
};

export default Custom404;
