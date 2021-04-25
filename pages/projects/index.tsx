import React from 'react';
import Background from '../../components/Background';
import DefaultHead from '../../components/DefaultHead';
import withMenu from '../../hocs/withMenu';
import styles from '../../styles/Projects.module.scss';
import firestore from '../api';
import { ProjectData } from '../../types';
import ProjectTab from '../../components/projects/ProjectTab';
import InitYSlide from '../../components/InitYSlide';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const getStaticProps = async () => {
  try {
    const response = await firestore().collection('projects-mockup').get();

    return {
      props: {
        data: response.docs.map((doc) => {
          return doc.data();
        }),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
interface Props {
  data: ProjectData[];
}

const Experience = ({ data }: Props) => {
  return (
    <div>
      <DefaultHead />
      <Background>
        <ul className={styles.container}>
          {data &&
            data.map((projectData) => (
              <InitYSlide
                from={getRandomInt(-100, -1000)}
                key={projectData.key}
                to={0}
              >
                <ProjectTab data={projectData} />
              </InitYSlide>
            ))}
        </ul>
      </Background>
    </div>
  );
};

export default withMenu(Experience);
