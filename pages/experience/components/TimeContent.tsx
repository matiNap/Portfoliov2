import React from 'react';
import InitXSlide from '../../../components/InitXSlide';
import styles from '../../../styles/Experience.module.scss';

const TimeContent = () => {
  return (
    <InitXSlide from={600} to={0}>
      <div className={styles.content}></div>
    </InitXSlide>
  );
};

export default TimeContent;
