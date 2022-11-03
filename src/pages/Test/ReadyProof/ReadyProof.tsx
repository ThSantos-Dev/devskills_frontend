import { useState } from "react";
import { BsFilterSquare } from "react-icons/bs";
import TestDevSkillsCard from "../../../components/shared/Card/Test/DevSkills/TestDevSkillsCard";
import SelectCustom from "./../../../components/shared/Form/Select/SelectCustom";
import styles from "./ReadyProof.module.css";

interface Props {}

const ReadyProof = (props: Props) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
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

        <div
          className={`${styles.filter_container} ${
            showFilter ? styles.expanded : ""
          }`}
        >
          <div
            className={`${styles.filter_toggle_container} ${
              showFilter ? styles.expanded : ""
            }`}
          >
            <div className={styles.toggle_button}>
              <label>
                <input type="checkbox" />

                <div
                  className={styles.filter_text}
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <BsFilterSquare />
                  <span>Filtros</span>
                </div>
              </label>
            </div>
          </div>

          <div className={styles.filter_content}>
            <div className={styles.radio_button_container}>
              <h3>Tipo</h3>

              <div className={styles.radio_button}>
                <label>
                  <input type="radio" name="type" />
                  <span>Teórica</span>
                </label>
              </div>
              <div className={styles.radio_button}>
                <label>
                  <input type="radio" name="type" />
                  <span>Prática</span>
                </label>
              </div>
            </div>

            <div className={styles.select_container}>
              <SelectCustom
                label="Stacks"
                handleOnChange={() => {}}
                options={[
                  { label: "Back-end", value: "1" },
                  { label: "Front-end", value: "2" },
                  { label: "Mobile", value: "3" },
                  { label: "DBA", value: "4" },
                  { label: "DevOps", value: "5" },
                ]}
                name="stacks"
                placeholder="Selecione..."
                isMulti={true}
                closeMenuOnSelect={false}
              />
            </div>
            <div className={styles.select_container}>
              <SelectCustom
                label="Habilidades"
                handleOnChange={() => {}}
                options={[
                  { label: "JavaScript", value: "1" },
                  { label: "Java", value: "2" },
                  { label: "HTML5", value: "3" },
                  { label: "CSS3", value: "4" },
                  { label: "Python", value: "5" },
                ]}
                name="skill"
                placeholder="Selecione..."
                isMulti={true}
                closeMenuOnSelect={false}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReadyProof;
