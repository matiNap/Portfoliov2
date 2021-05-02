import React from 'react';
import styles from '../../styles/Projects.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { palette } from '../../styles/theme';

interface Props {
  maxCount: number;
  currentIndex: number;
  setCurrentImageIndex: (index: number) => void;
}

const Counter = ({ currentIndex, maxCount, setCurrentImageIndex }: Props) => {
  return (
    <div className={styles.counter}>
      <button
        onClick={() => {
          if (currentIndex + 1 > 1) setCurrentImageIndex(currentIndex - 1);
        }}
      >
        <AiOutlineLeft color={palette.text.primary} size={30} />
      </button>
      <h4>{`${currentIndex + 1}/${maxCount}`}</h4>
      <button
        onClick={() => {
          if (currentIndex < maxCount - 1)
            setCurrentImageIndex(currentIndex + 1);
        }}
      >
        <AiOutlineRight color={palette.text.primary} size={30} />
      </button>
    </div>
  );
};

export default Counter;
