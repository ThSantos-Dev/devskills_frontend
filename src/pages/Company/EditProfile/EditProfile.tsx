import styles from "./EditProfile.module.css";

import { FormEvent, ChangeEvent, useRef, useState } from "react";
import { AiFillLinkedin, AiOutlineGlobal } from "react-icons/ai";
import { BsFillTelephoneFill, BsGithub, BsInstagram } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Container from "../../../components/shared/Layout/Container/Container";
import Button from "./../../../components/shared/Form/Button/Button";
import Input from "./../../../components/shared/Form/Input/Input";

interface Props {}

const EditProfile = (props: Props) => {
  const [showPasswordArea, setShowPasswordArea] = useState<boolean>(false);
  const [previwProfileImage, setPreviwProfileImage] = useState<File>();

  const inputFileEl = useRef<HTMLInputElement>(null);

  const handleAddImageProfile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPreviwProfileImage(e.target.files[0]);
    }
  };

  return (
    <Container backTo="/company/profile" title="Editar perfil">
      <form
        className={styles.container}
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <section className={styles.info_geral_container}>
          <div className={styles.image_container}>
            <label>
              <input
                type="file"
                ref={inputFileEl}
                accept="image/png, image/jpeg"
                onChange={handleAddImageProfile}
              />
              <img
                src={
                  (previwProfileImage
                    ? URL.createObjectURL(previwProfileImage)
                    : "") ||
                  "https://archive.org/download/no-photo-available/no-photo-available.png"
                }
                alt=""
              />
            </label>

            <div className={styles.button_container}>
              <Button
                text="Alterar"
                color="solid_white"
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  inputFileEl.current?.click();
                }}
              />
            </div>
          </div>

          <div className={styles.contact_container}>
            <h2>Nome da empresa</h2>

            <div className={styles.info}>
              <label htmlFor="email">E-mail</label>
              <div className={styles.input_container}>
                <span className={styles.icon}>
                  <IoIosMail />
                </span>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
            </div>

            <div className={styles.info_group}>
              <label>Contato</label>

              <div className={styles.input_container}>
                <span className={styles.icon}>
                  <BsFillTelephoneFill />
                </span>
                <Input
                  name="contact1"
                  mask={"(00) 0000-0000"}
                  type="text"
                  placeholder={"(00) 0000-0000"}
                  required
                />
              </div>

              <div className={styles.input_container}>
                <span className={styles.icon}>
                  <BsFillTelephoneFill />
                </span>

                <Input
                  name="contact2"
                  type="text"
                  mask={"(00) 0000-0000"}
                  placeholder={"(00) 0000-0000"}
                />
              </div>
            </div>
          </div>

          <div className={styles.password_area}>
            <div className={styles.button_container}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPasswordArea(!showPasswordArea);
                }}
              >
                Alterar senha{" "}
                <span
                  className={`${styles.icon} ${
                    showPasswordArea ? styles.up : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </button>
            </div>

            <div
              className={`${styles.password_content} ${
                showPasswordArea ? styles.show : ""
              }`}
            >
              <Input
                name="currentPassword"
                type="password"
                placeholder="Senha atual"
                label="Senha atual"
              />

              <Input
                name="newPassword"
                type="password"
                placeholder="Nova senha"
                label="Senha atual"
              />
              <Input
                name="confirmNewPassword"
                type="password"
                placeholder="Confirme a senha"
                label="Confirmação de senha"
              />

              <Button
                color="solid_white"
                text="Confirmar"
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </section>

        <section className={styles.description_container}>
          <h2>Descrição</h2>

          <div className={styles.description}>
            <textarea cols={30} rows={10} maxLength={540} required></textarea>
          </div>
          <span>(máximo: 540 caracteres)</span>
        </section>

        <section className={styles.social_media}>
          <h2>Redes sociais</h2>

          <div className={styles.input_container}>
            <span className={styles.icon}>
              <BsInstagram />
            </span>

            <Input name="instagram" placeholder={"Instagram"} />
          </div>

          <div className={styles.input_container}>
            <span className={styles.icon}>
              <BsGithub />
            </span>

            <Input name="github" placeholder={"GitHub"} />
          </div>

          <div className={styles.input_container}>
            <span className={styles.icon}>
              <AiFillLinkedin />
            </span>

            <Input name="social_media1" placeholder={"Linkedin"} />
          </div>
          <div className={styles.input_container}>
            <span className={styles.icon}>
              <AiOutlineGlobal />
            </span>

            <Input name="social_media1" placeholder={"Website"} />
          </div>
        </section>

        <div className={styles.button_container}>
          <button>Salvar alterações</button>
        </div>
      </form>
    </Container>
  );
};

export default EditProfile;
