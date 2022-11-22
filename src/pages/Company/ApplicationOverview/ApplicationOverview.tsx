import { useState } from "react";
import { AiFillCloseCircle, AiOutlineCheck } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../../../components/shared/Form/Button/Button";
import Container from "../../../components/shared/Layout/Container/Container";
import styles from "./ApplicationOverview.module.css";
import Personal from "./Tabs/Personal";

type Props = {};

const ApplicationOverview = (props: Props) => {
  const [showTab, setShowTab] = useState({
    general: false,
    personal: true,
    ranking: false,
  });

  const handleShowTab = (tab: "general" | "personal" | "ranking") => {
    switch (tab) {
      case "general":
        setShowTab({
          general: true,
          personal: false,
          ranking: false,
        });
        break;
      case "personal":
        setShowTab({
          general: false,
          personal: true,
          ranking: false,
        });
        break;
      case "ranking":
        setShowTab({
          general: false,
          personal: false,
          ranking: true,
        });
        break;

      default:
        break;
    }
  };

  return (
    <Container
      filter={false}
      backTo="/company/mytests"
      title="Visão geral da prova"
    >
      <div className={styles.container}>
        <header className={styles.content}>
          <div className={styles.title_container}>
            <h2>Prova de Java</h2>
            <Button color="solid_white" size="small" text="Detalhes" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pretium
            lorem porta laoreet sit. Id risus, erat at lacus non cursus
            convallis blandit et. Commodo scelerisque nulla ultricies cursus.
            Cursus tristique cras habitant tristique risus, et ac quisque.
          </p>

          <p className={styles.info}>
            <BsFillPersonFill /> <span>500 candidatos</span>
          </p>
        </header>

        <div className={styles.content_container}>
          <nav className={styles.sidebar_container}>
            <ul>
              <li
                onClick={() => handleShowTab("general")}
                className={showTab.general ? styles.active : ""}
              >
                Geral
              </li>
              <li
                onClick={() => handleShowTab("personal")}
                className={showTab.personal ? styles.active : ""}
              >
                Individual
              </li>
              <li
                onClick={() => handleShowTab("ranking")}
                className={showTab.ranking ? styles.active : ""}
              >
                Ranking
              </li>
            </ul>
          </nav>

          <div className={styles.sections_container}>
            <section
              className={`${styles.general} ${
                showTab.general ? styles.active : ""
              }`}
            >
              <h2>Overview</h2>
            </section>

            <Personal show={showTab.personal} />

            <section
              className={`${styles.ranking} ${
                showTab.ranking ? styles.active : ""
              }`}
            >
              <h2>Todos os candidatos</h2>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ApplicationOverview;
