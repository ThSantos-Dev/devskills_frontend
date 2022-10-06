import React from "react";

// Styles
import styles from "./RetrievePassword.module.css";

// Ilustrações
import ilustration from "../../assets/img/dev-ilustration.svg";

// Components
import AuthContainer from "../../components/shared/Auth/AuthContainer";
import AuthHeader from "../../components/shared/Auth/AuthHeader";
import FormRetrievePassword from "./Form/FormRetrievePassword";

type Props = {};

const RetrievePassword: React.FC<Props> = () => {
  const name = "sansumg";

  const handleOnSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <AuthContainer
      ilustration={{ src: ilustration, alt: "Ilustração" }}
      position="center"
    >
      <div className={styles.container}>
        <AuthHeader title="Redefinir" subtitle="Redefina sua senha">
          <p>
            Olá <b>{name}</b>, redefina a sua senha nos campos abaixos. Guarde-a
            bem dessa vez!
          </p>
        </AuthHeader>

        <FormRetrievePassword handleOnSubmit={handleOnSubmit} />
      </div>
    </AuthContainer>
  );
};

export default RetrievePassword;
