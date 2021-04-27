import React, { useState } from 'react';
import styles from '../../styles/Projects.module.scss';
import { palette } from '../../styles/theme';

interface Props {
  data?: any[];
  setCurrentImageIndex: (i: number) => void;
  selectedIndex: number;
}

const Indicator = ({ data, selectedIndex, setCurrentImageIndex }: Props) => {
  return (
    <div className={styles.dots}>
      {data &&
        data.map((_, i) => (
          <span
            style={{
              backgroundColor: selectedIndex === i ? palette.accent : 'gray',
            }}
            className={styles.dot}
            key={`dot${i}`}
            onClick={() => [setCurrentImageIndex(i)]}
          />
        ))}
    </div>
  );
};

export default Indicator;
