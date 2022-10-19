import React from "react";

import styles from "./TestConfig.module.css";
import Accept from "./../../Accept/Accept";
import SelectCustom from "./../../Form/Select/SelectCustom";
import { useState } from "react";
import Input from "../../Form/Input/Input";

interface Props {
  getData(data: {
    data_inicio: string;
    data_fim: string;
    duracao: string;
  }): void;
}

const TestConfig: React.FC<Props> = ({ getData }) => {
  // Controla a exibição do relógio para definir duração
  const [showTime, setShowTime] = useState<boolean>(false);

  // Armazena os dados das inputs
  const [inputs, setInputs] = useState({
    data_inicio: "",
    data_fim: "",
    duracao: "",
  })

  // Altera os dados das inputs
  const handleOnChange = (value: string, name: string) => {
    getData({ ...inputs, [name]: value });
    setInputs({...inputs, [name]: value})
  }

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
            options={[{ label: "back-end", value: "1" }]}
            handleOnChange={(data) => console.log(data)}
            placeholder="Selecione"
            label="Stacks"
            isMulti={true}
            closeMenuOnSelect={false}
          />

          <SelectCustom
            name="tecnologies"
            options={[{ label: "php", value: "1" }]}
            handleOnChange={(data) => console.log(data)}
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
