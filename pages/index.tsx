import DefaultHead from "./components/DefaultHead";
import Background from "./components/Background";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <DefaultHead />

      <Background>
        <div>{t("test")}</div>
      </Background>
    </>
  );
}

export default Home;
