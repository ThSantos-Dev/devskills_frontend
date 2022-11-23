import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
}

const Modal: React.FC<Props> = ({ show, setShow, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";

  }, [show]);

  return (
    <div
      className={
        !show
          ? `${styles.modal_container} ${styles.close}`
          : styles.modal_container
      }
    >
      <div className={styles.modal}>
        <div
          className={styles.close}
          onClick={() => {
            setShow(false);
            document.body.style.overflow = "auto";
          }}
        >
          <IoClose title="Fechar" />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
