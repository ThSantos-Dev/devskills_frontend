import React from 'react'

import styles from './TestConfig.module.css'
import Accept from './../../Accept/Accept';
import SelectCustom from './../../Form/Select/SelectCustom';
import { useState } from 'react';
import Input from '../../Form/Input/Input';

interface Props {}

const TestConfig = (props: Props) => {
  // Controla a exibição do relógio para definir duração
  const [showTime, setShowTime] = useState<boolean>(false);

  return (
    <div className={styles.config_container}>
      <h2>Configurações</h2>

      <div className={styles.config}>
        <div className={styles.time_container}>
          <Input name="initial_date" label="Data de início" type="date" />
          <Input name="end_date" label="Data de término" type="date" />

          <Accept
            name="duration"
            handleOnClick={(checked) => setShowTime(checked)}
          >
            <p>Definir duração de tempo</p>
          </Accept>
          {showTime && (
            <div className={styles.duration_container}>
              <Input
                name="time_duration"
                type="time"
                step={2}
                placeholder="hh:mm:ss"
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
}

export default TestConfig