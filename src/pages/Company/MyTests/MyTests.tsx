import styles from "./MyTests.module.css";

import { useEffect, useState } from "react";
import Container from "../../../components/shared/Layout/Container/Container";
import ChooseType from "../../Test/ChooseType/ChooseType";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bookQuestionIcon from "../../../assets/icon/book-question.svg";
import folderIcon from "../../../assets/icon/folder.svg";
import PagenationBar from "../../../components/shared/Layout/Pagination/PagenationBar";
import { TSkillsData } from "../../Dev/Register/Skills/Skills";
import {
  filterTestOfCompany,
  getAllOfCompany,
} from "./../../../slices/common/testSlice";
import { TTestOfCompany } from "./../../../types/devskills/test/TTestOfCompany";
import { reset } from "../../../slices/common/testSlice";

interface Props {}

const MyTests = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const modalContent = {
    title: "Aplicação de prova",
    description:
      "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, ",
    options: [
      {
        icon: bookQuestionIcon,
        label: "Prova personalizada",
        handleOnClick: () => {
          navigate("/company/test/create");
          document.body.style.overflow = "auto";

          dispatch(reset());
        },
      },
      {
        icon: folderIcon,
        label: "Nossas provas",
        handleOnClick: () => {
          navigate("/company/test/templates");
          document.body.style.overflow = "auto";

          dispatch(reset());
        },
      },
    ],
  };

  const [page, setPage] = useState<number>(1);
  const { tests, loading } = useSelector<
    any,
    { tests: TTestOfCompany[]; loading: boolean }
  >((state: any) => state.test);

  const dispatch = useDispatch<any>();

  const [filtersData, setFiltersData] = useState<TSkillsData>({
    skills: [],
    stacks: [],
  });

  const [typeOfTest, setTypeOfTest] = useState<"PRATICA" | "TEORICA">(
    "TEORICA"
  );

  useEffect(() => {
    dispatch(getAllOfCompany());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(filterTestOfCompany({ ...filtersData, type: typeOfTest, page }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersData, typeOfTest]);

  return (
    <Container
      filter={true}
      getFilters={(ids, type) => {
        if (ids) setFiltersData(ids);

        if (type) setTypeOfTest(type);
      }}
      title="Suas provas"
      button={{
        show: true,
        text: "Aplicar",
        handleOnClick: () => setOpenModal(true),
      }}
      styleTitleContainer={{ maxWidth: "1400px" }}
    >
      <div className={styles.cards_container}>
        {tests.length > 0 &&
          tests.map((test, index) => (
            <div className={styles.card} key={index}>
              <h2>{test.prova.titulo}</h2>
              <p>{test.prova.descricao}</p>

              <div className={styles.card_info}>
                <span>{test.prova.ativo ? "Ativa" : "Inativa"}</span>
                <span>
                  Até {new Date(test.data_fim).toLocaleDateString("pt-BR")}
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* <PagenationBar
        numberOfPages={20}
        numberOfButtons={3}
        page={1}
        redirectTo="/company/home"
      /> */}

      <ChooseType
        show={openModal}
        setShow={setOpenModal}
        content={modalContent}
      />
    </Container>
  );
};

export default MyTests;
