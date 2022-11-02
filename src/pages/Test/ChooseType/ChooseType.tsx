import styles from "./ChooseType.module.css";
// Icons
import { IoClose } from "react-icons/io5";
import bookQuestionIcon from "../../../assets/icon/book-question.svg";
import folderIcon from "../../../assets/icon/folder.svg";

interface Props {
  show: boolean;
}

const ChooseType: React.FC<Props> = ({ show = false }) => {
  if (show) {
    document.body.style.overflowY = "hidden";
  }

  if (!show) {
    document.body.style.overflowY = "scroll";
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.close}>
          <IoClose />
        </div>

        <div className={styles.content}>
          <h1>Aplicação de Prova</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className={styles.choose_container}>
          <div className={styles.choose_item_container}>
            <div className={styles.choose_item_icon}>
              <img src={folderIcon} alt="" />
            </div>

            <span>Prova personalizada</span>
          </div>

          <div className={styles.choose_item_container}>
            <div className={styles.choose_item_icon}>
              <img src={bookQuestionIcon} alt="" />
            </div>

            <span>Nossas provas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseType;
