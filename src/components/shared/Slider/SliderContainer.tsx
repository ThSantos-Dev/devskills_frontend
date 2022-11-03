import TestDevSkillsCard from "../Card/Test/DevSkills/TestDevSkillsCard";
import styles from "./SliderContainer.module.css";

interface Props {
  item: any[];
}

const SliderContainer = ({ item }: Props) => {
  return (
    <div className={styles.container}>
      {item.map((a: any) => (
        <div className={styles.slider_item}>
          <TestDevSkillsCard />
        </div>
      ))}
    </div>
  );
};

export default SliderContainer;
