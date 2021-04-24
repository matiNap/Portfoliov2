import React from 'react';
import InitXSlide from '../InitXSlide';
import styles from '../../styles/Experience.module.scss';
import { ExperienceData } from '../../types';
import TimeCircle from './TimeCircle';
import TimeSeparator from './TimeSeparator';

interface Props {
  bottomSeparator?: boolean;
  data: ExperienceData;
}

const TimeItem = ({ bottomSeparator, data }: Props) => {
  return (
    <InitXSlide from={-300} to={0}>
      <div className={styles.timeItem}>
        <TimeSeparator />
        <TimeCircle data={data} />
        {bottomSeparator && <TimeSeparator />}
      </div>
    </InitXSlide>
  );
};

export default TimeItem;
