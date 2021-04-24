import React from 'react';
import InitXSlide from '../InitXSlide';
import styles from '../../styles/Experience.module.scss';
import { ExperienceData } from '../../types';

interface Props {
  data: ExperienceData;
}

const TimeContent = ({ data }: Props) => {
  const { title, subTitle, activities } = data;
  return (
    <InitXSlide from={600} to={0}>
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <h4>{subTitle}</h4>
          <ul>
            {activities &&
              activities.map((activity) => <li key={activity}>{activity}</li>)}
          </ul>
        </div>
      </div>
    </InitXSlide>
  );
};

export default TimeContent;
