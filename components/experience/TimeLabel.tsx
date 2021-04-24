import React from 'react';
import styles from '../../styles/Experience.module.scss';

interface Props {
  title: string;
  subTitle: string;
}

const TimeLabel = ({ title, subTitle }: Props) => {
  return (
    <div className={styles.labelContainer}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subTitle}> {subTitle}</p>
    </div>
  );
};

export default TimeLabel;
