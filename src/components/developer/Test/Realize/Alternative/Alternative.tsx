import React from "react";

import styles from "./Alternative.module.css";

import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

interface Props {
  alternative: any;
  type: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
  selected: boolean;
  addResponse(): void;
}

const Alternative = ({ alternative, type , selected, addResponse }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        addResponse();
        setChecked(!checked);
      }}
      className={`${styles.alternative} ${
        type === "UNICA_ESCOLHA" ? styles.single : styles.multiple
      }
    ${checked ? styles.selected : ""}`}
    >
      <button>
        <AiOutlineCheck />
      </button>
      <p>{alternative.opcao}</p>
    </div>
  );
};

export default Alternative;
