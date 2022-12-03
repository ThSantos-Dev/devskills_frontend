import { IoSearchOutline } from "react-icons/io5";
import { RiMoreFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/shared/Form/Button/Button";
import Container from "./../../../components/shared/Layout/Container/Container";
import styles from "./MyGroups.module.css";

interface Props {}

const MyGroups = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Container title="Meus grupos" backTo="/company/mygroups">
      <div className={styles.container}>
        <header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            tempora deserunt dicta vel exercitationem odit qui eligendi minus
            quidem recusandae placeat ullam facere, sapiente magnam maxime totam
            voluptatum? Nulla, accusamus.
          </p>
        </header>

        <div className={styles.actions}>
          <div className={styles.search_bar}>
            <input type="text" />
            <div className={styles.icon}>
              <IoSearchOutline />
            </div>
          </div>

          <div className={styles.button_container}>
            <Button
              text="Adicionar"
              color="solid_gray"
              size="small"
              onClick={() => navigate("/company/groups/create")}
            />
          </div>
        </div>

        <div className={styles.table_container}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Participantes</th>
                <th>Data da Criação</th>
                <th>Status</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="nome">
                  <span>SENAI JANDIRA</span>
                </td>
                <td data-label="Participantes">
                  <span>4</span>
                </td>
                <td data-label="Data de Criação">
                  <span>02/12/2022</span>
                </td>
                <td data-label="status">
                  <span className={`${styles.status} ${styles.active}`}>
                    Ativa
                  </span>
                </td>
                <td data-label="detalhes">
                  <div className={styles.icon}>
                    <RiMoreFill />
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="nome">
                  <span>SENAI JANDIRA</span>
                </td>
                <td data-label="Participantes">
                  <span>4</span>
                </td>
                <td data-label="Data de Criação">
                  <span>02/12/2022</span>
                </td>
                <td data-label="status">
                  <span className={`${styles.status} ${styles.inative}`}>
                    Inativa
                  </span>
                </td>
                <td data-label="detalhes">
                  <div className={styles.icon}>
                    <RiMoreFill />
                  </div>
                </td>
              </tr>
              <tr>
                <td data-label="nome">
                  <span>SENAI JANDIRA</span>
                </td>
                <td data-label="Participantes">
                  <span>4</span>
                </td>
                <td data-label="Data de Criação">
                  <span>02/12/2022</span>
                </td>
                <td data-label="status">
                  <span className={`${styles.status} ${styles.inative}`}>
                    Inativa
                  </span>
                </td>
                <td data-label="detalhes">
                  <div className={styles.icon}>
                    <RiMoreFill />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default MyGroups;
