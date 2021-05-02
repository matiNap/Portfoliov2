/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Background from '../../components/Background';
import DefaultHead from '../../components/DefaultHead';
import withMenu from '../../hocs/withMenu';
import TimeItem from '../../components/experience/TimeItem';
import styles from '../../styles/Experience.module.scss';
import firestore from '../api';
import { ExperienceData } from '../../types';

export const getStaticProps = async (context: { locale: string }) => {
  const { locale } = context;
  try {
    const response = await firestore().collection(`experience-${locale}`).get();

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
  data: ExperienceData[];
}

const Experience = ({ data }: Props) => {
  return (
    <div>
      <DefaultHead />
      <Background>
        <div className={styles.container}>
          {data &&
            data.map((timeData, index) => (
              <TimeItem
                key={timeData.key}
                data={timeData}
                bottomSeparator={index === data.length - 1}
              />
            ))}
        </div>
      </Background>
    </div>
  );
};

export default withMenu(Experience);
