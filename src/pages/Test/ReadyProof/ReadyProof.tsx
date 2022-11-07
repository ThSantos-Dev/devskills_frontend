import TestDevSkillsCard from "../../../components/shared/Card/Test/DevSkills/TestDevSkillsCard";
import Container from "./../../../components/shared/Layout/Container/Container";
import styles from "./ReadyProof.module.css";

interface Props {}

const ReadyProof = (props: Props) => {
  return (
    <Container filter={true}>
      <div className={styles.container}>
        <h1>Nossas provas</h1>

        <main>
          <div className={styles.cards_container}>
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
            <TestDevSkillsCard />
          </div>
        </main>
      </div>
    </Container>
  );
};

export default ReadyProof;
