import React from 'react';
import styles from '../styles/components/Button.module.scss';

interface Props {
  title: string;
  onClick: () => void;
  icon?: React.ReactNode;
  outlined?: boolean;
  className?: string;
}

const Button = ({ title, onClick, icon, outlined, className }: Props) => {
  return (
    <button
      className={`${styles.container} ${
        outlined ? styles.outlined : styles.filled
      } ${className}`}
      onClick={onClick}
    >
      {/* {icon} */}
      <p>{title}</p>
    </button>
  );
};

export default Button;
