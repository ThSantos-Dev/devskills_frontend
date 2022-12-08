import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { MouseEvent, useRef, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import uuid from "react-uuid";
import Input from "../../../../components/shared/Form/Input/Input";
import Modal from "../../../../components/shared/Layout/Modal/Modal";
import { storage } from "../../../../firebase";
import { TFotosAmbiente } from "../../../../types/devskills/company/TCompanyInfo";
import Button from "./../../../../components/shared/Form/Button/Button";
import CompanyService from "./../../../../services/apiDevSkills/company/companyService";
import styles from "./Photos.module.css";

interface Props {
  photos: TFotosAmbiente[];
  handleUpdateData(): void;
}

const Photos: React.FC<Props> = ({ photos, handleUpdateData }) => {
  const { user } = useSelector((state: any) => state.auth);

  const [showAddPhotoModal, setShowAddPhotoModal] = useState<boolean>(true);
  const [photoSelected, setPhotoSelected] = useState<File>();
  const [legend, setLegend] = useState<String>("");
  const [loadingPhoto, setLoadingPhoto] = useState<boolean>(false);

  const inputPhotoRef = useRef<HTMLInputElement>(null);

  const handleAddPhotoPreview = () => {
    const file = inputPhotoRef.current?.files || null;

    if (!file) return;

    setPhotoSelected(file[0]);
  };

  const handleRemovePhoto = async (img_url: string, id: number) => {
    let toastId = toast.loading("Processando...");

    const storageRef = ref(storage, img_url);

    await CompanyService.deletePhoto(id, user.token).then(async (res) => {
      if (res.error) return toast.error(res.error);

      await deleteObject(storageRef)
        .then(() =>
          toast.update(toastId, {
            render: "Imagem removida com sucesso!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          })
        )
        .catch(() =>
          toast.update(toastId, {
            render: "Falha ao remover imagem do bucket!",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          })
        );
    });

    handleUpdateData();

    setLoadingPhoto(false);
  };

  const handleOnSbumit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!photoSelected) return toast.error("Selecione uma foto!");

    if (!legend) return toast.error("A legenda é obrigatória!");

    setLoadingPhoto(true);

    let img_url = "";
    const storageRef = ref(storage, `img/company/${uuid()}`);
    await uploadBytes(storageRef, photoSelected);
    img_url = await getDownloadURL(storageRef);

    CompanyService.createPhoto(
      {
        idEmpresa: user.id,
        foto: img_url,
        legenda: legend,
      },
      user.token
    ).then((data) => {
      setLoadingPhoto(false);

      if (data.error) return toast.error(data.error);

      handleUpdateData();

      toast.success(data.message);
    });
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
        {photos.map((item) => (
          <div className={styles.image_container}>
            <img src={item.foto} alt={item.legenda} />

            <div
              className={styles.remove_photo}
              onClick={() => handleRemovePhoto(item.foto, item.id)}
            >
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
                <Input
                  type="text"
                  label="Legenda"
                  name="legend"
                  handleOnChange={(value) => setLegend(value)}
                />
                <Button
                  text={loadingPhoto ? "Processando..." : "Adicionar"}
                  color="solid_white"
                  size="small"
                  handleOnClick={handleOnSbumit}
                  disabled={loadingPhoto}
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Photos;
