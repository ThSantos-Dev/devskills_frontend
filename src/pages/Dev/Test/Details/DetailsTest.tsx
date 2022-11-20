import React, { useState, useEffect } from "react";
import styles from "DetailsTest.module.css";
import Container from "./../../../../components/shared/Layout/Container/Container";
import Button from "../../../../components/shared/Form/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reset, startTest } from "./../../../../slices/common/testSlice";
import { toast } from "react-toastify";

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
      <div>
        <h2>Acesse ai</h2>
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
