import styles from "./Container.module.css";

import Sidebar from "../Sidebar/Sidebar";
import Filter, { TSkillsData } from "./../Filter/Filter";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Button from "./../../Form/Button/Button";
import * as CSS from "csstype";

interface Props {
  title?: string;
  filter?: boolean;
  backTo?: string;
  button?: { show: boolean; text: string; handleOnClick(): void };
  getFilters?(filters?: TSkillsData | null, type?: "PRATICA" | "TEORICA"): void;

  styleTitleContainer?: CSS.Properties;
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<Props> = ({
  title,
  filter = false,
  button,
  backTo,
  getFilters,
  styleTitleContainer,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />

      <main className={styles.container}>
        <div className={styles.title_container} style={styleTitleContainer}>
          <div className={styles.title}>
            {backTo && (
              <div onClick={() => navigate(backTo!)} className={styles.icon}>
                <IoArrowBackCircleOutline />
              </div>
            )}
            <h1>{title}</h1>
          </div>
          {button?.show && (
            <Button
              color="solid_white"
              size="small"
              text={button?.text!}
              onClick={button?.handleOnClick}
            />
          )}
        </div>
        {children}
      </main>

      {filter && <Filter getFilters={getFilters!} />}
    </div>
  );
};

export default Container;
