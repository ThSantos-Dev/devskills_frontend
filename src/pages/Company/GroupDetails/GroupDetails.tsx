import styles from "./GroupDetails.module.css";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardMyTest from "../../../components/company/Card/CardMyTest";
import Container from "../../../components/shared/Layout/Container/Container";
import CompanyService from "../../../services/apiDevSkills/company/companyService";
import { getAllOfCompany } from "../../../slices/common/testSlice";
import { TGetGrouDetails } from "../../../types/devskills/company/TGetGroupDetails";
import {
  TResult,
  TTestOfCompany,
} from "../../../types/devskills/test/TTestOfCompany";

interface Props {}

const GroupDetails = (props: Props) => {
  const { id } = useParams();

  const [showListCandidates, setShowListCandidates] = useState<boolean>(false);

  const [selectedTests, setSelectedTests] = useState<
    { data: TResult; selected: boolean }[]
  >([]);

  const { tests, loading } = useSelector<
    any,
    { tests: TTestOfCompany; loading: boolean }
  >((state: any) => state.test);
  const { user } = useSelector((state: any) => state.auth);

  const [groupData, setGroupData] = useState<TGetGrouDetails>();

  const searchInputRef = useRef<HTMLInputElement>(null);
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
    if (!id) return;

    dispatch(getAllOfCompany());

    CompanyService.getGroupDetails(id, user.token).then((res) => {
      if (res.error) return;

      const data: TGetGrouDetails = res.data;

      console.log(data);
      setGroupData(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!tests?.results) return;

    setSelectedTests([
      ...tests.results.map((test) => ({ data: test, selected: false })),
    ]);
  }, [tests]);

  return (
    <Container backTo="/company/mygroups" title="Detalhes do Grupo">
      <div className={styles.container}>
        <section className={styles.content_container}>
          <div className={styles.content}>
            <h2>Nome do grupo</h2>
            <span>{groupData?.groupInfo.nome}</span>
          </div>

          <div className={styles.content}>
            <h2>Descrição do grupo</h2>
            <p>{groupData?.groupInfo.descricao}</p>
          </div>
        </section>

        <section className={styles.candidates_container}>
          <div className={styles.title_container}>
            <h2>Integrante do Grupo</h2>
            <span
              className={`${styles.icon} ${
                showListCandidates ? styles.show : ""
              }`}
              onClick={() => setShowListCandidates(!showListCandidates)}
            >
              <FaChevronDown />
            </span>
          </div>

          <div
            className={`${styles.table_container} ${
              showListCandidates ? "" : styles.close
            }`}
          >
            <table>
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Perfil</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Localidade</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {groupData?.usersOfGroup &&
                  groupData?.usersOfGroup.map((candidate, index) => (
                    <tr key={index}>
                      <td className={styles.position} data-label="Posição:">
                        <span>1</span>
                      </td>
                      <td className={styles.profile} data-label="#1">
                        <img
                          src={
                            candidate.usuario.foto_perfil
                              ? candidate.usuario.foto_perfil
                              : "https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                          }
                          alt="profile"
                          title="Ver perfil"
                        />
                        <span className={styles.name}>
                          {candidate.usuario.nome}
                        </span>
                      </td>
                      <td
                        className={`${styles.text} ${styles.name}`}
                        data-label="Nome:"
                      >
                        <span>{candidate.usuario.nome}</span>
                      </td>
                      <td className={styles.text} data-label="E-mail">
                        <span>{candidate.usuario.email}</span>
                      </td>

                      <td className={styles.text} data-label="Localidade:">
                        {candidate.usuario.EnderecoUsuario[0]?.cidade.nome ? (
                          <span>
                            {candidate.usuario.EnderecoUsuario[0]?.cidade.nome},{" "}
                            {
                              candidate.usuario.EnderecoUsuario[0]?.cidade
                                .estado.nome
                            }
                          </span>
                        ) : (
                          <span>Não informada</span>
                        )}
                      </td>
                      <td className={styles.text} data-label="Status:">
                        <span>Pendente</span>
                      </td>
                      <td className={styles.actions} data-label="Ação:">
                        <div>
                          <span className={styles.icon}>
                            <MdMoreHoriz title="Mais ações" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.test_relation_container}>
          <h2>Provas relacionadas</h2>

          <div className={styles.tests_container}>
            {/* {selectedTests ? (
                selectedTests
                  .filter((test) => test.selected === true)
                  .map((test) => (
                    <CardMyTest test={test.data} key={test.data.id} />
                  ))
              ) : (
                <p>Nenhuma prova relacionada.</p>
              )} */}

            {groupData?.testsOfGroup ? (
              groupData?.testsOfGroup.map((test) => (
                <CardMyTest
                  test={test.provaAndamento}
                  key={test.provaAndamento.id}
                />
              ))
            ) : (
              <p>Nenhuma prova relacionada.</p>
            )}
          </div>
        </section>
        {/* 
        <div className={styles.button_submit_container}>
          <button>Salvar alterações</button>
        </div> */}
      </div>
    </Container>
  );
};

export default GroupDetails;
