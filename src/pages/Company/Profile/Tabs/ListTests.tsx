import { useNavigate } from "react-router-dom";
import { TProvaAndamento } from "../../../../types/devskills/company/TCompanyInfo";
import CardSearchTest from "./../../../../components/developer/Card/SearchTest/CardSearchTest";
import styles from "./ListTests.module.css";

interface Props {
  tests: TProvaAndamento[];
  logo: string;
}

const ListTests: React.FC<Props> = ({ tests, logo }) => {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <h2>Provas cadastradas</h2>

      <div className={styles.cards_container}>
        {tests.length > 0 ? (
          <>
            {tests.map((test) => (
              <CardSearchTest
                title={test.prova.titulo}
                description={test.prova.descricao}
                img_url={logo}
                stack={test.prova.provaHabilidade[0].habilidade.nome}
                type={"Teórica"}
                icons={test.prova.provaHabilidade.map(
                  (item) => item.habilidade.icone
                )}
                key={test.prova.id}
                containerCustomStyle={{
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
                contentCustomStyle={{
                  backgroundColor: "var(--dark-container)",
                }}
                userView={false}
                handleOnCLick={() => navigate(`/dev/test/${test.prova.id}`)}
              />
            ))}
          </>
        ) : (
          <p>Não há provas cadastradas.</p>
        )}
      </div>
    </section>
  );
};

export default ListTests;
