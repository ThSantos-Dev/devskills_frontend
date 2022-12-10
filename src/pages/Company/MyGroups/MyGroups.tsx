import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiMoreFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/shared/Form/Button/Button";
import CompanyService from "../../../services/apiDevSkills/company/companyService";
import { TGetAllGroupCompany } from "../../../types/devskills/company/TGetAllGroupCompany";
import Container from "./../../../components/shared/Layout/Container/Container";
import styles from "./MyGroups.module.css";

interface Props {}

const MyGroups = (props: Props) => {
  const [groupsData, setGroupsData] = useState<TGetAllGroupCompany>();

  const navigate = useNavigate();

  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    CompanyService.getAllGroups(user.id, user.token).then((res) => {
      if (res.error) return;


      setGroupsData(res.data);
    });
  }, []);

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
                <th>Status</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {groupsData ? (
                groupsData.provaAndamento.map((item) => (
                  <tr
                    onClick={() => navigate(`/company/groups/${item.grupo.id}`)}
                  >
                    <td data-label="nome">
                      <span>{item.grupo.nome}</span>
                    </td>
                    <td data-label="Participantes">
                      <span>{item.grupo._count.grupoUsuario}</span>
                    </td>

                    <td data-label="status">
                      <span
                        className={`${styles.status} ${
                          item.grupo.status ? styles.active : styles.inative
                        }`}
                      >
                        {item.grupo.status ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                    <td data-label="detalhes">
                      <div className={styles.icon}>
                        <RiMoreFill />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>
                    <p>Nenhum Grupo Cadastrado.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default MyGroups;
