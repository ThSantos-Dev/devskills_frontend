import styles from "./MyTests.module.css";

import { useState } from "react";
import Container from "../../../components/shared/Layout/Container/Container";
import ChooseType from "../../Test/ChooseType/ChooseType";

import { useNavigate } from "react-router-dom";
import bookQuestionIcon from "../../../assets/icon/book-question.svg";
import folderIcon from "../../../assets/icon/folder.svg";
import PagenationBar from "../../../components/shared/Layout/Pagination/PagenationBar";

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
        },
      },
      {
        icon: folderIcon,
        label: "Nossas provas",
        handleOnClick: () => {
          navigate("/company/test/templates");
          document.body.style.overflow = "auto";
        },
      },
    ],
  };

  return (
    <Container
      filter={true}
      getFilters={() => {}}
      title="Suas provas"
      button={{
        show: true,
        text: "Aplicar",
        handleOnClick: () => setOpenModal(true),
      }}
      styleTitleContainer={{ maxWidth: "1400px" }}
    >
      <div className={styles.cards_container}>
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <div className={styles.card} key={index}>
            <h2>Prova de Python</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled i
            </p>

            <div className={styles.card_info}>
              <span>Ativa</span>
              <span>Até 20/09</span>
            </div>
          </div>
        ))}
      </div>

      <PagenationBar
        numberOfPages={20}
        numberOfButtons={3}
        page={1}
        redirectTo="/company/home"
      />

      <ChooseType
        show={openModal}
        setShow={setOpenModal}
        content={modalContent}
      />
    </Container>
  );
};

export default MyTests;
