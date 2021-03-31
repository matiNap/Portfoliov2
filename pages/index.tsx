import DefaultHead from '../components/DefaultHead';
import Background from '../components/Background';
import withMenu from '../hocs/withMenu';
import styles from '../styles/Home.module.scss';
import { useTranslation } from 'react-i18next';
import TsLogo from '../assets/ts.svg';
import JsLogo from '../assets/js.svg';
import { SiReact } from 'react-icons/si';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <DefaultHead />

      <Background>
        <div className={styles.container}>
          <h1>{t('Hi,')}</h1>
          <h1>{t('I am Mateusz Napieralski')}</h1>
          <h1 className={styles.specification}>
            Front end developer / Mobile developer
          </h1>
          <h1 className={styles.toolsHeader}>
            Frameworks and languages I work with:
          </h1>
          <div>
            <ul>
              <li>
                <SiReact color="#60DAFB" size={26} />
                <p>React</p>
              </li>
              <li>
                <SiReact color="#60DAFB" size={26} />
                <p>React Native</p>
              </li>
              <li>
                <JsLogo />
                <p>Javascript</p>
              </li>
              <li>
                <TsLogo />
                <p>Typescript</p>
              </li>
            </ul>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default withMenu(Home);
