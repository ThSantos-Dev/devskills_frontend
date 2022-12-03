import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOfCompany } from "../../../../slices/common/testSlice";
import { TTestOfCompany } from "../../../../types/devskills/test/TTestOfCompany";
import CardSearchTest from "./../../../../components/developer/Card/SearchTest/CardSearchTest";
import styles from "./ListTests.module.css";

interface Props {}

const ListTests = (props: Props) => {
  const { tests, loading } = useSelector<
    any,
    { tests: TTestOfCompany; loading: boolean }
  >((state: any) => state.test);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllOfCompany());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.container}>
      <h2>Provas cadastradas</h2>

      <div className={styles.cards_container}>
        {tests.results ? (
          <>
            {tests.results.map((test) => (
              <CardSearchTest
                title={test.prova.titulo}
                description={test.prova.descricao}
                img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
                stack={test.prova.provaStack[0].stack.nome}
                type={test.prova.provaTipo.tipo}
                icons={[
                  "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
                  "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
                  "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
                  "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
                  "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
                  "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
                ]}
                key={test.id}
                containerCustomStyle={{
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
                contentCustomStyle={{
                  backgroundColor: "var(--dark-container)",
                }}
              />
            ))}
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </section>
  );
};

export default ListTests;
