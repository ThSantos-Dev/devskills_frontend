import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../../../components/shared/Form/Button/Button";
import Container from "../../../components/shared/Layout/Container/Container";
import styles from "./ApplicationOverview.module.css";

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

            <section
              className={`${styles.personal} ${
                showTab.personal ? styles.active : ""
              }`}
            >
              <header>
                <div className={styles.control}>
                  <FaChevronLeft />
                </div>

                <div className={styles.content}>
                  <div className={styles.position}>
                    <input type="number" name="" id="" maxLength={1} />
                  </div>

                  <div className={styles.name}>
                    <span>Thales Santos da Silva</span>
                  </div>

                  <div className={styles.time}>
                    <span>00:32:00</span>
                  </div>

                  <div className={styles.correct_percentage}>
                    <span>80%</span>
                  </div>
                </div>

                <div className={styles.control}>
                  <FaChevronRight />
                </div>
              </header>

              <div className={styles.container}>
                <div className={styles.question_dissertation}>
                  <header>
                    <div className={styles.question_title}>
                      <span>Descreva JavaScript</span>
                    </div>

                    <div className={styles.correct_container}>
                      <label>
                        <input type="checkbox" name="" id="" />
                      </label>
                      <span>Correto</span>
                    </div>
                  </header>

                  <div className={styles.response}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptate, assumenda sit. Sed repellendus minus
                      dignissimos rerum quasi! Numquam, doloribus atque cumque
                      ea eius sunt dolorum tempora quis. Quaerat, nostrum porro?
                    </p>
                  </div>
                </div>
              </div>
            </section>

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
