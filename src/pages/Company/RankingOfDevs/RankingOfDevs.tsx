import styles from "./RankingOfDevs.module.css";

import { getAll as getAllSkills } from "../../../slices/common/skillSlice";
import { getAll as getAllStacks } from "../../../slices/common/stackSlice";

import { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SelectCustom from "../../../components/shared/Form/Select/SelectCustom";
import Container from "../../../components/shared/Layout/Container/Container";
import { TSelected } from "../../../components/shared/Test/Config/TestConfig";
import UserService from "../../../services/apiDevSkills/company/userService";
import { TGetRanking } from "../../../types/devskills/dev/TGetRanking";
import { TSkill } from "../../../types/devskills/skill/TSkill";
import { selectFormat } from "../../../utils/select-format";

interface Props {}

const RankingOfDevs = (props: Props) => {
  const [listOfDevs, setListOfDevs] = useState<
    {
      data: TGetRanking;
      selected: boolean;
      localidade: string;
      skill: boolean;
      stack: boolean;
    }[]
  >();
  const [listOfLocales, setListOfLocales] = useState<any[]>();
  const [skillFiltered, setSkillFiltered] = useState<TSkill[]>([]);

  const [inputs, setInputs] = useState<{
    skill: boolean;
    stack: boolean;
    localidade: string;
    ids_stacks: number[];
    ids_habilidades: number[];
  }>({
    ids_stacks: [],
    ids_habilidades: [],
    localidade: "",
    skill: true,
    stack: true,
  });

  const dispatch: any = useDispatch();

  const { user } = useSelector((state: any) => state.auth);
  const { stacks, loading: stackLoading } = useSelector(
    (state: any) => state.stack
  );
  const { skills, loading: skillLoading } = useSelector(
    (state: any) => state.skill
  );

  const handleOnChange = (value: TSelected[], name: string) => {
    if (!listOfDevs) return;

    let allDevs = listOfDevs;

    if (name === "localidade") {
      if (value.length === 0) {
        allDevs = listOfDevs?.map((item) => ({
          ...item,
          selected: true,
        }));
      } else {
        allDevs = listOfDevs?.map((item) => {
          if (
            value.filter((locale) => locale.label === item.localidade).length >
            0
          ) {
            return { ...item, selected: true };
          }

          return { ...item, selected: false };
        });
      }
    }

    if (name === "skills") {
      const newInputs = {
        ...inputs,
        ids_habilidades: value.map((option: TSelected) =>
          parseInt(option.value)
        ),
      };

      allDevs.forEach((item, index) => {
        item.data.usuarioHabilidade.forEach((value) => {
          if (
            newInputs.ids_habilidades.filter((id) => id === value.habilidade.id)
              .length > 0
          ) {
            allDevs[index].skill = true;
            return;
          }

          allDevs[index].skill = false;
        });
      });

      if (value.length === 0) {
        allDevs = listOfDevs?.map((item) => ({
          ...item,
          skill: true,
        }));
      }

      setInputs(newInputs);
    } else if (name === "stacks") {
      const newInputs = {
        ...inputs,
        ids_stacks: value.map((option: TSelected) => parseInt(option.value)),
      };

      allDevs.forEach((item, index) => {
        item.data.usuarioStack.forEach((value) => {
          if (
            newInputs.ids_stacks.filter((id) => id === value.stack.id).length >
            0
          ) {
            console.log(allDevs[index]);
            allDevs[index].stack = true;
            return;
          }

          allDevs[index].stack = false;
        });
      });

      if (value.length === 0) {
        allDevs = listOfDevs?.map((item) => ({
          ...item,
          stack: true,
        }));
      }

      setInputs(newInputs);
    }

    setListOfDevs(allDevs);
  };

  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(getAllStacks());

    UserService.getRanking(user.token).then((res) => {
      if (res.error) return toast.error(res.error);

      const data: TGetRanking[] = res.data;

      setListOfDevs(
        data.map((item) => ({
          data: item,
          selected: true,
          skill: true,
          stack: true,
          localidade: item.EnderecoUsuario[0]?.cidade.nome
            ? `${item.EnderecoUsuario[0]?.cidade.nome}, ${item.EnderecoUsuario[0]?.cidade.estado.nome}`
            : "",
        }))
      );

      setListOfLocales(
        [
          ...new Set(
            data.map((item) => {
              if (!item.EnderecoUsuario[0]?.cidade.nome) return "";

              return (
                `${item.EnderecoUsuario[0]?.cidade.nome}, ${item.EnderecoUsuario[0]?.cidade.estado.nome}` ||
                ""
              );
            })
          ),
        ].filter((item) => item !== "")
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inputs.ids_stacks.length === 0 || !stacks) return;

    let filtered: TSkill[] = [];

    inputs.ids_stacks.map((idStack: number) => {
      return (filtered = [
        ...filtered,
        ...skills.filter((skill: TSkill) => skill.idStack === idStack),
      ]);
    });

    setSkillFiltered(filtered);
  }, [inputs.ids_stacks, skills, stacks]);

  useEffect(() => {}, [inputs.localidade]);

  return (
    <Container title="Ranking de Dev's">
      <div className={styles.container}>
        <div className={styles.filters_container}>
          <h2>Filtros</h2>
          {listOfLocales && (
            <SelectCustom
              label="Localidade"
              options={[
                ...listOfLocales.map((item: any, index) => ({
                  label: item,
                  value: index.toString(),
                })),
              ]}
              name="filter"
              placeholder="Selecione"
              isMulti={true}
              closeMenuOnSelect={false}
              handleOnChange={(value) => handleOnChange(value, "localidade")}
            />
          )}
          {listOfLocales && (
            <SelectCustom
              label="Stacks"
              options={stacks && selectFormat(stacks)}
              name="filter"
              placeholder="Selecione"
              isMulti={true}
              closeMenuOnSelect={false}
              handleOnChange={(value) => handleOnChange(value, "stacks")}
              isLoading={stackLoading}
            />
          )}
          {listOfLocales && (
            <SelectCustom
              label="Tecnologias"
              options={skillFiltered && selectFormat(skillFiltered)}
              name="filter"
              placeholder="Selecione"
              isMulti={true}
              closeMenuOnSelect={false}
              handleOnChange={(value) => handleOnChange(value, "skills")}
              isLoading={skillLoading}
            />
          )}
        </div>

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
                listOfDevs.filter(
                  (item) => item.selected && item.skill && item.stack
                ).length > 0 ? (
                  listOfDevs
                    .filter((item) => item.selected && item.skill && item.stack)
                    .map((dev, index) => (
                      <tr key={index}>
                        <td className={styles.position} data-label="Posição:">
                          <span>{index + 1}</span>
                        </td>
                        <td className={styles.profile} data-label="#1">
                          <img
                            src={
                              dev.data.foto_perfil
                                ? dev.data.foto_perfil
                                : "https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                            }
                            alt="profile"
                            title="Ver perfil"
                          />
                          <span className={styles.name}>{dev.data.nome}</span>
                        </td>
                        <td
                          className={`${styles.text} ${styles.name}`}
                          data-label="Nome:"
                        >
                          <span>{dev.data.nome}</span>
                        </td>
                        <td className={styles.text} data-label="E-mail">
                          <span>{dev.data.email}</span>
                        </td>

                        <td className={styles.text} data-label="Localidade:">
                          {dev.data.EnderecoUsuario[0]?.cidade.nome ? (
                            <span>
                              {dev.data.EnderecoUsuario[0]?.cidade.nome},{" "}
                              {dev.data.EnderecoUsuario[0]?.cidade.estado.nome}
                            </span>
                          ) : (
                            <span>Não informada</span>
                          )}
                        </td>
                        <td className={styles.text} data-label="Status:">
                          <span>{dev.data.pontuacao_plataforma}</span>
                        </td>
                        <td className={styles.text} data-label="Stacks:">
                          <span>
                            {dev.data.usuarioStack
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
                    ))
                ) : (
                  <tr>
                    <td colSpan={8} style={{ padding: 30 }}>
                      <p>Nenhum Dev's encontrado</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default RankingOfDevs;
