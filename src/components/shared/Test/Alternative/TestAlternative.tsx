import React, { useState, ChangeEvent, MouseEvent } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./TestAlternative.module.css";

interface Props {
  type: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
  checked?: boolean | null;
  handleOnSelect?(selected: boolean): void;
  handleOnChange?(value: string | boolean): void;
  handleOnDelete?(): void;
}

const TestAlternative: React.FC<Props> = ({
  type,
  checked = null,
  handleOnSelect = () => {},
  handleOnChange = () => {},
  handleOnDelete = () => {},
}) => {
  // Controla a passagem do mouse sobre o marcador da alternativa
  const [showCheckedIcon, setShowCheckedIcon] = useState<boolean>(false);

  const [selected, setSelected] = useState<boolean | null>(checked);

  return (
    <div
      className={`${styles.alternative_container} ${
        type === "UNICA_ESCOLHA" ? styles.single : styles.multiples
      }`}
    >
      <div
        className={`${styles.alternative}  ${
          checked ? styles.correct : styles.uncorrect
        }`}
      >
        <button
          className={styles.icon}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            handleOnSelect(!selected);
            setSelected(!selected);
          }}
          onMouseEnter={() => !checked && setShowCheckedIcon(true)}
          onMouseLeave={() => !checked && setShowCheckedIcon(false)}
        >
          {checked === null ? null : checked ? (
            <AiOutlineCheck />
          ) : (
            <AiOutlineClose />
          )}

          {showCheckedIcon && <AiOutlineCheck />}
        </button>
        <input
          type="text"
          placeholder="Insira uma alternativa..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleOnChange(e.target.value)
          }
        />
      </div>

      <div className={styles.icon} onClick={handleOnDelete}>
        <BsFillTrashFill />
      </div>
    </div>
  );
};

export default TestAlternative;
