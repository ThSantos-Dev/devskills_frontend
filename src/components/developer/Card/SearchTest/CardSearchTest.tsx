import React from "react";

import * as CSS from "csstype";
import styles from "./CardSearchTest.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
  title: string;
  description: string;
  stack: string;
  icons: string[];
  type: string;
  img_url: string;
  containerCustomStyle?: CSS.Properties;
  contentCustomStyle?: CSS.Properties;
  userView: boolean;
  handleOnCLick?(): void;
}

const CardSearchTest: React.FC<Props> = ({
  title,
  description,
  stack,
  icons,
  type,
  img_url,
  containerCustomStyle,
  contentCustomStyle,
  userView,
  handleOnCLick,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  return (
    <div
      className={styles.card_test}
      style={{ ...containerCustomStyle }}
      onClick={() => {
        if (user.type === "COMPANY") return;

        handleOnCLick!()
      }}
    >
      {!userView && (
        <div className={styles.image_container}>
          <img src={img_url} alt="logo" />
          <span>{type}</span>
        </div>
      )}

      <div className={styles.content} style={{ ...contentCustomStyle }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.info}>{stack}</span>
        <div className={styles.icons_container}>
          {icons.map((url, index) => (
            <img key={index} src={url} alt="icone" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSearchTest;
