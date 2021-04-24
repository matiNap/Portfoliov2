import React from 'react';
import styles from '../../styles/Experience.module.scss';
import { ExperienceData } from '../../types';
import TimeContent from './TimeContent';
import TimeLabel from './TimeLabel';

interface Props {
  data: ExperienceData;
}

const TimeCircle = ({ data }: Props) => {
  const { date } = data;
  return (
    <div style={{ display: 'flex' }}>
      <span className={styles.circle} />
      <TimeContent data={data} />
      <TimeLabel title="Title" subTitle={date} />
    </div>
  );
};

export default TimeCircle;
