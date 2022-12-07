import styles from "./EditProfile.module.css";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { AiFillLinkedin, AiOutlineGlobal } from "react-icons/ai";
import { BsFillTelephoneFill, BsGithub, BsInstagram } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../../components/shared/Layout/Container/Container";
import CompanyService from "../../../services/apiDevSkills/company/companyService";
import { TCompanyInfo } from "../../../types/devskills/company/TCompanyInfo";
import Button from "./../../../components/shared/Form/Button/Button";
import Input from "./../../../components/shared/Form/Input/Input";

interface Props {}

const EditProfile = (props: Props) => {
  const { id } = useParams();

  const { user } = useSelector((state: any) => state.auth);
  const [companyData, setCompanyData] = useState<TCompanyInfo>();

  const [formFields, setFormFields] = useState({
    email: "",
    telphone1: "",
    telphone2: "",
    logo: "",

    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",

    description: "",

    instagram: "",
    github: "",
    linkedin: "",
    website: "",
  });

  const [showPasswordArea, setShowPasswordArea] = useState<boolean>(false);
  const [previwProfileImage, setPreviwProfileImage] = useState<File>();

  const inputFileEl = useRef<HTMLInputElement>(null);

  const handleAddImageProfile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPreviwProfileImage(e.target.files[0]);
    }
  };

  const handleInputChange = (value: string, input: string) => {
    setFormFields({ ...formFields, [input]: value });
  };

  useEffect(() => {
    if (!id) return;

    CompanyService.getProfileData(parseInt(id), user.token).then((res) => {
      console.log(res);

      if (res.error) return toast.error(res.error);

      const data: TCompanyInfo = res.data;

      setFormFields({
        email: "",
        logo: data.logo || "",
        telphone1: `${data.empresaTelefone[0].ddd} ${data.empresaTelefone[0].numero}`,
        telphone2: data.empresaTelefone[1]
          ? `${data.empresaTelefone[1]?.ddd} ${data.empresaTelefone[1]?.numero}`
          : "",
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
        description: data.biografia,
        github: "",
        instagram: "",
        linkedin: "",
        website: "",
      });

      setCompanyData(res.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container backTo={`/company/profile/${user.id}`} title="Editar perfil">
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
                  previwProfileImage
                    ? URL.createObjectURL(previwProfileImage)
                    : formFields?.logo
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
            <h2>{companyData?.nome_fantasia}</h2>

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
                  value={formFields.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e.target.value, "email")
                  }
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
                  name="telphone1"
                  mask={"(00) 0000-0000"}
                  type="text"
                  placeholder={"(00) 0000-0000"}
                  value={formFields.telphone1}
                  handleOnChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.input_container}>
                <span className={styles.icon}>
                  <BsFillTelephoneFill />
                </span>

                <Input
                  name="telphone2"
                  type="text"
                  mask={"(00) 0000-0000"}
                  value={formFields.telphone2}
                  handleOnChange={handleInputChange}
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
                value={formFields.currentPassword}
                handleOnChange={handleInputChange}
              />

              <Input
                name="newPassword"
                type="password"
                placeholder="Nova senha"
                label="Senha atual"
                value={formFields.newPassword}
                handleOnChange={handleInputChange}
              />
              <Input
                name="confirmNewPassword"
                type="password"
                placeholder="Confirme a senha"
                label="Confirmação de senha"
                value={formFields.confirmNewPassword}
                handleOnChange={handleInputChange}
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
            <textarea
              cols={30}
              rows={10}
              maxLength={540}
              required
              value={formFields.description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleInputChange(e.target.value, "description")
              }
            ></textarea>
          </div>
          <span>(máximo: 540 caracteres)</span>
        </section>

        <section className={styles.social_media}>
          <h2>Redes sociais</h2>

          <div className={styles.input_container}>
            <span className={styles.icon}>
              <BsInstagram />
            </span>

            <Input
              name="instagram"
              placeholder={"Instagram"}
              value={formFields.instagram}
              handleOnChange={handleInputChange}
            />
          </div>

          <div className={styles.input_container}>
            <span className={styles.icon}>
              <BsGithub />
            </span>

            <Input
              name="github"
              placeholder={"GitHub"}
              value={formFields.github}
              handleOnChange={handleInputChange}
            />
          </div>

          <div className={styles.input_container}>
            <span className={styles.icon}>
              <AiFillLinkedin />
            </span>

            <Input
              name="linkedin"
              placeholder={"Linkedin"}
              value={formFields.linkedin}
              handleOnChange={handleInputChange}
            />
          </div>
          <div className={styles.input_container}>
            <span className={styles.icon}>
              <AiOutlineGlobal />
            </span>

            <Input
              name="website"
              placeholder={"Website"}
              value={formFields.website}
              handleOnChange={handleInputChange}
            />
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
