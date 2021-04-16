import DefaultHead from '../components/DefaultHead';
import Background from '../components/Background';
import withMenu from '../hocs/withMenu';
import styles from '../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';
import TsLogo from '../assets/ts.svg';
import JsLogo from '../assets/js.svg';
import { SiReact } from 'react-icons/si';
import Button from '../components/Button';
import { animated, useSpring, useTransition } from 'react-spring';
import { useEffect, useLayoutEffect } from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
import InitXSlide from '../components/InitXSlide';
import InitYSlide from '../components/InitYSlide';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <DefaultHead />

      <Background>
        <div className={styles.container}>
          <InitXSlide from={-200} to={0}>
            <h1>{t('Hi,')}</h1>
          </InitXSlide>
          <InitXSlide from={-500} to={0}>
            <h1>{t('I am Mateusz Napieralski')}</h1>
          </InitXSlide>
          <InitXSlide from={-800} to={0}>
            <h1 className={styles.specification}>
              Front end developer / Mobile developer
            </h1>
          </InitXSlide>

          <div className={styles.buttonsContainer}>
            <div>
              <InitXSlide from={-300} to={0}>
                <h1 className={styles.toolsHeader}>
                  Frameworks and languages I work with:
                </h1>
              </InitXSlide>
              <ul>
                <InitXSlide from={-400} to={0}>
                  <li>
                    <SiReact color="#60DAFB" size={26} />
                    <p>React</p>
                  </li>
                </InitXSlide>
                <InitXSlide from={-600} to={0}>
                  <li>
                    <SiReact color="#60DAFB" size={26} />
                    <p>React Native</p>
                  </li>
                </InitXSlide>
                <InitXSlide from={-500} to={0}>
                  <li>
                    <JsLogo />
                    <p>Javascript</p>
                  </li>
                </InitXSlide>
                <InitXSlide from={-800} to={0}>
                  <li>
                    <TsLogo />
                    <p>Typescript</p>
                  </li>
                </InitXSlide>
              </ul>
            </div>
            <div className={styles.buttonsWrapper}>
              <InitYSlide from={300} to={0}>
                <div className={styles.buttons}>
                  <Button
                    className={styles.button}
                    title={t('My email')}
                    onClick={() => {}}
                  />
                  <Button
                    className={styles.button}
                    outlined
                    title="CV"
                    onClick={() => {}}
                  />
                </div>
              </InitYSlide>
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default withMenu(Home);
