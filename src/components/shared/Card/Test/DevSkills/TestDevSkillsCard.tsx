import styles from "./TestDevSkillsCard.module.css";

import Logo from "../../../../../assets/img/logo.svg";

interface Props {
  title: string;
  description: string;
  stack: string;
  icons: { url: string; name: string }[];
  handleOnClick(): void;
}

const TestDevSkillsCard: React.FC<Props> = ({
  title,
  description,
  stack,
  icons,
  handleOnClick,
}) => {
  return (
    <div className={styles.container} onClick={handleOnClick}>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <img src={Logo} alt="" />
        </div>
        {/* <span className={styles.info_text}>Estágio</span> */}
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.info_container}>
          <span>{stack}</span>
          <div className={styles.skill_image_container}>
            {icons.map((icon, index) => (
              <img key={index} src={icon.url} alt={icon.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDevSkillsCard;
