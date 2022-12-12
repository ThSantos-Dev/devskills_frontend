import React, { useEffect, useState } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";
import styles from "../Home.module.css";

interface Props {
  title: string;
  logo_url?: string | null;
  description: string;
  stacks: string[];
  skills: string[];
}

const CardTest: React.FC<Props> = ({
  title,
  logo_url,
  description,
  stacks,
  skills,
}) => {
  return (
    <div className={styles.cardTest}>
      <div className={styles.cardTestLogo}>
        {logo_url ? (
          <img src={logo_url} alt="" />
        ) : (
          <MdOutlineImageNotSupported />
        )}
      </div>
      <div className={styles.cardTestBody}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.cardTestStackContainer}>
          <div className={styles.cardStack}>
            <p>{stacks[0]}</p>
          </div>
          {stacks[1] && (
            <div className={styles.cardStack}>
              <p>{stacks[1]}</p>
            </div>
          )}
        </div>
        <div className={styles.cardTestSkillContainer}>
          <div className={styles.cardSkill}>
            <p>{skills[0]}</p>
          </div>
          {skills[1] && (
            <div className={styles.cardSkill}>
              <p>ReactJS</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTest;
