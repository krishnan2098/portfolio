import TwoPaneLayout from "../common/TwoPaneLayout";
import WelcomePane from "./WelcomePane";


const Home = (props) => {
  return (
    <TwoPaneLayout>
      <WelcomePane/>
      <div></div>
    </TwoPaneLayout>
  );
};

export default Home;
