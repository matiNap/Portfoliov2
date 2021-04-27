import React, { useState } from 'react';
import Background from '../../components/Background';
import DefaultHead from '../../components/DefaultHead';
import withMenu from '../../hocs/withMenu';
import styles from '../../styles/Projects.module.scss';
import firestore from '../api';
import { ProjectData } from '../../types';
import ProjectTab from '../../components/projects/ProjectTab';
import InitYSlide from '../../components/InitYSlide';
import GalleryModal from '../../components/projects/GalleryModal';

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
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<
    null | number
  >(null);
  console.log(selectedGalleryIndex);
  return (
    <div>
      <GalleryModal />
      <DefaultHead />
      <Background>
        <ul className={styles.container}>
          {data &&
            data.map((projectData, index) => (
              <InitYSlide
                from={getRandomInt(-100, -1000)}
                key={projectData.key}
                to={0}
              >
                <ProjectTab
                  select={() => {
                    setSelectedGalleryIndex(index);
                  }}
                  data={projectData}
                  selected={selectedGalleryIndex === index}
                />
              </InitYSlide>
            ))}
        </ul>
      </Background>
    </div>
  );
};

export default withMenu(Experience);
