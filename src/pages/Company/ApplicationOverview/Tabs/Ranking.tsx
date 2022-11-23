import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiMailAddFill } from "react-icons/ri";
import SelectCustom from "../../../../components/shared/Form/Select/SelectCustom";
import Button from "./../../../../components/shared/Form/Button/Button";
import styles from "./Ranking.module.css";

interface Props {
  show: boolean;
}

const Ranking: React.FC<Props> = ({ show }) => {
  return (
    <section className={`${styles.container} ${show ? styles.active : ""}`}>
      <h2>Listagem de candidatos</h2>
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
              handleOnChange={() => {}}
            />
          </div>

          <div className={styles.inputs}>
            <input type="number" />
            <span>e</span>
            <input type="number" />
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
              handleOnChange={() => {}}
            />
          </div>
        </div>

        <div className={styles.filter}>
          <h3>Status</h3>

          <div className={styles.radio_container}>
            <label htmlFor="">
              <input type="radio" name="status" id="" checked />
              <span>Todas</span>
            </label>
            <label htmlFor="">
              <input type="radio" name="status" id="" />
              <span>Corrigidas</span>
            </label>
            <label htmlFor="">
              <input type="radio" name="status" id="" />
              <span>Não corrigidas</span>
            </label>
          </div>
        </div>

        <Button color="solid_white" size="small" text="Aplicar" style={{alignSelf: "end"}}/>
      </div>

      <div className={styles.table_container}>
        <table>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Perfil</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Pontuação</th>
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
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
                />
              </td>
              <td className={styles.name}>
                <span>Thales Santos da Silva</span>
              </td>
              <td className={styles.email}>
                <span>taleshb1039@gmail.com</span>
              </td>
              <td className={styles.score}>
                <span>80%</span>
              </td>
              <td className={styles.status}>
                <span>Aguardando correção</span>
              </td>
              <td className={styles.actions}>
                <div>
                  <span className={styles.icon}>
                    <AiOutlineUsergroupAdd title="Adicionar a um grupo" />
                  </span>
                  <span className={styles.icon}>
                    <RiMailAddFill title="Entrar em contato" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Ranking;
