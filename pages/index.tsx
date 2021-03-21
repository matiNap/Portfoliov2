import DefaultHead from '../components/DefaultHead';
import Background from '../components/Background';
import withMenu from '../hocs/withMenu';

const Home = () => {
  return (
    <div>
      <DefaultHead />

      <Background>
        <div
          style={{ height: '300vh', width: '30px', backgroundColor: 'blue' }}
        />
      </Background>
    </div>
  );
};

export default withMenu(Home);
