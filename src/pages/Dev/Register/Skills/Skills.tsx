// Hooks
import React, { FormEvent, useEffect, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAll as getAllSkills } from "../../../../slices/common/skillSlice";
import { getAll as getAllStacks } from "../../../../slices/common/stackSlice";

// Styles
import styles from "./Skills.module.css";

// Utils
import { selectFormat } from "./../../../../utils/select-format";

// Types
import { TSkill } from "../../../../types/devskills/skill/TSkill";

// Components
import Button from "../../../../components/shared/Form/Button/Button";
import SelectCustom from "../../../../components/shared/Form/Select/SelectCustom";

interface Props {
  handleOnSubmit(e: FormEvent<HTMLFormElement>, data: any): void;
}

export type TSkillsData = {
  stacks: number[];
  skills: number[];
};

type TSelected = {
  label: string;
  value: string;
};

const Skills: React.FC<Props> = ({ handleOnSubmit }) => {
  // Instanciando o dispatch para ter acesso as funções do Redux
  const dispatch: any = useDispatch();

  // Acessando valor dos redux de Stack e Skill
  const { stacks, loading: stackLoading } = useSelector(
    (state: any) => state.stack
  );
  const { skills, loading: skillLoading } = useSelector(
    (state: any) => state.skill
  );

  // State responsável por armazenar os dados dos selects
  const [selects, setSelects] = useState<TSkillsData>({
    stacks: [],
    skills: [],
  });

  // State responsável por armazenar as skills filtradas pela stack
  const [skillFiltered, setSkillFiltered] = useState<TSkill[]>([]);

  // Função responsável por alterar os do Selects a cada alteracao
  const handleOnChange = (selecteds: TSelected[], input: string) => {
    setSelects({
      ...selects,
      [input]: selecteds.map((select: TSelected) => parseInt(select.value)),
    });
  };

  // Buscando as Stacks e Skills
  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(getAllStacks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filtrando as skills com base nas stacks
  useEffect(() => {
    if (selects.stacks.length === 0 || !stacks) return;

    let filtered: TSkill[] = [];

    selects.stacks.map((idStack: number) => {
      return (filtered = [
        ...filtered,
        ...skills.filter((skill: TSkill) => skill.idStack === idStack),
      ]);
    });

    setSkillFiltered(filtered)
    console.log(filtered);
  }, [selects.stacks, skills, stacks]);

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
            placeholder="Selecione"
            options={stacks && selectFormat(stacks)}
            isMulti={true}
            isLoading={stackLoading}
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
            placeholder="Selecione"
            options={skillFiltered && selectFormat(skillFiltered)}
            isMulti={true}
            isLoading={skillLoading}
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
