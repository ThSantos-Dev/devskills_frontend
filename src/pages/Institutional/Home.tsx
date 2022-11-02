import { Link } from "react-router-dom";
import ChooseType from "./../Test/ChooseType/ChooseType";
import TestDevSkillsCard from './../../components/shared/Card/Test/DevSkills/TestDevSkillsCard';

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      {/* <Link to={"/company/register"}>Sou empresa</Link>
      <br />
      <Link to={"/dev/register"}>Sou dev</Link>
      <ChooseType show={false} /> */}

      <TestDevSkillsCard />
    </div>
  );
};

export default Home;
