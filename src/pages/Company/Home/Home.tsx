import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../components/shared/Layout/Container/Container";
import { getAllOfCompany } from "../../../slices/common/testSlice";
import { TTestOfCompany } from "../../../types/devskills/test/TTestOfCompany";
import CardMyTest from "./../../../components/company/Card/CardMyTest";
import SelectCustom from "./../../../components/shared/Form/Select/SelectCustom";

interface Props {}

const Home = (props: Props) => {
  const { tests, loading } = useSelector<
    any,
    { tests: TTestOfCompany; loading: boolean }
  >((state: any) => state.test);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllOfCompany());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container title="Criar Grupo" backTo="/company/mygroups">
      <>
        {tests?.results?.length > 0 ? (
          <>
            {" "}
            <div className="container">
              <div className="group_config">
                <div className="group_description">
                  <h2>Descrição</h2>

                  <div className="description">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={10}
                      placeholder="Insira sua descrição..."
                    ></textarea>
                  </div>
                </div>
                <div className="group_team">
                  <h2>Integrantes</h2>

                  <div className="content">
                    <div className="search_bar">
                      <input type="text" className="" />

                      <div className="icon">
                        <RiSearch2Line />
                      </div>
                    </div>
                    <div className="team_container">
                      <div className="info_container">
                        <div className="image">
                          <img
                            src="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <span>thales@email.com</span>
                          <div className="icon">
                            <IoClose />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="test_relation_container">
                <div className="select_container">
                  <SelectCustom
                    handleOnChange={() => {}}
                    name="allTests"
                    placeholder="Selecione"
                    options={tests.results.map((test) => {
                      return {
                        label: test.prova.titulo,
                        value: test.prova.id.toString(),
                      };
                    })}
                  />
                </div>
                <div className="tests_container">
                  {tests.results.map((test) => (
                    <CardMyTest test={test} />
                  ))}
                </div>
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

export default Home;
