import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TestDevSkillsCard from "../../../components/shared/Card/Test/DevSkills/TestDevSkillsCard";
import { getAllTemplates, reset } from "../../../slices/common/testSlice";
import Container from "../../../components/shared/Layout/Container/Container";
import styles from "./Templates.module.css";

interface Props {}

const Templates = (props: Props) => {
  const { tests, loading } = useSelector((state: any) => state.test);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTemplates());
  }, [dispatch]);

  if (loading) return <p>Carregando...</p>;

  return (
    <Container filter={true}>
      <div className={styles.container}>
        <h1>Nossas provas</h1>

        <main>
          <div className={styles.cards_container}>
            {tests.results &&
              tests.results.map((value: any, index: any) => (
                <TestDevSkillsCard
                  key={index}
                  description={value.provas.descricao}
                  title={value.provas.titulo}
                  icons={value.provas.provaHabilidade.map((skill: any) => ({
                    name: skill.habilidade.nome,
                    url: skill.habilidade.icone,
                  }))}
                  stack={value.provas.provaStack[0].stack.nome}
                  handleOnClick={() => {
                    navigate("/company/test/templates/" + value.provas.id);
                    dispatch(reset());
                  }}
                />
              ))}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Templates;
