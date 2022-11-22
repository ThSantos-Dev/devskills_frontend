import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiMailAddFill } from "react-icons/ri";
import styles from "./Ranking.module.css";

interface Props {
  show: boolean;
}

const Ranking: React.FC<Props> = ({ show }) => {
  return (
    <section className={`${styles.container} ${show ? styles.active : ""}`}>
      <h2>Ranking</h2>

      <div className={styles.table_container}>
        <table >
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
