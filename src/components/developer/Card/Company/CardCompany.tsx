import { AiOutlineHeart } from "react-icons/ai";
import styles from "./CardCompany.module.css";

interface Props {
  name: string;
  img_url: string;
  place: string;

  handleOnClick(): void;
}

const CardCompany: React.FC<Props> = ({
  name,
  img_url,
  place,
  handleOnClick,
}) => {
  return (
    <div className={styles.card_company}>
      <div className={styles.image_container}>
        <img src={img_url} alt={name + "- logo"} />
        <div className={styles.icon}>
          <AiOutlineHeart />
        </div>
      </div>

      <div className={styles.content}>
        <h3>{name.toLocaleUpperCase()}</h3>
        <div className={styles.info}>
          <span>{place}</span>
          <button onClick={handleOnClick}>Ver perfil</button>
        </div>
      </div>
    </div>
  );
};

export default CardCompany;
