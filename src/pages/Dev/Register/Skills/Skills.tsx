import React, { FormEvent, useEffect, useState } from "react";

// Styles
import styles from "./Skills.module.css";

// Components
import Button from "../../../../components/shared/Form/Button/Button";
import SelectCustom from "../../../../components/shared/Form/Select/SelectCustom";


interface Props {
  handleOnSubmit(e: FormEvent<HTMLFormElement> , data: any): void
};

export type TSkillsData = {
  stacks: number[]
  skills: number[]
}

type TSelected = {
  label: string,
  value: string
}

const Skills: React.FC<Props> = ({ handleOnSubmit }) => {

  // State responsável por armazenar os dados dos selects
  const [selects, setSelects] = useState<TSkillsData>({
    stacks: [],
    skills: []
  })

  // Função responsável por alterar os do Selects a cada alteracao
  const handleOnChange = (selecteds: TSelected[], input: string) => {
    setSelects({
      ...selects,
      [input]: selecteds.map((select: TSelected) => parseInt(select.value)),
    });
  }

  // Buscando as Stacks
  useEffect(() => {

  }, [])
  


  return (
    <form
      className={styles.container}
      onSubmit={(e: FormEvent<HTMLFormElement>) =>
        handleOnSubmit(e, { ...selects })
      }
    >
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
            handleOnChange={(selecteds: TSelected[]) =>
              handleOnChange(selecteds, "stacks")
            }
          />
        </div>
        <div className={styles.input}>
          <SelectCustom
            name="skills"
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
            handleOnChange={(selecteds: TSelected[]) =>
              handleOnChange(selecteds, "skills")
            }
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
