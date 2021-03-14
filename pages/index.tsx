import DefaultHead from "../components/DefaultHead";
import Background from "../components/Background";
import withMenu from "../hocs/withMenu";

function Home() {
  return (
    <>
      <DefaultHead />

      <Background>
        <div />
      </Background>
    </>
  );
}

export default withMenu(Home);
