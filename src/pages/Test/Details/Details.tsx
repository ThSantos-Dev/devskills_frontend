import styles from "./Details.module.css";
import Container from "./../../../components/shared/Layout/Container/Container";

interface Props {}

const Details = (props: Props) => {
  return (
    <Container backTo="/company/test/applicate/1" title="Detalhes da Prova">
      <div className="container"></div>
    </Container>
  );
};

export default Details;
