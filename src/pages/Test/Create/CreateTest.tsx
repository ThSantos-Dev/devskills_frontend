// Syles
import styles from "./CreateTest.module.css";

// Hooks


// Components
import TestDescription from "../../../components/shared/Test/Description/TestDescription";
import TestConfig from "../../../components/shared/Test/Config/TestConfig";
import QuestionContainer from "../../../components/shared/Test/QuestionContainer/QuestionContainer";
import TestQuestion from "../../../components/shared/Test/Question/TestQuestion";

// Interface
interface Props {}

const CreateTest = (props: Props) => {


  return (
    <form className={styles.container}>
      <TestDescription />

      <TestConfig />

      <QuestionContainer>
        <TestQuestion setType="DISSERTATIVA"/>

        <TestQuestion setType="UNICA_ESCOLHA" />

        <TestQuestion setType="DISSERTATIVA" />

      </QuestionContainer>
    </form>
  );
};

export default CreateTest;
