import React from 'react';
import Background from '../../components/Background';
import DefaultHead from '../../components/DefaultHead';
import withMenu from '../../hocs/withMenu';
import TimeItem from './components/TimeItem';
import styles from '../../styles/Experience.module.scss';

const Experience = () => {
  return (
    <div>
      <DefaultHead />
      <Background>
        <div className={styles.container}>
          <TimeItem />
          <TimeItem />
          <TimeItem bottomSeparator />
        </div>
      </Background>
    </div>
  );
};

export default withMenu(Experience);
