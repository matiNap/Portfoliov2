import React from 'react';
import styles from '../../styles/Projects.module.scss';
import { ProjectData } from '../../types';
import Link from '../../components/projects/Link';
import { SiGithub } from 'react-icons/si';
import { DiAndroid, DiApple } from 'react-icons/di';
import { CgWebsite } from 'react-icons/cg';

interface Props {
  data: ProjectData;
}

const ProjectTab = ({ data }: Props) => {
  const { images, title, description, ios, android, website, github } = data;

  return (
    <li className={styles.projectTab}>
      {images &&
        images.map((imgUri) => (
          <img
            key={imgUri}
            className={styles.imageContainer}
            alt={title}
            src="https://cdn.eso.org/images/thumb300y/eso1907a.jpg"
          />
        ))}
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        {website && <Link icon={<CgWebsite size={22} />} uri={website} />}
        <Link icon={<SiGithub size={22} />} uri={github} isPrivate={!github} />

        {android && <Link icon={<DiAndroid size={22} />} uri={android} />}
        {ios && <Link icon={<DiApple size={22} />} uri={ios} />}
      </div>
    </li>
  );
};

export default ProjectTab;
