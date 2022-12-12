import { useEffect, useState } from "react";
import { AiFillLinkedin, AiOutlineGlobal } from "react-icons/ai";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CardSearchTest from "../../../components/developer/Card/SearchTest/CardSearchTest";
import CompanyService from "../../../services/apiDevSkills/company/companyService";
import UserService from "../../../services/apiDevSkills/dev/userService";
import { TCompanyInfo } from "../../../types/devskills/company/TCompanyInfo";
import { TDevInfo, TTest } from "../../../types/devskills/dev/TDevInfo";
import Button from "./../../../components/shared/Form/Button/Button";
import Container from "./../../../components/shared/Layout/Container/Container";
import styles from "./Profile.module.css";
import Feedbacks from "./Tabs/Feedbacks";
import ListTests from "./Tabs/ListTests";

interface Props { }

const ProfileUser = (props: Props) => {
  const { id } = useParams();

  const { user } = useSelector((state: any) => state.auth);
  const [companyData, setCompanyData] = useState<TCompanyInfo>();
  const [userData, setUserData] = useState<TDevInfo>();
  const navigate = useNavigate();

  const [showTab, setShowTab] = useState({
    tests: false,
    feedbacks: false,
    infos: true,
  });

  const handleShowTab = (tab: "tests" | "feedbacks" | "infos") => {
    switch (tab) {
      case "tests":
        setShowTab({
          tests: true,
          feedbacks: false,
          infos: false,
        });
        break;
      case "feedbacks":
        setShowTab({
          tests: false,
          feedbacks: true,
          infos: false,
        });
        break;
      case "infos":
        setShowTab({
          tests: false,
          feedbacks: false,
          infos: true,
        });
        break;

      default:
        break;
    }
  };

  const searchCompanyData = () => {
    if (!id) return;

    CompanyService.getProfileData(parseInt(id), user.token).then((res) => {

      if (res.error) return toast.error(res.error);

      setCompanyData(res.data);
    });
  };

  const searchUser = () => {
    if (!id) return;

    console.log(user)

    UserService.getById(parseInt(id), user.token).then((res) => {
      console.log(res);

      if (res.error) return toast.error(res.error);

      console.log(res.data);
      setUserData(res.data)
    });

  }

  useEffect(() => {
    if (!id) return;
    searchCompanyData();
    searchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container title="Perfil" backTo={`/${user.type}/home`}>
      {userData ? (
        <div className={styles.container}>
          <header>
            <div className={styles.media}>
              <div className={styles.image}>
                <img src={userData.foto_perfil} alt={userData.nome} />
              </div>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <AiOutlineGlobal />
                </span>
                <span className={styles.icon}>
                  <AiFillLinkedin />
                </span>
                <span className={styles.icon}>
                  <BsGithub />
                </span>
                <span className={styles.icon}>
                  <BsInstagram />
                </span>
              </div>
            </div>

            <div className={styles.info}>
              <div
                className={`${styles.button_container} ${user.type === "COMPANY" ? styles.show : ""
                  }`}
              >
                <Button
                  color="solid_white"
                  size="small"
                  text="Editar"
                  onClick={() => navigate(`/company/profile/${user.id}/edit`)}
                />
              </div>

              <h2>{userData.nome}</h2>
              <p>{userData.biografia}</p>
            </div>
          </header>

          <div className={styles.content_container}>
            <nav className={styles.sidebar_container}>
              <ul>
                <li
                  onClick={() => handleShowTab("infos")}
                  className={showTab.infos ? styles.active : ""}
                >
                  Informações
                </li>
                <li
                  onClick={() => handleShowTab("tests")}
                  className={showTab.tests ? styles.active : ""}
                >
                  Provas
                </li>
                <li
                  onClick={() => handleShowTab("feedbacks")}
                  className={showTab.feedbacks ? styles.active : ""}
                >
                  Avaliações
                </li>
              </ul>
            </nav>

            {showTab.tests && (
              <section className={styles.container}>
                <h2>Provas realizadas</h2>

                <div className={styles.cards_container}>
                  {userData.usuarioProva.length > 0 ?

                    userData.usuarioProva.map((prova: TTest) => {
                      return <CardSearchTest
                        description={prova.provaAndamento.prova.descricao}
                        title={prova.provaAndamento.prova.titulo}
                        stack={prova.provaAndamento.prova.provaHabilidade[0].habilidade.nome}
                        key={prova.provaAndamento.id}
                        containerCustomStyle={{
                          borderRadius: "12px",
                          overflow: "hidden",
                          marginBottom: "40px"
                        }}
                        type={prova.provaAndamento.prova.titulo}
                        contentCustomStyle={{
                          backgroundColor: "var(--dark-container)",
                        }}
                        userView={true}
                        icons={prova.provaAndamento.prova.provaHabilidade.map((item) => item.habilidade.icone)}
                        img_url={""} />
                    })


                    : (
                      <p>Carregando...</p>
                    )}
                </div>
              </section>


            )}
            {showTab.feedbacks && <Feedbacks />}
            {showTab.infos && (
              <div className={styles.user_info_container}>
                <div className={styles.user_info_item}>
                  <label>Gênero : </label>
                  <p>{userData.genero.nome}.</p>
                </div>
                <div className={styles.user_info_item}>
                  <label>Endereço : </label>
                  {
                    userData.EnderecoUsuario.map((endereco: any) => <p>{endereco.logradouro}, {endereco.numero}, {endereco.bairro} - {endereco.cidade.nome} {endereco.complemento && `, Complemento :${endereco.complemento}`}</p>)
                  }
                </div>
                <div className={styles.user_info_item}>
                  <label>Telefone(s) : </label>
                  <p>{userData.UsuarioTelefone.map((telefone: any) => `(${telefone.ddd}) ${telefone.numero}`)}</p>
                </div>
                <div className={styles.user_info_item}>
                  <label>Habilidades : </label>
                  <p>{userData.usuarioHabilidade.map((habilidade: any, index) => `${habilidade.habilidade.nome}${index + 1 == userData.usuarioHabilidade.length ? "." : ","} `)}</p>
                </div>
                <div className={styles.user_info_item}>
                  <label>Stacks : </label>
                  <p>{userData.usuarioStack.map((stack: any, index) => `${stack.stack.nome}${index + 1 == userData.usuarioStack.length ? "." : ","} `)}</p>
                </div>

              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};




export default ProfileUser;
