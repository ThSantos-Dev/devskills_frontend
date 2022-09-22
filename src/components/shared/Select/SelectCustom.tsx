import React from "react";

// Styles
import styles from "./SelectCustom.module.css";

// Components
import Select from "react-select";

interface Props {
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
  placeholder: string;
  label?: string;
}

const selectStyles = {
  control: (styles: any) => {
    return {
      ...styles,
      maxWidth: 600,
      minHeight: "clamp(45px, 10vw, 40px)",
      backgroundColor: "transparent",
    };
  },
  clearIndicator: (styles: any) => {
    return {
      ...styles,
      color: "#fff",
    };
  },
  placeholder: (styles: any) => {
    return {
      ...styles,
      color: "#bbbbbb",
      fontSize: "clamp(0.75rem, 3vw, 1.125rem)",
      fontWeight: 400,
    };
  },
  multiValue: (styles: any) => {
    return {
      ...styles,
      backgroundColor: "rgba(217, 107, 107, 0.3)",
    };
  },
  multiValueRemove: (styles: any) => {
    return {
      ...styles,
      cursor: "pointer",
      ":hover": {
        color: "#000",
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
      color: "#fff",
    };
  },
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SelectCustom: React.FC<Props> = ({
  isMulti = false,
  closeMenuOnSelect = false,
  placeholder,
  label,
}) => {
  return (
    <div className={styles.container}>
      <label>{label && label}</label>
      <Select
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        placeholder={placeholder}
        options={options}
        styles={selectStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          colors: {
            ...theme.colors,
            primary25: "#cacaca",
            primary: "#708FDE",
          },
        })}
      />
    </div>
  );
};

export default SelectCustom;
