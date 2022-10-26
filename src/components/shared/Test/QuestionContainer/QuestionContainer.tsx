import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

import styles from "./QuestionContainer.module.css";

interface Props {
  showOptions: boolean;
  addQuestion(): void;
  children?: JSX.Element | JSX.Element[];
}
 
const QuestionContainer: React.FC<Props> = ({ showOptions, children, addQuestion }) => {
  return (
    <div className={styles.questions_container}>
      {showOptions && (
        <div className={styles.aside_bar}>
          <div className={styles.icon} onClick={addQuestion}>
            <MdOutlineAddCircleOutline fontSize="1.5rem" />
          </div>
          <div className={styles.icon}>
            <BiImageAdd />
          </div>
          <div className={styles.icon}>
            <AiOutlineFileSearch />
          </div>
        </div>
      )}

      <div className={styles.questions}>{children}</div>
    </div>
  );
};

export default QuestionContainer;
