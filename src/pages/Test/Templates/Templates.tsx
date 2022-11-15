import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TestDevSkillsCard from "../../../components/shared/Card/Test/DevSkills/TestDevSkillsCard";
import Container from "../../../components/shared/Layout/Container/Container";
import { TSkillsData } from "../../../components/shared/Layout/Filter/Filter";
import { getAllTemplates, reset } from "../../../slices/common/testSlice";
import { filterTemplates } from "./../../../slices/common/testSlice";
import styles from "./Templates.module.css";

interface Props {}

const Templates = (props: Props) => {
  const { tests, loading } = useSelector((state: any) => state.test);

  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const [filtersData, setFiltersData] = useState<TSkillsData>({
    skills: [],
    stacks: [],
  });

  const [typeOfTest, setTypeOfTest] = useState<"PRATICA" | "TEORICA">(
    "TEORICA"
  );

  useEffect(() => {
    dispatch(getAllTemplates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(filterTemplates({ ...filtersData, type: typeOfTest, page }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersData, typeOfTest]);

  return (
    <Container
      filter={true}
      getFilters={(ids, type) => {
        if (ids) setFiltersData(ids);

        if (type) setTypeOfTest(type);
      }}
      backTo="/company/mytests"
      title="Nossas provas"
    >
      <div className={styles.container}>
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
                  type={value.provas.provaTipo.tipo}
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
