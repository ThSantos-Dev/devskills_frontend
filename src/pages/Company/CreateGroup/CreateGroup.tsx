import styles from "./CreateGroup.module.css";

import { useEffect, useRef, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../../components/shared/Layout/Container/Container";
import CompanyService from "../../../services/apiDevSkills/company/companyService";
import { getAllOfCompany } from "../../../slices/common/testSlice";
import {
  TResult,
  TTestOfCompany,
} from "../../../types/devskills/test/TTestOfCompany";
import CardMyTest from "./../../../components/company/Card/CardMyTest";
import Button from "./../../../components/shared/Form/Button/Button";
import Input from "./../../../components/shared/Form/Input/Input";
import SelectCustom from "./../../../components/shared/Form/Select/SelectCustom";
import UserService from "./../../../services/apiDevSkills/company/userService";

interface Props {}
export type TUserContact = {
  id: number;
  nome: string;
  email: string;
  foto_perfil: string;
};

const CreateGroup = (props: Props) => {
  const [inputs, setInputs] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const [isLoading, setIsLaoding] = useState(false);

  const [selectedTests, setSelectedTests] = useState<
    { data: TResult; selected: boolean }[]
  >([]);

  const [listOfDevs, setListOfDevs] = useState<
    {
      data: TUserContact;
      selected: boolean;
    }[]
  >([]);

  const { user } = useSelector((state: any) => state.auth);

  const { tests, loading } = useSelector<
    any,
    { tests: TTestOfCompany; loading: boolean }
  >((state: any) => state.test);

  const navigate = useNavigate();

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

  const handleAddUserToGroup = () => {
    const email = searchInputRef.current?.value || "";
    const newList = listOfDevs.map((item) => {
      if (item.data.email === email) {
        return { ...item, selected: true };
      }

      return item;
    });

    setListOfDevs(newList);
    searchInputRef.current!.value = "";
  };

  const handleRemoveUserToGroup = (id: number) => {
    const newList = listOfDevs.filter((item) => item.data.id !== id);

    console.log("remove:", newList);
    setListOfDevs(newList);
  };

  const handleOnSubmit = async () => {
    const toastId = toast.loading("Processando...");

    console.log(listOfDevs, selectedTests);

    const formatedData = {
      nome: inputs.title,
      descricao: inputs.description,
      candidatos: [
        ...listOfDevs
          .filter((item) => item.selected === true)
          .map((item) => item.data.id),
      ],
      id_prova_andamento: [
        ...selectedTests
          .filter((item) => item.selected === true)
          .map((item) => item.data.id),
      ],
    };

    console.log("Formatado:", formatedData);

    setIsLaoding(true);

    CompanyService.createGroup(formatedData, user.token).then((res) => {
      if (res.error)
        return toast.update(toastId, {
          render: res.error,
          autoClose: 3000,
          type: "error",
          isLoading: false,
        });

      toast.update(toastId, {
        render: res.message,
        autoClose: 3000,
        type: "success",
        isLoading: false,
      });

      setIsLaoding(false);

      navigate("/company/mygroups");
    });
  };

  useEffect(() => {
    dispatch(getAllOfCompany());
    UserService.getAll(user.token).then((res) => {
      if (!res?.data) return;

      setListOfDevs([
        ...res.data.map((item: TUserContact) => ({
          data: item,
          selected: false,
        })),
      ]);
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
    <Container title="Criar Grupo" backTo="/company/mygroups">
      <>
        {tests?.results ? (
          <>
            {" "}
            <div className={styles.container}>
              <header>
                <h2>Nome do grupo</h2>
                <div className={styles.content}>
                  <Input
                    name="title"
                    value={inputs.title}
                    handleOnChange={(value) =>
                      setInputs({ ...inputs, title: value })
                    }
                  />
                </div>
              </header>
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
                      value={inputs.description}
                      onChange={(e) =>
                        setInputs({ ...inputs, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className={styles.group_team}>
                  <h2>Integrantes</h2>

                  <div className={styles.content}>
                    <div className={styles.search_bar}>
                      <input
                        type="text"
                        className={styles.seila}
                        ref={searchInputRef}
                        list="list"
                      />
                      <datalist id="list">
                        {listOfDevs &&
                          listOfDevs
                            .filter((item) => item.selected === false)
                            .map((item) => (
                              <option
                                key={item.data.id}
                                value={item.data.email}
                                onClick={handleAddUserToGroup}
                              >
                                {item.data.nome}
                              </option>
                            ))}
                      </datalist>

                      <div
                        className={styles.icon}
                        onClick={handleAddUserToGroup}
                      >
                        <AiOutlineUserAdd title="Adicioanr" />
                      </div>
                    </div>
                    <div className={styles.team_container}>
                      {listOfDevs?.filter((item) => item.selected === true)
                        .length > 0 ? (
                        <>
                          {listOfDevs
                            .filter((item) => item.selected === true)
                            .map((item) => (
                              <div
                                className={styles.info_container}
                                key={item.data.id}
                              >
                                <div className={styles.image}>
                                  <img
                                    src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                                    alt=""
                                  />
                                </div>
                                <span className={styles.info}>
                                  {item.data.email}
                                </span>
                                <div
                                  className={styles.icon}
                                  onClick={() =>
                                    handleRemoveUserToGroup(item.data.id)
                                  }
                                >
                                  <IoClose />
                                </div>
                              </div>
                            ))}
                        </>
                      ) : (
                        <p>Nenhum desenvolvedor selecionado.</p>
                      )}
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

              <div className={styles.button_container}>
                <Button
                  text={isLoading ? "Processando..." : "Criar"}
                  color="solid_gray"
                  size="small"
                  handleOnClick={handleOnSubmit}
                  disabled={isLoading}
                />
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

export default CreateGroup;
