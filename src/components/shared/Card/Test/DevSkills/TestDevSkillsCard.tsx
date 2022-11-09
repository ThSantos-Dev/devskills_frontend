import styles from "./TestDevSkillsCard.module.css";

import Logo from "../../../../../assets/img/logo.svg";

interface Props {
  title: string;
  description: string;
  stack: string;
  icons: { url: string; name: string }[];
}

const TestDevSkillsCard: React.FC<Props> = ({
  title,
  description,
  stack,
  icons,
}) => {
  return (
    <div className={styles.container}>
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
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            /> */}
            {icons.map((icon) => (
              <img src={icon.url} alt={icon.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDevSkillsCard;
