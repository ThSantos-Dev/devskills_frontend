import React from "react";

import styles from "./QuestionContainer.module.css";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const QuestionContainer: React.FC<Props> = ({children}) => {
  return( 
        <div className={styles.aside_bar}>
            {children}
        </div>)
};

export default QuestionContainer;
