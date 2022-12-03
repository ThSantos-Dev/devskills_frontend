import { useEffect, useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../components/shared/Layout/Container/Container";
import { getAllOfCompany } from "../../../slices/common/testSlice";
import {
  TResult,
  TTestOfCompany,
} from "../../../types/devskills/test/TTestOfCompany";
import CardMyTest from "./../../../components/company/Card/CardMyTest";
import SelectCustom from "./../../../components/shared/Form/Select/SelectCustom";
import styles from "./Home.module.css";

interface Props {}

const Home = (props: Props) => {
  const [selectedTests, setSelectedTests] = useState<
    { data: TResult; selected: boolean }[]
  >([]);

  const { tests, loading } = useSelector<
    any,
    { tests: TTestOfCompany; loading: boolean }
  >((state: any) => state.test);

  const dispatch = useDispatch<any>();

  const handleAddTest = (selecteds: { label: string; value: string }[]) => {
    const filteredTests = selectedTests.map((test) => {
      if (
        selecteds.filter((item) => test.data.prova.id === parseInt(item.value))
          .length > 0
      ) {
        return { ...test, selected: true };
      }

      return { ...test, selected: false };
    });

    console.log(filteredTests);

    setSelectedTests(filteredTests);
  };

  useEffect(() => {
    dispatch(getAllOfCompany());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!tests?.results) return;

    setSelectedTests([
      ...tests.results.map((test) => ({ data: test, selected: false })),
    ]);
  }, [tests]);

  return (
    <Container title="Criar Grupo" backTo="/company/mygroups">
      <>
        {tests?.results ? (
          <>
            {" "}
            <div className={styles.container}>
              <div className={styles.group_config}>
                <div className={styles.group_description}>
                  <h2>Descrição</h2>

                  <div className={styles.description}>
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={10}
                      placeholder="Insira sua descrição..."
                    ></textarea>
                  </div>
                </div>
                <div className={styles.group_team}>
                  <h2>Integrantes</h2>

                  <div className={styles.content}>
                    <div className={styles.search_bar}>
                      <input type="text" className={styles.seila} />

                      <div className={styles.icon}>
                        <HiUserAdd title="Adicionar" />
                      </div>
                    </div>
                    <div className={styles.team_container}>
                      <div className={styles.info_container}>
                        <div className={styles.image}>
                          <img
                            src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                            alt=""
                          />
                        </div>
                        <span className={styles.info}>thales@email.com</span>
                        <div className={styles.icon}>
                          <IoClose />
                        </div>
                      </div>
                      <div className={styles.info_container}>
                        <div className={styles.image}>
                          <img
                            src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                            alt=""
                          />
                        </div>
                        <span className={styles.info}>thales@email.com</span>
                        <div className={styles.icon}>
                          <IoClose />
                        </div>
                      </div>
                      <div className={styles.info_container}>
                        <div className={styles.image}>
                          <img
                            src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                            alt=""
                          />
                        </div>
                        <span className={styles.info}>thales@email.com</span>
                        <div className={styles.icon}>
                          <IoClose />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.test_relation_container}>
                <h2>Provas relacionadas</h2>

                <div className={styles.select_container}>
                  <SelectCustom
                    name="allTests"
                    placeholder="Selecione"
                    options={tests.results.map((test) => {
                      return {
                        label: test.prova.titulo,
                        value: test.prova.id.toString(),
                      };
                    })}
                    isMulti={true}
                    closeMenuOnSelect={false}
                    handleOnChange={(value) => {
                      handleAddTest(value);
                    }}
                  />
                </div>

                <div className={styles.tests_container}>
                  {selectedTests ? (
                    selectedTests
                      .filter((test) => test.selected === true)
                      .map((test) => (
                        <CardMyTest test={test.data} key={test.data.id} />
                      ))
                  ) : (
                    <p>Nenhuma prova relacionada.</p>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </>
    </Container>
  );
};

export default Home;
