import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";

// Components
import { IMaskInput } from "react-imask";

// Styles
import styles from "./Input.module.css";

// Icons
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  mask?: RegExp | string | any;
  type?: "text" | "number" | "date" | "password" | "email" | "time";

  handleOnChange(value: string, name: string): void;
}

const Input: React.FC<Props> = ({
  label,
  name,
  mask,
  type,
  handleOnChange,
  ...props
}) => {
  // Aplicando state de exibição de senha
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}

      {/* Lógica de exibição para Input */}
      {mask ? (
        <IMaskInput
          mask={mask}
          {...props}
          onAccept={(value: any) => handleOnChange(value, name)}
        />
      ) : (
        <>
          {type === "password" ? (
            <>
              <input
                type={!showPassword ? "password" : "text"}
                {...props}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleOnChange(e.target.value, name)
                }
              />
              {/* Ícone */}
              {!showPassword ? (
                <BsEye onClick={() => setShowPassword(true)} />
              ) : (
                <BsEyeSlash onClick={() => setShowPassword(false)} />
              )}
            </>
          ) : (
            <input
              type={type}
              {...props}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleOnChange(e.target.value, name)
              }
            />
          )}
        </>
      )}
    </div>
  );
};

export default Input;
