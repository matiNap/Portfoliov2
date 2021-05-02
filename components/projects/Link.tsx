import React from 'react';
import styles from '../../styles/Projects.module.scss';

interface Props {
  uri?: string;
  icon: React.ReactNode;
  isPrivate?: boolean;
}

const Link = ({ icon, uri, isPrivate }: Props) => {
  return (
    <div className={styles.linkContainer}>
      {icon}
      {isPrivate ? <p>Private</p> : <a href={uri}>{uri}</a>}
    </div>
  );
};

export default Link;
