import { BsTrashFill } from "react-icons/bs";
import Button from "./../../../../components/shared/Form/Button/Button";
import styles from "./Photos.module.css";

interface Props {}

const Photos = (props: Props) => {
  return (
    <section className={styles.container}>
      <header>
        <h2>Galeria de fotos</h2>
        <div className={styles.button_container}>
          <Button color="solid_white" size="small" text="Adicionar" />
        </div>
      </header>

      <div className={styles.photos_container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div className={styles.image_container}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/images%2F02ccec-8356-52e1-50ae-35b0037bc682?alt=media&token=1fc377cc-9d0a-4aeb-80ad-1dae685f5619"
              alt=""
            />

            <div className={styles.remove_photo}>
              <span>Remover</span>
              <span className={styles.icon}>
                <BsTrashFill />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
