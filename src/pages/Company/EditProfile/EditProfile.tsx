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
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import uuid from "react-uuid";

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

    street: "",
    district: "",
    number_street: "",
    complement: "",
    city_name: "",
    state_name: "",
    zip_code: "",

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


  const handleUpdateAdrress = async () => {
    
  }

  const handleOnSubmit = async () => {

    let logo_url = "";

    if(previwProfileImage) {
      const storageRef = ref(storage, `images/${uuid()}`);
      await uploadBytes(storageRef, previwProfileImage);
      logo_url = await getDownloadURL(storageRef);
    }

    const dataFormated = {
      idTelefone: companyData?.empresaTelefone[0].id,
      idLogin: companyData?.LoginEmpresa[0].id,
      cnpj: companyData?.cnpj,
      senha: formFields.newPassword,
      confirmar_senha: formFields.confirmNewPassword,
      email: formFields.email,
      nome_fantasia: companyData?.nome_fantasia,
      biografia: formFields.description,
      logo: logo_url || formFields.logo,
      ddd: formFields.telphone1.slice(0, 1),
      numero_telefone: formFields.telphone1.slice(2),
      logradouro: formFields.state_name,
      bairro: formFields.district,
      numero_rua: formFields.number_street,
      nome_cidade: formFields.city_name,
      nome_estado: formFields.state_name
    }

    CompanyService.updateProfile(dataFormated, user.token).then((res) => {
      console.log(res);
    })

  };

  useEffect(() => {
    if (!id) return;

    CompanyService.getProfileData(parseInt(id), user.token).then((res) => {
      console.log(res);

      if (res.error) return toast.error(res.error);

      const data: TCompanyInfo = res.data;

      setFormFields({
        email: data.email,
        logo: data.logo || "",
        telphone1: `${data.empresaTelefone[0].ddd} ${data.empresaTelefone[0].numero}`,
        telphone2: data.empresaTelefone[1]
          ? `${data.empresaTelefone[1]?.ddd} ${data.empresaTelefone[1]?.numero}`
          : "",

        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",

        street: data.enderecoEmpresa.logradouro,
        district: data.enderecoEmpresa.bairro,
        number_street: data.enderecoEmpresa.numero,
        complement: data.enderecoEmpresa.complemento,
        city_name: data.enderecoEmpresa.cidade.nome,
        state_name: data.enderecoEmpresa.cidade.estado.nome,
        zip_code: data.enderecoEmpresa.cep,

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
          handleOnSubmit();
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

        <section className={styles.address_container}>
          <h2>Endereço</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            eum consectetur illum praesentium reiciendis ratione repellat a!
            Voluptatibus reiciendis repellendus facere exercitationem fugit
            recusandae impedit laudantium maxime, tenetur nostrum nulla!
          </p>

          <div className={styles.form_group}>
            <Input
              name="zip_code"
              label="CEP"
              placeholder="00000-000"
              mask="00000-000"
              value={formFields.zip_code}
              disabled
            />
            <Input
              name="addressNumber"
              label="Número"
              placeholder="00A"
              value={formFields.number_street}
              disabled
            />

            <Input
              name="complement"
              label="Complemento"
              placeholder="Bloco C22"
              handleOnChange={handleInputChange}
              value={formFields.complement}
            />
          </div>

          <Input
            name="address"
            label="Endereço"
            placeholder="Alameda Java Green"
            value={`${formFields.street}, ${formFields.district} - ${formFields.city_name}, ${formFields.state_name}.`}
            disabled
          />

          <Button text="Atualizar" color="solid_white" size="small" />
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
