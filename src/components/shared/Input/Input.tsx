import { ChangeEvent, useState } from "react";

// Styles
import styles from "./Input.module.css";

// Components
import { IMaskInput } from "react-imask";

// Icons
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface Props {
  label: string;
  value: string | number;
  name: string;
  placeholder?: string;
  mask?: RegExp | string | any;
  type?: React.HTMLInputTypeAttribute;
  handleOnChange(value: string, name: string): void;
}

const Input = ({
  label,
  value,
  name,
  placeholder,
  type,
  mask,
  handleOnChange,
}: Props) => {
  // Lógica de exibição para senha
  const [showValue, setShowValue] = useState<Boolean>(false);

  return (
    <div className={styles.container}>
      <label>{label}</label>
      {type ? (
        <>
          {type !== "password" ? (
            <input
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleOnChange(e.target.value, name)
              }
            />
          ) : (
            <>
              <input
                type={!showValue ? "password" : "text"}
                value={value}
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleOnChange(e.target.value, name)
                }
              />

              {!showValue ? (
                <BsEye onClick={() => setShowValue(true)} />
              ) : (
                <BsEyeSlash onClick={() => setShowValue(false)} />
              )}
            </>
          )}
        </>
      ) : (
        <IMaskInput
          mask={mask && mask}
          onAccept={(value: any) => handleOnChange(value, name)}
        />
      )}
    </div>
  );
};

export default Input;
