import { useState, useRef } from "react";
import { BsTrashFill } from "react-icons/bs";
import Input from "../../../../components/shared/Form/Input/Input";
import Modal from "../../../../components/shared/Layout/Modal/Modal";
import Button from "./../../../../components/shared/Form/Button/Button";
import styles from "./Photos.module.css";

interface Props {}

const Photos = (props: Props) => {
  const [showAddPhotoModal, setShowAddPhotoModal] = useState<boolean>(true);
  const [photoSelected, setPhotoSelected] = useState<File | null>();

  const inputPhotoRef = useRef<HTMLInputElement>(null);
  const handleAddPhotoPreview = () => {
    const file = inputPhotoRef.current?.files || null;

    if (!file) return;

    setPhotoSelected(file[0]);
  };

  return (
    <section className={styles.container}>
      <header>
        <h2>Galeria de fotos</h2>
        <div
          className={styles.button_container}
          onClick={() => setShowAddPhotoModal(true)}
        >
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

      <Modal show={showAddPhotoModal} setShow={setShowAddPhotoModal}>
        <div className={styles.modal_content}>
          <h2>Adicionar foto do ambiente</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            recusandae impedit tempore, dolores quibusdam autem esse dignissimos
            consequuntur itaque magnam ab assumenda voluptatem in et provident
            iusto vitae molestiae excepturi.
          </p>

          <form>
            <div className={styles.content}>
              <div className={styles.image_preview}>
                <label>
                  <input
                    type="file"
                    ref={inputPhotoRef}
                    onChange={handleAddPhotoPreview}
                  />
                  {photoSelected ? (
                    <img src={URL.createObjectURL(photoSelected)} alt="" />
                  ) : (
                    <p>Nenhuma foto selecionada</p>
                  )}
                </label>
              </div>

              <div className={styles.fields}>
                <Input type="text" label="Legenda" name="legend" />
                <Button text="Adicionar" color="solid_white" size="small" />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Photos;
