import React, { ChangeEvent, MouseEvent, useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./TestAlternative.module.css";

interface Props {
  type: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
  checked: boolean | null;
  text?: string;
  handleOnSelect(selected: boolean | null): void;
  handleOnChange(value: any): void;
  handleOnDelete(): void;
}




const TestAlternative: React.FC<Props> = ({
  type,
  text,
  checked,
  handleOnSelect,
  handleOnChange,
  handleOnDelete,
}) => {
  // Controla a passagem do mouse sobre o marcador da alternativa
  const [showCheckedIcon, setShowCheckedIcon] = useState<boolean>(false);

  return (
    <div
      className={`${styles.alternative_container} ${
        type === "UNICA_ESCOLHA" ? styles.single : styles.multiples
      }`}
    >
      <div
        className={`${styles.alternative}  ${
          typeof checked === "boolean"
            ? checked
              ? styles.correct
              : styles.uncorrect
            : ""
        }`}
      >
        <button
          className={styles.icon}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            if (checked) {
              return handleOnSelect(null);
            }

            handleOnSelect(!checked);
          }}
          onMouseEnter={() => !checked && setShowCheckedIcon(true)}
          onMouseLeave={() => !checked && setShowCheckedIcon(false)}
        >
          {typeof checked !== "boolean" ? null : checked ? (
            <AiOutlineCheck />
          ) : (
            <AiOutlineClose />
          )}

          {showCheckedIcon && checked === null && <AiOutlineCheck />}
        </button>
        <input
          type="text"
          value={text}
          placeholder="Insira uma alternativa..."
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleOnChange(e.target.value);
          }}
        />
      </div>

      <div className={styles.icon} onClick={handleOnDelete}>
        <BsFillTrashFill />
      </div>
    </div>
  );
};

export default TestAlternative;
