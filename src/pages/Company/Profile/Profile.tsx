import { useEffect, useState } from "react";
import { AiFillLinkedin, AiOutlineGlobal } from "react-icons/ai";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CompanyService from "../../../services/apiDevSkills/company/companyService";
import { TCompanyInfo } from "../../../types/devskills/company/TCompanyInfo";
import Button from "./../../../components/shared/Form/Button/Button";
import Container from "./../../../components/shared/Layout/Container/Container";
import styles from "./Profile.module.css";
import Feedbacks from "./Tabs/Feedbacks";
import ListTests from "./Tabs/ListTests";
import Photos from "./Tabs/Photos";

interface Props {}

const Profile = (props: Props) => {
  const { id } = useParams();

  const { user } = useSelector((state: any) => state.auth);
  const [companyData, setCompanyData] = useState<TCompanyInfo>();
  const navigate = useNavigate();

  const [showTab, setShowTab] = useState({
    tests: false,
    feedbacks: false,
    photos: true,
  });

  const handleShowTab = (tab: "tests" | "feedbacks" | "photos") => {
    switch (tab) {
      case "tests":
        setShowTab({
          tests: true,
          feedbacks: false,
          photos: false,
        });
        break;
      case "feedbacks":
        setShowTab({
          tests: false,
          feedbacks: true,
          photos: false,
        });
        break;
      case "photos":
        setShowTab({
          tests: false,
          feedbacks: false,
          photos: true,
        });
        break;

      default:
        break;
    }
  };

  const searchCompanyData = () => {
    if (!id) return;

    CompanyService.getProfileData(parseInt(id), user.token).then((res) => {
      console.log(res);

      if (res.error) return toast.error(res.error);

      setCompanyData(res.data);
    });
  };

  useEffect(() => {
    if (!id) return;
    searchCompanyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container title="Perfil" backTo={`/${user.type}/home`}>
      {companyData ? (
        <div className={styles.container}>
          <header>
            <div className={styles.media}>
              <div className={styles.image}>
                <img src={companyData.logo} alt={companyData.nome_fantasia} />
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
                className={`${styles.button_container} ${
                  user.type === "COMPANY" ? styles.show : ""
                }`}
              >
                <Button
                  color="solid_white"
                  size="small"
                  text="Editar"
                  onClick={() => navigate(`/company/profile/${user.id}/edit`)}
                />
              </div>

              <h2>{companyData.nome_fantasia}</h2>
              <p>{companyData.biografia}</p>
            </div>
          </header>

          <div className={styles.content_container}>
            <nav className={styles.sidebar_container}>
              <ul>
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
                <li
                  onClick={() => handleShowTab("photos")}
                  className={showTab.photos ? styles.active : ""}
                >
                  Galeria
                </li>
              </ul>
            </nav>

            {showTab.tests && (
              <ListTests
                tests={companyData.provaAndamento}
                logo={companyData.logo}
              />
            )}
            {showTab.feedbacks && <Feedbacks />}
            {showTab.photos && (
              <Photos
                photos={companyData.fotosAmbiente}
                handleUpdateData={searchCompanyData}
              />
            )}
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};

export default Profile;
