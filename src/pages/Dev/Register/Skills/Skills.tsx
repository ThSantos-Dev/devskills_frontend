import React from "react";
import Button from "../../../../components/shared/Form/Button/Button";
import SelectCustom from "../../../../components/shared/Form/Select/SelectCustom";

import styles from "./Skills.module.css";

type Props = {};

const Skills: React.FC<Props> = ({}) => {
  return (
    <form className={styles.container}>
      <div className={styles.input_container}>
        <div className={styles.input}>
          <SelectCustom
            name="stacks"
            label="Stack(s)"
            placeholder="Selelcione"
            options={[
              { label: "front-end", value: "1" },
              { label: "back-end", value: "2" },
              { label: "mobile", value: "3" },
              { label: "devops", value: "4" },
              { label: "dba", value: "5" },
              { label: "scrum master", value: "6" },
            ]}
            isMulti={true}
            closeMenuOnSelect={false}
            handleOnChange={(value) => console.log(value)}
          />
        </div>
        <div className={styles.input}>
          <SelectCustom
            name="tecnologias"
            label="Tecnologias"
            placeholder="Selelcione"
            options={[
              { label: "java", value: "1" },
              { label: "html", value: "2" },
              { label: "css", value: "3" },
              { label: "go", value: "4" },
              { label: "pyhton", value: "5" },
              { label: "php", value: "6" },
            ]}
            isMulti={true}
            closeMenuOnSelect={false}
            handleOnChange={(value) => console.log(value)}
          />
        </div>
      </div>

      <div className={styles.button_container}>
        <Button
          color="solid_white"
          size="medium"
          text="Pular"
          skipIcon={true}
        />
        <Button color="solid_white" size="medium" text="Concluir" />
      </div>
    </form>
  );
};

export default Skills;
