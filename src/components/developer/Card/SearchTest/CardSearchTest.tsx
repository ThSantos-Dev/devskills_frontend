import React from "react";

import * as CSS from "csstype";
import styles from "./CardSearchTest.module.css";

interface Props {
  title: string;
  description: string;
  stack: string;
  icons: string[];
  type: string;
  img_url: string;
  containerCustomStyle?: CSS.Properties;
  contentCustomStyle?: CSS.Properties;
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
}) => {
  return (
    <div className={styles.card_test} style={{ ...containerCustomStyle }}>
      <div className={styles.image_container}>
        <img src={img_url} alt="logo" />
        <span>{type}</span>
      </div>

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
