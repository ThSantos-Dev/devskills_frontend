import TestDevSkillsCard from "./../../components/shared/Card/Test/DevSkills/TestDevSkillsCard";
import styles from "./Home.module.css";
import people from "../../assets/img/people.svg"
import c from "../../assets/img/emojione_letter-c.svg"
import htmlcss from "../../assets/img/html.svg"
import cplus from "../../assets/img/logos_c-plusplus.svg"
import java from "../../assets/img/logos_java.svg"
import js from "../../assets/img/logos_javascript.svg"
import kotlin from "../../assets/img/kotlin.svg"
import mongo from "../../assets/img/mongo.svg"
import node from "../../assets/img/node.svg"
import php from "../../assets/img/php.svg"
import python from "../../assets/img/python.svg"
import react from "../../assets/img/react.svg"
import sql from  "../../assets/img/sql.svg"
import ts from "../../assets/img/ts.svg"

interface Props { }

const Home = (props: Props) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <span className={styles.navtxt}>Sou desenvolvedor</span>
        <span className={styles.navtxt}>Sou empresa</span>
        <div className={styles.loginOption}>
          <span className={styles.navtxt}>cadastro/login</span>
        </div>
      </nav>
      <main className={styles.main}>
        <section className={styles.firstSection}>
          <article className={styles.firstSectionArticle}>
            <div className={styles.firstSectionTitleContainer}>
              <span className={styles.firstSectionTitle}>Teste suas</span>
              <span className={styles.firstSectionTitle}>habilidades e prove </span>
              <span className={styles.firstSectionTitle}>sua <span className={styles.firstSectionTitleDecored}>capacidade. </span></span>
              <div className={styles.descriptionContainer}>
                <span className={styles.description}>
                  A DevSkills é a plataforma ideal para praticar suas skills e exibi-las para empresas em busca de talentos!
                </span>
                <div className={styles.registerbutton}>
                  <span className={styles.registerText}>Cadastre-se</span>
                </div>
              </div>
            </div>
          </article>
          <div className={styles.imageContainer}>
            <img className={styles.peopleImage} src={people} />
          </div>
        </section>
        <section className={styles.secondSection}>
          <span className={styles.secondSectionTitle}>Hoje, nossa plataforma avalia as seguintes habilidades:</span>
          <div className={styles.skillsContainer}>
            <div className={styles.skillCard}>
              <img src={java}/>
              <span className={styles.skillText}>Java</span>
            </div>
            <div className={styles.skillCard}>
              <img src={js}/>
              <span className={styles.skillText}>JavaScript</span>
            </div>
            <div className={styles.skillCard}>
              <img src={php}/>
              <span className={styles.skillText}>PHP</span>
            </div>
            <div className={styles.skillCard}>
              <img src={python}/>
              <span className={styles.skillText}>Python</span>
            </div>
            <div className={styles.skillCard}>
              <img src={c}/>
              <span className={styles.skillText}>C</span>
            </div>
            <div className={styles.skillCard}>
              <img src={sql}/>
              <span className={styles.skillText}>SQL</span>
            </div>
            <div className={styles.skillCard}>
              <img src={cplus}/>
              <span className={styles.skillText}>C#</span>
            </div>
            <div className={styles.skillCard}>
              <img src={cplus}/>
              <span className={styles.skillText}>C++</span>
            </div>
            <div className={styles.skillCard}>
              <img src={htmlcss}/>
              <span className={styles.skillText}>HTML/CSS</span>
            </div>
            <div className={styles.skillCard}>
              <img src={ts}/>
              <span className={styles.skillText}>TypeScript</span>
            </div>
            <div className={styles.skillCard}>
              <img src={node}/>
              <span className={styles.skillText}>Node</span>
            </div>
            <div className={styles.skillCard}>
              <img src={react}/>
              <span className={styles.skillText}>React native</span>
            </div>
            <div className={styles.skillCard}>
              <img src={react}/>
              <span className={styles.skillText}>ReactJS</span>
            </div>
            <div className={styles.skillCard}>
              <img src={kotlin}/>
              <span className={styles.skillText}>Kotlin</span>
            </div>
            <div className={styles.skillCard}>
              <img src={mongo}/>
              <span className={styles.skillText}>MongoDB</span>
            </div>
          </div>
          <span className={styles.secondSectionTitle}>... E muitas outras!!</span>
        </section>
      </main>

    </div>
  );
};

export default Home;
