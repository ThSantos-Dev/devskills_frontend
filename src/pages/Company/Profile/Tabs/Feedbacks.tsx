import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./Feedbacks.module.css";

interface Props {}

const Feedbacks = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.image}>
            <img
              src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
              alt=""
            />
          </div>

          <div className={styles.user_name}>
            <span>Naruto Xurucrack Silva</span>
          </div>

          <div className={styles.rating_container}>
            <span className={styles.icon}>
              <AiFillStar />
            </span>
            <span className={styles.icon}>
              <AiFillStar />
            </span>
            <span className={styles.icon}>
              <AiFillStar />
            </span>
            <span className={styles.icon}>
              <AiFillStar />
            </span>

            <span className={styles.icon}>
              <AiOutlineStar />
            </span>
          </div>
        </div>

        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            numquam natus. Ducimus quam minus provident quaerat repudiandae
            perferendis tempora laborum corporis eum deserunt quis, repellendus
            necessitatibus eligendi, esse a doloribus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
