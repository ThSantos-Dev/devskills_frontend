import { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import SelectCustom from "../../../components/shared/Form/Select/SelectCustom";
import Container from "../../../components/shared/Layout/Container/Container";
import UserService from "../../../services/apiDevSkills/company/userService";
import { TGetRanking } from "../../../types/devskills/dev/TGetRanking";
import styles from "./RankingOfDevs.module.css";

interface Props {}

const RankingOfDevs = (props: Props) => {
  const [listOfDevs, setListOfDevs] = useState<TGetRanking[]>();
  const [listOfLocales, setListOfLocales] = useState<any[]>();
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    UserService.getRanking(user.token).then((res) => {
      if (res.error) return toast.error(res.error);

      const data: TGetRanking[] = res.data;

      setListOfDevs(data);

      setListOfLocales([
        ...new Set(
          data.map((item) => {
            if (!item.EnderecoUsuario[0]?.cidade.nome) return "";

            return (
              `${item.EnderecoUsuario[0]?.cidade.nome}, ${item.EnderecoUsuario[0]?.cidade.estado.nome}` ||
              ""
            );
          })
        ),
      ]);
    });
  }, []);

  return (
    <Container title="Ranking de Dev's">
      <div className={styles.container}>
        {listOfLocales && (
          <SelectCustom
            options={[
              ...listOfLocales.map((item: any, index) => ({
                label: item,
                value: index.toString(),
              })),
            ]}
            defaultValue={{ label: "Entre", value: "between" }}
            name="filter"
            placeholder="Nenhum"
            isMulti={true}
            closeMenuOnSelect={false}
            handleOnChange={(value) => {}}
          />
        )}
        <section>
          <div
            className={`${styles.table_container} ${true ? "" : styles.close}`}
          >
            <table>
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Perfil</th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Localidade</th>
                  <th>Pontuação</th>
                  <th>Stacks</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {listOfDevs &&
                  listOfDevs.map((dev, index) => (
                    <tr key={index}>
                      <td className={styles.position} data-label="Posição:">
                        <span>{index + 1}</span>
                      </td>
                      <td className={styles.profile} data-label="#1">
                        <img
                          src={
                            dev.foto_perfil
                              ? dev.foto_perfil
                              : "https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                          }
                          alt="profile"
                          title="Ver perfil"
                        />
                        <span className={styles.name}>{dev.nome}</span>
                      </td>
                      <td
                        className={`${styles.text} ${styles.name}`}
                        data-label="Nome:"
                      >
                        <span>{dev.nome}</span>
                      </td>
                      <td className={styles.text} data-label="E-mail">
                        <span>{dev.email}</span>
                      </td>

                      <td className={styles.text} data-label="Localidade:">
                        {dev.EnderecoUsuario[0]?.cidade.nome ? (
                          <span>
                            {dev.EnderecoUsuario[0]?.cidade.nome},{" "}
                            {dev.EnderecoUsuario[0]?.cidade.estado.nome}
                          </span>
                        ) : (
                          <span>Não informada</span>
                        )}
                      </td>
                      <td className={styles.text} data-label="Status:">
                        <span>{dev.pontuacao_plataforma}</span>
                      </td>
                      <td className={styles.text} data-label="Stacks:">
                        <span>
                          {dev.usuarioStack
                            .map((item) => item.stack.nome)
                            .toString()
                            .replaceAll(",", ", ") || "Não informado"}
                        </span>
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
      </div>
    </Container>
  );
};

export default RankingOfDevs;
