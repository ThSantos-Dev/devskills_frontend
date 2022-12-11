import React, { useState, useEffect } from "react";
import styles from "./DetailsTest.module.css";
import Container from "./../../../../components/shared/Layout/Container/Container";
import Button from "../../../../components/shared/Form/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reset, startTest } from "./../../../../slices/common/testSlice";
import { toast } from "react-toastify";
import { BsFillPersonFill } from "react-icons/bs";

interface Props {}

const DetailsTest = (props: Props) => {
  const { id } = useParams();

  const [idToast, setIdToast] = useState<any>();

  const { test, loading, success, error } = useSelector(
    (state: any) => state.test
  );
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleStartTest = () => {
    dispatch(startTest(parseInt(id!)));
  };

  useEffect(() => {
    if (loading && !idToast) setIdToast(toast.loading("Processando..."));

    if (success) {
      toast.update(idToast, {
        render: success.message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      dispatch(reset());

      setTimeout(
        () => navigate(`/dev/test/realize/${id}?idUserTest=${success.data.id}`),
        4000
      );
    }

    if (error) {
      toast.update(idToast, {
        render: error,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error, loading]);

  return (
    <Container filter={false} backTo="/dev/home" title="Detalhes da Prova">
      <div className={styles.container}>
        <div className={styles.infosContainer}>
        <h2>Título da prova</h2>
        <div className={styles.companyProfile}>
          <div>
            <img src="" alt="" />
          </div>
          <span>Nome da empresa</span>
          <button>Ver perfil</button>
        </div>

        <div className={styles.candidatesContainer}>
          <BsFillPersonFill/>
          <span>500 candidatos</span>
        </div>

        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</span>
        
        </div>

        <div className={styles.line}/>

        <div className={styles.detailsContainer}>

        <div>
          
          <div>
            <p>Tipo:</p>
            <span>Teórica.</span>
          </div>

          <div>
            <p>Habilidades:</p>
            <span>JavaScript, JQuery, ReactJS.</span>
          </div>

          <div>
            <p>Stacks</p>
            <span>Front-end.</span>
          </div>

        </div>

        <div>

          <div>
            <p>Realizar até:</p>
            <span>20/02/2022</span>
          </div>

          <div>
            <p>Duração:</p>
            <span>00:30:00</span>
          </div>

        </div>

        </div>

        <Button
          color="solid_white"
          size="small"
          text="Realizar"
          handleOnClick={handleStartTest}
        />
      </div>
    </Container>
  );
};

export default DetailsTest;
