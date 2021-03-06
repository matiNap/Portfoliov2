import DefaultHead from "./components/DefaultHead";
import Background from "./components/Background";
import { useTranslation } from "react-i18next";
import withMenu from "./hocs/withMenu";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <DefaultHead />

      <Background></Background>
    </>
  );
}

export default withMenu(Home);
