import React from "react";

// // Styles
import styles from "./SelectCustom.module.css";

// // Components
import Select, { SingleValue } from "react-select";

// Icons
import { MdErrorOutline } from "react-icons/md";

interface Props {
  isMulti?: boolean;
  label?: string;
  closeMenuOnSelect?: boolean;
  placeholder: string;
  error?: boolean,
  errorMessage?: string;
  noOptionsMessage?: string;
  name: string;
  options: SingleValue<{label: string, value: string}>[];
  handleOnChange(value: any, input: string): void;
}

const selectStyles = {
  menu: (styles: any) => {
    return {
      ...styles,
      color: "#fff",
      backgroundColor: "var(--select-background-dark)",
    };
  },
  control: (styles: any) => {
    return {
      ...styles,
      minHeight: "clamp(45px, 10vw, 40px)",
      backgroundColor: "transparent",
    };
  },
  clearIndicator: (styles: any) => {
    return {
      ...styles,
      color: "var(--color-white-text)",
    };
  },
  placeholder: (styles: any) => {
    return {
      ...styles,
      color: "var(--color-white-text)",
      fontSize: "clamp(0.75rem, 3vw, 1.125rem)",
      fontWeight: 400,
    };
  },
  multiValue: (styles: any) => {
    return {
      ...styles,
      color: "var(--color-white-text)",
      backgroundColor: "var(--select-background-multivalue)",
    };
  },
  multiValueLabel: (styles: any) => {
    return {
      ...styles,
      color: "#fff",
    };
  },
  multiValueRemove: (styles: any) => {
    return {
      ...styles,
      cursor: "pointer",
      ":hover": {
        color: "#fff",
      },
    };
  },
  option: (styles: any) => {
    return {
      ...styles,
      fontSize: 14,
    };
  },
  singleValue: (styles: any) => {
    return {
      ...styles,
      color: "var(--color-white-text)",
    };
  },
};


const SelectCustom: React.FC<Props> = ({
  options,
  name,
  isMulti = false,
  placeholder,
  error = true,
  errorMessage = "Selecione uma opção",
  label,
  closeMenuOnSelect = true,
  noOptionsMessage = "Não há mais opções disponíveis.",
  handleOnChange,
}) => {
  return (
    <div className={styles.container}>
      <label>{label && label}</label>
      <Select
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        placeholder={placeholder}
        options={options}
        noOptionsMessage={() => noOptionsMessage}
        styles={selectStyles}
        onChange={(value) => handleOnChange(value, name)}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          background: "#000",
          colors: {
            ...theme.colors,
            primary25: "#4166C6",
          },
        })}
      />

      {error && (
        <span className={styles.error_message}>
          <MdErrorOutline /> {errorMessage}
        </span>
      )}
    </div>
  );
};

export default SelectCustom;
