import styles from "./Profile.module.css";

import { useState } from "react";
import { AiFillLinkedin, AiOutlineGlobal } from "react-icons/ai";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";
import Button from "./../../../components/shared/Form/Button/Button";
import Container from "./../../../components/shared/Layout/Container/Container";
import Feedbacks from "./Tabs/Feedbacks";
import ListTests from "./Tabs/ListTests";
import Photos from "./Tabs/Photos";

interface Props {}

const Profile = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const [companyData, setCompanyData] = useState();

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

  return (
    <Container title="Perfil" backTo={`/${user.type}/home`}>
      <div className={styles.container}>
        <header>
          <div className={styles.media}>
            <div className={styles.image}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/profile%2Fcompany%2Fimages.png?alt=media&token=efbf8b57-af50-4f49-8101-21492fd04d9e"
                alt="logo"
              />
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
              <Button color="solid_white" size="small" text="Editar" />
            </div>

            <h2>{user.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores similique, alias facere deserunt fugiat aut sit id eos
              corrupti natus harum ullam expedita placeat maiores soluta totam
              repudiandae blanditiis repellat! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Asperiores similique, alias facere
              deserunt fugiat aut sit id eos corrupti natus harum ullam expedita
              placeat maiores soluta totam repudiandae blanditiis repellat!
            </p>
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

          {showTab.tests && <ListTests />}
          {showTab.feedbacks && <Feedbacks />}
          {showTab.photos && <Photos />}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
