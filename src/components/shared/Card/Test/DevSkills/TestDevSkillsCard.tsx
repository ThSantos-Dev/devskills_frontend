import styles from "./TestDevSkillsCard.module.css";

import Logo from "../../../../../assets/img/logo.svg";

interface Props {}

const TestDevSkillsCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <img src={Logo} alt="" />
        </div>
        <span className={styles.info_text}>Estágio</span>
      </div>

      <div className={styles.content}>
        <h3>Prova de React.JS</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna...
        </p>
        <div className={styles.info_container}>
          <span>Front-end</span>
          <div className={styles.skill_image_container}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDevSkillsCard;
