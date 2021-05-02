// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import DefaultHead from '../components/DefaultHead';
import Background from '../components/Background';
import withMenu from '../hocs/withMenu';
import styles from '../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';
import TsLogo from '../assets/ts.svg';
import JsLogo from '../assets/js.svg';
import { SiReact } from 'react-icons/si';
import Button from '../components/Button';
import InitXSlide from '../components/InitXSlide';
import InitYSlide from '../components/InitYSlide';
import { HiDownload } from 'react-icons/hi';
import { FiClipboard, FiCheck } from 'react-icons/fi';
import { palette } from '../styles/theme';
import copy from 'copy-to-clipboard';
import { EMAIL } from '../config/consts';
import { animated, config, useSpring } from 'react-spring';
import { useState } from 'react';

const Home = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const { number, opacity } = useSpring({
    number: copied ? 1 : 0,
    opacity: copied ? 1 : 0,
    config: config.stiff,
  });

  const scale = number.interpolate({ range: [0, 0.5, 1], output: [0, 0.2, 1] });
  return (
    <div>
      <DefaultHead />

      <Background>
        <div className={styles.container}>
          <InitXSlide from={-200} to={0}>
            <h1>{t('Hi')},</h1>
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
                  {t('Frameworks and languages I work with')}:
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
                  <div className={styles.emailButtonContainer}>
                    <Button
                      className={`${styles.button} ${styles.emailButton}`}
                      title={t('Email')}
                      onClick={() => {
                        copy(EMAIL);
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 1500);
                      }}
                      icon={
                        <FiClipboard
                          style={{ width: '27px', height: '27px' }}
                          color={palette.text.primary}
                        />
                      }
                    />
                    <animated.div style={{ opacity, scale }}>
                      <div className={styles.popup}>
                        <FiCheck
                          style={{ width: '23px', height: '23px' }}
                          color={palette.text.primary}
                        />
                        <p>{t('Copied!')}</p>
                      </div>
                    </animated.div>
                  </div>
                  <Button
                    className={styles.button}
                    outlined
                    title="CV"
                    onClick={() => {
                      window.open(process.env.CV_URL, '_blank');
                    }}
                    icon={
                      <HiDownload
                        style={{ width: '25px', height: '25px' }}
                        color={palette.text.primary}
                      />
                    }
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
