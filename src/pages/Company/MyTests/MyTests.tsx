import { useState } from "react";
import Container from "../../../components/shared/Layout/Container/Container";
import ChooseType from "../../Test/ChooseType/ChooseType";
import Button from "./../../../components/shared/Form/Button/Button";

import bookQuestionIcon from "../../../assets/icon/book-question.svg";
import folderIcon from "../../../assets/icon/folder.svg";
import { useNavigate } from 'react-router-dom';

interface Props {}

const MyTests = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  
  const navigate = useNavigate()

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
    <Container filter={false}>
      <Button
        color="solid_white"
        size="medium"
        text="Criar prova"
        handleOnClick={() => setOpenModal(true)}
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
