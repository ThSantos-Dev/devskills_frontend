import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";

// Components
import { IMaskInput } from "react-imask";

// Styles
import styles from "./Input.module.css";

// Icons
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  mask?: RegExp | string | any;
  type?: "text" | "number" | "date" | "password" | "email" | "time";

  handleOnChange?(value: string, name: string): void;
}

const Input: React.FC<Props> = ({
  name,
  errorMessage = "Esse campo é obrigatório",
  error,
  label,
  mask,
  type,
  handleOnChange,
  ...props
}) => {
  // Aplicando state de exibição de senha
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  return (
    <div className={`${styles.container} ${error && styles.error}`}>
      {label && <label>{label}</label>}

      {/* Lógica de exibição para Input */}
      {mask ? (
        <IMaskInput
          unmask={true}
          mask={mask}
          {...props}
          onAccept={(value: any) =>
            handleOnChange && handleOnChange(value, name)
          }
        />
      ) : (
        <>
          {type === "password" ? (
            <div className={styles.password_container}>
              <input
                type={!showPassword ? "password" : "text"}
                {...props}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleOnChange && handleOnChange(e.target.value, name)
                }
              />
              {/* Ícone */}
              {!showPassword ? (
                <BsEye onClick={() => setShowPassword(true)} />
              ) : (
                <BsEyeSlash onClick={() => setShowPassword(false)} />
              )}
            </div>
          ) : (
            <input
              type={type}
              {...props}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleOnChange && handleOnChange(e.target.value, name)
              }
            />
          )}
        </>
      )}

      {error && (
        <span className={styles.error_message}>
          <MdErrorOutline /> {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
