import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import {
  MdMoreHoriz,
  MdOutlineAttachEmail,
  MdOutlinePersonOff,
} from "react-icons/md";
import SelectCustom from "../../../../components/shared/Form/Select/SelectCustom";
import ChooseType from "../../../Test/ChooseType/ChooseType";
import Button from "./../../../../components/shared/Form/Button/Button";
import styles from "./Ranking.module.css";

interface Props {
  show: boolean;
}

const Ranking: React.FC<Props> = ({ show }) => {
  const [filters, setFilters] = useState({
    score: {
      between: { minValue: 1, maxValue: 100 },
      equals_to: 0,
      bigger_then: 0,

      selected: "between",
    },
    locale: [],
    status: "all",
  });

  const [showModalCondition, setShowModalCondition] = useState<boolean>(true);
  const [showModalAproved, setShowModalAproved] = useState<boolean>(false);
  const [showModalAprovedGroup, setShowModalAprovedGroup] =
    useState<boolean>(false);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <section className={`${styles.container} ${show ? styles.active : ""}`}>
      <div className={styles.filter_container}>
        <h2>Filtros</h2>

        <div className={styles.filter}>
          <h3>Nota</h3>

          <div className={styles.select_container}>
            <SelectCustom
              options={[
                { label: "Entre", value: "between" },
                { label: "Igual a", value: "equals_to" },
                { label: "Maior que", value: "bigger_then" },
              ]}
              defaultValue={{ label: "Entre", value: "between" }}
              name="filter"
              placeholder="Nenhum"
              handleOnChange={(value) => {
                setFilters({
                  ...filters,
                  score: { ...filters.score, selected: value.value },
                });
              }}
            />
          </div>

          <div className={styles.inputs}>
            {filters.score.selected === "between" ? (
              <>
                <input
                  type="number"
                  value={filters.score.between.minValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFilters({
                      ...filters,
                      score: {
                        ...filters.score,
                        between: {
                          ...filters.score.between,
                          minValue: parseInt(e.target.value),
                        },
                      },
                    })
                  }
                />
                <span>e</span>
                <input
                  type="number"
                  value={filters.score.between.maxValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFilters({
                      ...filters,
                      score: {
                        ...filters.score,
                        between: {
                          ...filters.score.between,
                          maxValue: parseInt(e.target.value),
                        },
                      },
                    })
                  }
                />
              </>
            ) : (
              <input
                type="number"
                value={
                  filters.score.selected === "equals_to"
                    ? filters.score.equals_to
                    : filters.score.bigger_then
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFilters({
                    ...filters,
                    score: {
                      ...filters.score,
                      [filters.score.selected]: parseInt(e.target.value),
                    },
                  })
                }
              />
            )}
          </div>
          {/* 
          <div className={styles.equals_to}>
            <input type="text" />
          </div>

          <div className={styles.bigger_then}>
            <input type="text" />
          </div> */}
        </div>

        <div className={styles.filter}>
          <h3>Localidade</h3>

          <div className={styles.select_container}>
            <SelectCustom
              options={[
                { label: "Entre", value: "between" },
                { label: "Igual a", value: "equals_to" },
                { label: "Maior que", value: "bigger_then" },
              ]}
              defaultValue={{ label: "Entre", value: "between" }}
              name="filter"
              placeholder="Nenhum"
              isMulti={true}
              closeMenuOnSelect={false}
              handleOnChange={(value) => {}}
            />
          </div>
        </div>

        <div className={`${styles.filter} ${styles.status}`}>
          <h3>Status</h3>

          <div className={styles.radio_container}>
            <label>
              <input
                onClick={() => setFilters({ ...filters, status: "all" })}
                type="radio"
                name="status"
                value="all"
                defaultChecked={true}
              />
              <span>Todas</span>
            </label>
            <label>
              <input
                onClick={() => setFilters({ ...filters, status: "corrected" })}
                type="radio"
                name="status"
                value="corrected"
              />
              <span>Corrigidas</span>
            </label>
            <label>
              <input
                onClick={() =>
                  setFilters({ ...filters, status: "uncorrected" })
                }
                type="radio"
                name="status"
                value="uncorrected"
              />
              <span>Não corrigidas</span>
            </label>
          </div>
        </div>

        <div className={styles.button_container}>
          <Button color="solid_white" size="small" text="Aplicar" />
        </div>
      </div>

      <h2>Listagem de candidatos</h2>

      <div className={styles.table_container}>
        <table>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Perfil</th>
              <th>Nome</th>
              <th>Duração</th>
              <th>Pontuação</th>
              <th>Localidade</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
              (candidate, index) => (
                <tr key={index}>
                  <td className={styles.position} data-label="Posição:">
                    <span>1</span>
                  </td>
                  <td className={styles.profile} data-label="#1">
                    <img
                      src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                      alt="profile"
                      title="Ver perfil"
                    />
                    <span className={styles.name}>Thales Santos da Silva</span>
                  </td>
                  <td
                    className={`${styles.text} ${styles.name}`}
                    data-label="Nome:"
                  >
                    <span>Thales Santos da Silva</span>
                  </td>
                  <td className={styles.text} data-label="Duração:">
                    <span>00:43:23</span>
                  </td>
                  <td className={styles.text} data-label="Pontuação:">
                    <span>80%</span>
                  </td>
                  <td className={styles.text} data-label="Localidade:">
                    <span>Jandira, SP</span>
                  </td>
                  <td className={styles.text} data-label="Status:">
                    <span>Aguardando correção</span>
                  </td>
                  <td className={styles.actions} data-label="Ação:">
                    <div>
                      <span className={styles.icon}>
                        <MdMoreHoriz title="Mais ações" />
                      </span>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <ChooseType
        show={showModalCondition}
        setShow={setShowModalCondition}
        closeButton={true}
        content={{
          title: "Defina a situalção do candidato(s)",
          description:
            "been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          options: [
            {
              icon: <MdOutlinePersonOff />,
              label: "Reprovado",
              handleOnClick: () => {},
            },
            {
              icon: <BsFillPersonCheckFill />,
              label: "Aprovado",
              handleOnClick: () => {
                setShowModalCondition(false);
                setShowModalAproved(true);
              },
            },
          ],
        }}
      />

      <ChooseType
        show={showModalAproved}
        setShow={setShowModalAproved}
        closeButton={true}
        content={{
          title: "Defina a situalção do candidato(s)",
          description:
            "been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          options: [
            {
              icon: <AiOutlineUsergroupAdd />,
              label: "Adicionar a um grupo",
              handleOnClick: () => {
                setShowModalAproved(false);
                setShowModalAprovedGroup(true);
              },
            },
            {
              icon: <MdOutlineAttachEmail />,
              label: "Entrar em contato",
              handleOnClick: () => {},
            },
          ],
        }}
      />
      <ChooseType
        show={showModalAprovedGroup}
        setShow={setShowModalAprovedGroup}
        closeButton={true}
        content={{
          title: "Defina a situalção do candidato(s)",
          description:
            "been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          options: [
            {
              icon: <HiUserGroup />,
              label: "Adicionar a existente",
              handleOnClick: () => {},
            },
            {
              icon: <AiOutlineUsergroupAdd />,
              label: "Formar novo grupo",
              handleOnClick: () => {},
            },
          ],
        }}
      />
    </section>
  );
};

export default Ranking;
