import React from "react";

// Styles
import styles from "./Accept.module.css";

interface Props {
  name: string;
  handleOnClick(checked: boolean, name: string): void;
  children: JSX.Element;
}

const Accept: React.FC<Props> = ({ name, handleOnClick, children}) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" name={name} onClick={(e) => handleOnClick(e.currentTarget.checked, name)} />
      <label>{children}</label>
    </div>
  );
};

export default Accept;
