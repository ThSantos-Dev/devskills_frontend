import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineException, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { RiMailAddFill } from "react-icons/ri";
import SelectCustom from "../../../../components/shared/Form/Select/SelectCustom";
import Modal from "../../../../components/shared/Layout/Modal/Modal";
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

  const [showModalEmail, setShowModalEmail] = useState<boolean>(true);

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
            <tr>
              <td className={styles.position}>
                <span>1</span>
              </td>
              <td className={styles.profile}>
                <img
                  src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                  alt="profile"
                  title="Ver perfil"
                />
              </td>
              <td className={styles.text}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.text}>
                <span>00:43:23</span>
              </td>
              <td className={styles.text}>
                <span>80%</span>
              </td>
              <td className={styles.text}>
                <span>Jandira, SP</span>
              </td>
              <td className={styles.text}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <MdMoreHoriz title="Mais ações"/>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.position}>
                <span>1</span>
              </td>
              <td className={styles.profile}>
                <img
                  src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                  alt="profile"
                  title="Ver perfil"
                />
              </td>
              <td className={styles.text}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.text}>
                <span>00:43:23</span>
              </td>
              <td className={styles.text}>
                <span>80%</span>
              </td>
              <td className={styles.text}>
                <span>Jandira, SP</span>
              </td>
              <td className={styles.text}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <MdMoreHoriz title="Mais ações"/>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.position}>
                <span>1</span>
              </td>
              <td className={styles.profile}>
                <img
                  src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                  alt="profile"
                  title="Ver perfil"
                />
              </td>
              <td className={styles.text}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.text}>
                <span>00:43:23</span>
              </td>
              <td className={styles.text}>
                <span>80%</span>
              </td>
              <td className={styles.text}>
                <span>Jandira, SP</span>
              </td>
              <td className={styles.text}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <MdMoreHoriz title="Mais ações"/>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal show={showModalEmail} setShow={setShowModalEmail}>
        <div className={styles.info_modal}>
          <h1 className={styles.title_modal}>Envio de e-mail</h1>

          <div className={styles.dev_info}>
            <h2>Informações do candidato</h2>

            <div className={styles.dev_content}>
              <div className={styles.profile_img}>
                <img
                  src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                  alt=""
                />

                <div>
                  <span className={styles.name}>Naruto Zurucrack</span>
                  <span className={styles.email}>
                    narutuxurumaki@nohaku.com
                  </span>
                </div>

                <span className={styles.ranking}>
                  <AiOutlineException /> <span>70%</span>
                </span>
              </div>
            </div>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            asperiores doloremque non ex aut excepturi dicta ab! Blanditiis iste
            eveniet, exercitationem quaerat architecto id soluta mollitia nisi
            consectetur, fugiat tenetur.
          </p>

          <div className={styles.content}>
            <h2>Seus modelos</h2>
            <details>
              <summary>Aprovados</summary>
              <div className={styles.models}>
                <div className={styles.model_email}>
                  <h3>Seu título</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, fuga exercitationem harum, dolorum maxime maiores
                    fugit quaerat laboriosam officia natus nostrum dicta dolores
                    explicabo necessitatibus architecto labore neque tempora.
                    Quia.
                  </p>

                  <a href="mailto:emailcandidato@email.com?subject=minhadescricao&body=minha mensagem personalizada">
                    <Button color="solid_white" size="small" text="Enviar" />
                  </a>
                </div>
                <div className={styles.model_email}>
                  <h3>Seu título</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, fuga exercitationem harum, dolorum maxime maiores
                    fugit quaerat laboriosam officia natus nostrum dicta dolores
                    explicabo necessitatibus architecto labore neque tempora.
                    Quia.
                  </p>

                  <a href="mailto:emailcandidato@email.com?subject=minhadescricao&body=minha mensagem personalizada">
                    <Button color="solid_white" size="small" text="Enviar" />
                  </a>
                </div>
                <div className={styles.model_email}>
                  <h3>Seu título</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, fuga exercitationem harum, dolorum maxime maiores
                    fugit quaerat laboriosam officia natus nostrum dicta dolores
                    explicabo necessitatibus architecto labore neque tempora.
                    Quia.
                  </p>

                  <a href="mailto:emailcandidato@email.com?subject=minhadescricao&body=minha mensagem personalizada">
                    <Button color="solid_white" size="small" text="Enviar" />
                  </a>
                </div>
              </div>
            </details>
            <details>
              <summary>Reprovados</summary>
              <div className={styles.models}>
                <div className={styles.model_email}>
                  <h3>Seu título</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, fuga exercitationem harum, dolorum maxime maiores
                    fugit quaerat laboriosam officia natus nostrum dicta dolores
                    explicabo necessitatibus architecto labore neque tempora.
                    Quia.
                  </p>

                  <a href="mailto:emailcandidato@email.com?subject=minhadescricao&body=minha mensagem personalizada">
                    <Button color="solid_white" size="small" text="Enviar" />
                  </a>
                </div>
                <div className={styles.model_email}>
                  <h3>Seu título</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, fuga exercitationem harum, dolorum maxime maiores
                    fugit quaerat laboriosam officia natus nostrum dicta dolores
                    explicabo necessitatibus architecto labore neque tempora.
                    Quia.
                  </p>

                  <a href="mailto:emailcandidato@email.com?subject=minhadescricao&body=minha mensagem personalizada">
                    <Button color="solid_white" size="small" text="Enviar" />
                  </a>
                </div>
                <div className={styles.model_email}>
                  <h3>Seu título</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, fuga exercitationem harum, dolorum maxime maiores
                    fugit quaerat laboriosam officia natus nostrum dicta dolores
                    explicabo necessitatibus architecto labore neque tempora.
                    Quia.
                  </p>

                  <a href="mailto:emailcandidato@email.com?subject=minhadescricao&body=minha mensagem personalizada">
                    <Button color="solid_white" size="small" text="Enviar" />
                  </a>
                </div>
              </div>
            </details>
          </div>

          <a href="mailto:candidato@email.com">Enviar e-mail personalizado.</a>
        </div>
      </Modal>
    </section>
  );
};

export default Ranking;
