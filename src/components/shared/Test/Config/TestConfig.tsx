import React, { useEffect } from "react";

import styles from "./TestConfig.module.css";
import Accept from "./../../Accept/Accept";
import SelectCustom from "./../../Form/Select/SelectCustom";
import { useState } from "react";
import Input from "../../Form/Input/Input";
import { optionCSS } from "react-select/dist/declarations/src/components/Option";
import { useDispatch, useSelector } from "react-redux";
import { TSkill } from "../../../../types/devskills/skill/TSkill";
import { getAll as getAllSkills } from "../../../../slices/common/skillSlice";
import { getAll as getAllStacks } from "../../../../slices/common/stackSlice";
import { selectFormat } from "../../../../utils/select-format";

interface Props {
  getData(data: {
    data_inicio: string;
    data_fim: string;
    duracao: string;
    ids_stacks: number[];
    ids_habilidades: number[];
  }): void;
}

type TTestConfigData = {
  data_inicio: string;
  data_fim: string;
  duracao: string;
  ids_stacks: number[];
  ids_habilidades: number[];
};

export type TSkillsData = {
  stacks: number[];
  skills: number[];
};

type TSelected = {
  label: string;
  value: string;
};

const TestConfig: React.FC<Props> = ({ getData }) => {
  // Controla a exibição do relógio para definir duração
  const [showTime, setShowTime] = useState<boolean>(false);

  // Armazena os dados das inputs
  const [inputs, setInputs] = useState<TTestConfigData>({
    data_inicio: "",
    data_fim: "",
    duracao: "",
    ids_stacks: [],
    ids_habilidades: [],
  });

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


  // Buscando as Stacks e Skills
  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(getAllStacks());
  }, [dispatch]);

  // Altera os dados das inputs
  const handleOnChange = (
    value: string | { label: string; value: string }[],
    name: string
  ) => {
    if (name !== 'stacks' && name !== 'skills') {
      getData({ ...inputs, [name]: value });
      setInputs({ ...inputs, [name]: value });
      return;
    }

    if (typeof value === "string") return;

    if (name === "skills") {
      getData({
        ...inputs,
        ids_habilidades: value.map((option: { label: string; value: string }) =>
          parseInt(option.value)
        ),
      });
      setInputs({
        ...inputs,
        ids_habilidades: value.map((option: { label: string; value: string }) =>
          parseInt(option.value)
        ),
      });
    } else if (name === "stacks") {
      getData({
        ...inputs,
        ids_stacks: value.map((option: { label: string; value: string }) =>
          parseInt(option.value)
        ),
      });
      setInputs({
        ...inputs,
        ids_stacks: value.map((option: { label: string; value: string }) =>
          parseInt(option.value)
        ),
      });
    }
  };

  // Filtrando as skills com base nas stacks
  useEffect(() => {
    if (inputs.ids_stacks.length === 0 || !stacks) return;

    let filtered: TSkill[] = [];

    inputs.ids_stacks.map((idStack: number) => {
      return (filtered = [
        ...filtered,
        ...skills.filter((skill: TSkill) => skill.idStack === idStack),
      ]);
    });

    setSkillFiltered(filtered);
    console.log(filtered);
  }, [inputs.ids_stacks, skills, stacks]);

  return (
    <div className={styles.config_container}>
      <h2>Configurações</h2>

      <div className={styles.config}>
        <div className={styles.time_container}>
          <Input
            name="data_inicio"
            label="Data de início"
            type="date"
            value={inputs.data_inicio}
            handleOnChange={handleOnChange}
          />
          <Input
            name="data_fim"
            label="Data de término"
            type="date"
            value={inputs.data_fim}
            handleOnChange={handleOnChange}
          />

          <Accept name="" handleOnClick={(checked) => setShowTime(checked)}>
            <p>Definir duração de tempo</p>
          </Accept>
          {showTime && (
            <div className={styles.duration_container}>
              <Input
                name="duracao"
                type="time"
                step={2}
                handleOnChange={handleOnChange}
                value={inputs.duracao}
              />

              <span>(HH:MM:SS)</span>
            </div>
          )}
        </div>

        <div className={styles.skills_container}>
          <SelectCustom
            name="stacks"
            options={stacks && selectFormat(stacks)}
            handleOnChange={(value) => handleOnChange(value, "stacks")}
            placeholder="Selecione"
            label="Stacks"
            isMulti={true}
            closeMenuOnSelect={false}
          />

          <SelectCustom
            name="skills"
            options={skillFiltered && selectFormat(skillFiltered)}
            handleOnChange={(value) => handleOnChange(value, "skills")}
            placeholder="Selecione"
            label="Tecnologias"
            isMulti={true}
            closeMenuOnSelect={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TestConfig;
