import DefaultHead from "./components/DefaultHead";
import Background from "./components/Background";
import { useTranslation } from "react-i18next";
import WebMenu from "./components/WebMenu";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <DefaultHead />

      <Background>
        <WebMenu />
      </Background>
    </>
  );
}

export default Home;
