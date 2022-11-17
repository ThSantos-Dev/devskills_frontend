import { BiChevronRight } from "react-icons/bi";
import CardCompany from "../../../components/developer/Card/Company/CardCompany";
import CardCompetency from "../../../components/developer/Card/Competency/CardCompetency";
import CardSearchTest from "../../../components/developer/Card/SearchTest/CardSearchTest";
import Container from "../../../components/shared/Layout/Container/Container";
import SliderContainer from "./../../../components/shared/Slider/SliderContainer";
import styles from "./Search.module.css";

interface Props {}

const Search = (props: Props) => {
  return (
    <Container filter={false} title="Resultados da pesquisa" backTo="/dev/home">
      <div className={styles.result_container}>
        <div className={styles.header}>
          <h2>Empresas que usam "Front-end"</h2>

          <span>
            Veja mais <BiChevronRight />
          </span>
        </div>

        <div className={styles.cards_container}>
          <SliderContainer totalCards={5} widthOfCard={450}>
            <CardCompany
              name="senai JADNIRA"
              img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
              place="Jandira, SP"
              handleOnClick={() => {}}
            />
            <CardCompany
              name="senai Barueri"
              img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
              place="Jandira, SP"
              handleOnClick={() => {}}
            />
            <CardCompany
              name="senai Barueri"
              img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
              place="Jandira, SP"
              handleOnClick={() => {}}
            />
            <CardCompany
              name="senai Barueri"
              img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
              place="Jandira, SP"
              handleOnClick={() => {}}
            />
            <CardCompany
              name="senai Barueri"
              img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
              place="Jandira, SP"
              handleOnClick={() => {}}
            />
          </SliderContainer>
        </div>
      </div>

      <div className={styles.result_container}>
        <div className={styles.header}>
          <h2>Testes sobre "Front-end"</h2>

          <span>
            Veja mais <BiChevronRight />
          </span>
        </div>

        <SliderContainer totalCards={4} widthOfCard={250}>
          <CardCompetency
            title="JavaScript - Iniciante"
            img_url="https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
                            metus tincidunt felis egestas consequat. Sed ultrices ut magna nec
                            metus tincidunt felis egestas consequat. Sed ultrices ut magna nec"
            handleOnClick={() => {}}
          />
          <CardCompetency
            title="JavaScript - Iniciante"
            img_url="https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
                            metus tincidunt felis egestas consequat. Sed ultrices ut magna nec
                            metus tincidunt felis egestas consequat. Sed ultrices ut magna nec"
            handleOnClick={() => {}}
          />
          <CardCompetency
            title="JavaScript - Iniciante"
            img_url="https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
                            metus tincidunt felis egestas consequat. Sed ultrices ut magna nec
                            metus tincidunt felis egestas consequat. Sed ultrices ut magna nec"
            handleOnClick={() => {}}
          />
          <CardCompetency
            title="JavaScript - Iniciante"
            img_url="https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
                            metus tincidunt felis egestas consequat. Sed ultrices ut magna nec
                            metus tincidunt felis egestas consequat. Sed ultrices ut magna nec"
            handleOnClick={() => {}}
          />
        </SliderContainer>
      </div>

      <div className={styles.result_container}>
        <div className={styles.header}>
          <h2>Provas sobre "Front-end"</h2>

          <span>
            Veja mais <BiChevronRight />
          </span>
        </div>

        <SliderContainer totalCards={12} widthOfCard={450}>
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
          <CardSearchTest
            title="Prova de PHP"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          feugiat urna. Maecenas eget elementum urna, quis gravida felisfeugiat
          urnafeugiat urna..."
            img_url="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-SENAI-SP.png"
            stack="Front-end"
            type="Prática"
            icons={[
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
              "https://firebasestorage.googleapis.com/v0/b/dev-skills-frontend.appspot.com/o/icons%2Fjavascript.svg?alt=media&token=b8859af0-410a-49b8-8bd8-4d41585900e4",
            ]}
          />
        </SliderContainer>
      </div>
    </Container>
  );
};

export default Search;
