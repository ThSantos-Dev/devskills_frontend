import React, { useState, useEffect } from "react";
import styles from "./DetailsTest.module.css";
import Container from "./../../../../components/shared/Layout/Container/Container";
import Button from "../../../../components/shared/Form/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reset, startTest } from "./../../../../slices/common/testSlice";
import { toast } from "react-toastify";
import { BsFillPersonFill } from "react-icons/bs";
import UserService from "../../../../services/apiDevSkills/dev/userService";
import { TTestInfo, TCompanyInfo, TSkill, TStack, TTestSkill, TTestStack } from "../../../../types/devskills/test/TTestDetails";

interface Props {}

const DetailsTest = (props: Props) => {
  const { id } = useParams();

  const [idToast, setIdToast] = useState<any>();

  const { test, loading, success, error } = useSelector(
    (state: any) => state.test
  );
  const dispatch = useDispatch<any>();
  const { user } = useSelector((state: any) => state.auth);
  const [testData, setTestData] = useState<TTestInfo>();
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

  useEffect(()=>{
    if(!id) return;
    searchTestData();
  }, [])

  const searchTestData = () => {

    if(!id) return;

    UserService.getTestDetails(user.token, parseInt(id)).then((res) =>{
      
      console.log(res)
      if(res.error) return toast.error(res.error)

      console.log(res.data)

      setTestData(res.data)
    
    })

  }

  return (
    <Container filter={false} backTo="/dev/home" title="Detalhes da Prova">
      {testData ? (
        <div className={styles.container}>
        <div className={styles.infosContainer}>
        <h2>{testData?.titulo}</h2>
        <div className={styles.companyProfile}>
          <div>
            <img src={testData.empresa.logo} alt={testData.empresa.nome}/>
          </div>
          <span>{testData.empresa.nome}</span>
          <button>Ver perfil</button>
        </div>

        <div className={styles.candidatesContainer}>
          <BsFillPersonFill/>
          <span>500 candidatos</span>
        </div>

        <span>{testData.descricao}</span>
        
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
      ) : (
          <p>Carregando...</p>
        )}
    </Container>
  );
};

export default DetailsTest;
