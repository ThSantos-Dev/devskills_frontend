import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../../components/shared/Form/Button/Button";
import Container from "../../../components/shared/Layout/Container/Container";
import TestService from "../../../services/apiDevSkills/common/testService";
import { TCandidatesRanking } from "../../../types/devskills/test/TCandidatesRanking";
import { TTestApplicateDetails } from "../../../types/devskills/test/TTestApplicateDetails";
import styles from "./ApplicationOverview.module.css";
import Personal from "./Tabs/Personal";
import Ranking from "./Tabs/Ranking";

type Props = {};

const ApplicationOverview = (props: Props) => {
  const { id } = useParams();

  const { user } = useSelector((state: any) => state.auth);

  const [testInfo, setTestInfo] = useState<TTestApplicateDetails>();
  const [candidates, setCandidates] = useState<TCandidatesRanking[]>();

  const [showTab, setShowTab] = useState({
    general: false,
    personal: false,
    ranking: true,
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

  useEffect(() => {
    if (!id) return;

    TestService.getTestApplicate(parseInt(id), user.token).then((res) => {
      if (res.error) return;

      setTestInfo(res.data);
    });

    TestService.getCandidatesRanking(parseInt(id), user.token).then((res) => {
      if (res.error) return;

      setCandidates(res.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container
      filter={false}
      backTo="/company/mytests"
      title="Visão geral da prova"
    >
      <div className={styles.container}>
        <header className={styles.content}>
          <div className={styles.title_container}>
            <h2>{testInfo?.titulo}</h2>
            <Button color="solid_white" size="small" text="Detalhes" />
          </div>

          <p>{testInfo?.descricao}</p>

          <div className="info_container">
            <h3>Stacks:</h3>
            <span>
              {testInfo?.provaStacks
                .map((item) => item.nome)
                .toString()
                .replace(",", ", ")}
              .
            </span>
          </div>

          <div className="info_container">
            <h3>Tecnologias:</h3>
            <span>
              {testInfo?.provaHabilidades
                .map((item) => item.nome)
                .toString()
                .replace(",", ", ")}
              .
            </span>
          </div>

          <p className={styles.info}>
            <BsFillPersonFill />{" "}
            <span>
              {testInfo?.totalCandidatos} candidato
              {testInfo?.totalCandidatos && testInfo?.totalCandidatos > 1
                ? "s"
                : ""}
            </span>
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
            {/* <section
              className={`${styles.general} ${
                showTab.general ? styles.active : ""
              }`}
            >
              <h2>Overview</h2>
            </section> */}

            {showTab.personal && <Personal show={showTab.personal} />}

            {showTab.ranking && candidates && (
              <Ranking show={showTab.ranking} data={candidates} />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ApplicationOverview;
