import styles from "./ChooseType.module.css";
// Icons
import { IoClose } from "react-icons/io5";

interface Props {
  content?: {
    title: string;
    description: string;
    options: {
      icon: JSX.Element | string;
      label: string;
      handleOnClick(): void;
    }[];
  };
  closeButton?: boolean;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChooseType: React.FC<Props> = ({
  content,
  closeButton = true,
  show = false,
  setShow,
}) => {
  if (show) {
    document.body.style.overflow = "hidden";
  }

  if (!show) {
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={
        !show ? `${styles.container} ${styles.close}` : styles.container
      }
    >
      <div className={styles.modal}>
        {closeButton && (
          <div className={styles.close} onClick={() => setShow(false)}>
            <IoClose />
          </div>
        )}

        <div className={styles.content}>
          <h1>{content?.title}</h1>
          <p>{content?.description}</p>
        </div>

        <div className={styles.choose_container}>
          {content?.options.map((choose, index) => (
            <div
              key={index}
              className={styles.choose_item_container}
              onClick={choose.handleOnClick}
            >
              <div className={styles.choose_item_icon}>
                {typeof choose.icon === "string" ? (
                  <img src={choose.icon} alt="" />
                ) : (
                  choose.icon
                )}
              </div>
              <span>{choose.label}</span>
            </div>
          ))}

          {/* 
          <div
            className={styles.choose_item_container}
            onClick={() => {
              navigate("/company/test/templates");
              document.body.style.overflow = "auto";
            }}
          >
            <div className={styles.choose_item_icon}>
              <img src={bookQuestionIcon} alt="" />
            </div>

            <span>Nossas provas</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChooseType;
