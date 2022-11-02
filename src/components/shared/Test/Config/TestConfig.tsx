import React, { useEffect } from "react";

import styles from "./TestConfig.module.css";
import Accept from "./../../Accept/Accept";
import SelectCustom from "./../../Form/Select/SelectCustom";
import { useState } from "react";
import Input from "../../Form/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { TSkill } from "../../../../types/devskills/skill/TSkill";
import { getAll as getAllSkills } from "../../../../slices/common/skillSlice";
import { getAll as getAllStacks } from "../../../../slices/common/stackSlice";
import { selectFormat } from "../../../../utils/select-format";

interface Props {
  errors: {
    skills: { error: boolean; message: string };
    stacks: { error: boolean; message: string };
    initialDate: { error: boolean; message: string };
  };
  setErrors(state: {
    skills: { error: boolean; message: string };
    stacks: { error: boolean; message: string };
  }): void;
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

const TestConfig: React.FC<Props> = ({ errors, getData, setErrors }) => {
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

  // State responsável por armazenar as skills filtradas pela stack
  const [skillFiltered, setSkillFiltered] = useState<TSkill[]>([]);

  // Buscando as Stacks e Skills
  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(getAllStacks());
  }, [dispatch]);

  // Altera os dados das inputs
  const handleOnChange = (value: string | TSelected[], name: string) => {
    if (name !== "stacks" && name !== "skills") {
      getData({ ...inputs, [name]: value });
      setInputs({ ...inputs, [name]: value });
      return;
    }

    if (typeof value === "string") return;

    if (name === "skills") {
      getData({
        ...inputs,
        ids_habilidades: value.map((option: TSelected) =>
          parseInt(option.value)
        ),
      });
      setInputs({
        ...inputs,
        ids_habilidades: value.map((option: TSelected) =>
          parseInt(option.value)
        ),
      });
    } else if (name === "stacks") {
      getData({
        ...inputs,
        ids_stacks: value.map((option: TSelected) => parseInt(option.value)),
      });
      setInputs({
        ...inputs,
        ids_stacks: value.map((option: TSelected) => parseInt(option.value)),
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
  }, [inputs.ids_stacks, skills, stacks]);

  useEffect(() => {

    // VALIDANTE
    if(errors.initialDate.error)
      return 


  }, [errors.initialDate])

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
            required
            min={
              new Date(
                new Date().getTime() - new Date().getTimezoneOffset() * 60000
              )
                .toISOString()
                .split("T")[0]
            }
            handleOnChange={handleOnChange}
            error={errors.initialDate.error}
            errorMessage={errors.initialDate.message}
            autoFocus={errors.initialDate.error}
          />
          <Input
            name="data_fim"
            label="Data de término"
            type="date"
            value={inputs.data_fim}
            min={
              new Date(
                new Date().getTime() - new Date().getTimezoneOffset() * 60000
              )
                .toISOString()
                .split("T")[0]
            }
            required
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
                required
                handleOnChange={handleOnChange}
                value={inputs.duracao}
                min={"00:15:00"}
              />

              <span>
                {inputs.duracao && (
                  <>
                    O desenvolvedor terá{" "}
                    {parseInt(inputs.duracao.split(":")[0]) > 1
                      ? `${inputs.duracao.split(":")[0]} horas e `
                      : `${inputs.duracao.split(":")[0]} hora e `}
                    {inputs.duracao.split(":")[1]} minutos para realizar o
                    teste.
                  </>
                )}
              </span>
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
            isLoading={stackLoading}
            error={errors.stacks.error}
            errorMessage={errors.stacks.message}
            handleOnFocus={() =>
              setErrors({ ...errors, stacks: { error: false, message: "" } })
            }
          />

          <SelectCustom
            name="skills"
            options={skillFiltered && selectFormat(skillFiltered)}
            handleOnChange={(value) => handleOnChange(value, "skills")}
            placeholder="Selecione"
            label="Tecnologias"
            isMulti={true}
            closeMenuOnSelect={false}
            isLoading={skillLoading}
            error={errors.skills.error}
            errorMessage={errors.skills.message}
            handleOnFocus={() =>
              setErrors({ ...errors, skills: { error: false, message: "" } })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TestConfig;
