import styles from "./Details.module.css";
import Container from "./../../../components/shared/Layout/Container/Container";

interface Props {}

const Details = (props: Props) => {
  return (
    <Container backTo="/company/test/applicate/1" title="Detalhes da Prova">
      <div className="container">
        <header>
          <h2>Título da prova</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            consectetur ea excepturi ullam vitae dolorem! Mollitia non fugit
            quos perspiciatis vel labore dolorem inventore consequatur, tempore
            perferendis temporibus eligendi iusto.
          </p>
        </header>

        <section className="skills">
            <div className="info_group">
                <h2>Stacks</h2>
                <span>JavaScript, HTM</span>
            </div>
        </section>
      </div>
    </Container>
  );
};

export default Details;
