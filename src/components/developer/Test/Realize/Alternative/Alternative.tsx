import { useRef } from "react";

import styles from "./Alternative.module.css";

import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  alternative: any;
  type: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
  selected: boolean;
  addResponse(): void;
}

const Alternative = ({ alternative, type, selected, addResponse }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  const inputRadioEl = useRef<HTMLInputElement>(null);

  return (
    <>
      {type === "MULTIPLA_ESCOLHA" && (
        <div
          className={`${styles.alternative} ${styles.multiple} ${
            checked ? styles.selected : ""
          }`}
          onClick={() => {
            addResponse();
            setChecked(!checked);
          }}
        >
          <button>{checked && <AiOutlineCheck />}</button>
          <p>{alternative.opcao}</p>
        </div>
      )}

      {type === "UNICA_ESCOLHA" && (
        <label className={`${styles.alternative} ${styles.single}  `}>
          <div
            onClick={() => {
              addResponse();
              setChecked(!checked);
            }}
          >
            <input
              ref={inputRadioEl}
              type="radio"
              name={`alternative-of-question-${alternative.idQuestaoProva}`}
            />
            <AiOutlineCheck className={styles.selectedIcon} />
          </div>
          <p>{alternative.opcao}</p>
        </label>
      )}
    </>
  );
};

export default Alternative;
