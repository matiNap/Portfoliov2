import React from 'react';
import styles from '../../../styles/Experience.module.scss';
import TimeContent from './TimeContent';
import TimeLabel from './TImeLabel';

const TimeCircle = () => {
  return (
    <div style={{ display: 'flex' }}>
      <span className={styles.circle} />
      <TimeContent />
      <TimeLabel title="Title" subTitle="01.10.2020-30.10.2020" />
    </div>
  );
};

export default TimeCircle;
