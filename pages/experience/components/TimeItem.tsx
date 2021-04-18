import React from 'react';
import InitXSlide from '../../../components/InitXSlide';
import styles from '../../../styles/Experience.module.scss';
import TimeCircle from './TimeCircle';
import TimeSeparator from './TimeSeparator';

interface Props {
  bottomSeparator?: boolean;
}

const TimeItem = ({ bottomSeparator }: Props) => {
  return (
    <InitXSlide from={-300} to={0}>
      <div className={styles.timeItem}>
        <TimeSeparator />
        <TimeCircle />
        {bottomSeparator && <TimeSeparator />}
      </div>
    </InitXSlide>
  );
};

export default TimeItem;
