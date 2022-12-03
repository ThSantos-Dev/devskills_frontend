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
import sql from "../../assets/img/sql.svg"
import ts from "../../assets/img/ts.svg"
import peoples from "../../assets/img/peoples.svg"
import peopleonmirror from "../../assets/img/peopleonmirror.svg"
import peopleconclusion from "../../assets/img/conclusionpeople.svg"
import ig from "../../assets/img/ig.svg"
import zao from "../../assets/img/zao.svg"
import linkedin from "../../assets/img/linkedin.svg"

interface Props { }

const Home = (props: Props) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="#dev" className={styles.navtxt}>Sou desenvolvedor</a>
        <a href="#empresa" className={styles.navtxt}>Sou empresa</a>
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
              <div className={styles.desContainer}>
                <span className={styles.des}>
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
        <section id="dev" className={styles.secondSection}>
          <span className={styles.secondSectionTitle}>Hoje, nossa plataforma avalia as seguintes habilidades:</span>
          <div className={styles.skillsContainer}>
            <div className={styles.skillCard}>
              <img src={java} />
              <span className={styles.skillText}>Java</span>
            </div>
            <div className={styles.skillCard}>
              <img src={js} />
              <span className={styles.skillText}>JavaScript</span>
            </div>
            <div className={styles.skillCard}>
              <img src={php} />
              <span className={styles.skillText}>PHP</span>
            </div>
            <div className={styles.skillCard}>
              <img src={python} />
              <span className={styles.skillText}>Python</span>
            </div>
            <div className={styles.skillCard}>
              <img src={c} />
              <span className={styles.skillText}>C</span>
            </div>
            <div className={styles.skillCard}>
              <img src={sql} />
              <span className={styles.skillText}>SQL</span>
            </div>
            <div className={styles.skillCard}>
              <img src={cplus} />
              <span className={styles.skillText}>C#</span>
            </div>
            <div className={styles.skillCard}>
              <img src={cplus} />
              <span className={styles.skillText}>C++</span>
            </div>
            <div className={styles.skillCard}>
              <img src={htmlcss} />
              <span className={styles.skillText}>HTML/CSS</span>
            </div>
            <div className={styles.skillCard}>
              <img src={ts} />
              <span className={styles.skillText}>TypeScript</span>
            </div>
            <div className={styles.skillCard}>
              <img src={node} />
              <span className={styles.skillText}>Node</span>
            </div>
            <div className={styles.skillCard}>
              <img src={react} />
              <span className={styles.skillText}>React native</span>
            </div>
            <div className={styles.skillCard}>
              <img src={react} />
              <span className={styles.skillText}>ReactJS</span>
            </div>
            <div className={styles.skillCard}>
              <img src={kotlin} />
              <span className={styles.skillText}>Kotlin</span>
            </div>
            <div className={styles.skillCard}>
              <img src={mongo} />
              <span className={styles.skillText}>MongoDB</span>
            </div>
          </div>
          <span className={styles.secondSectionTitle}>... E muitas outras!!</span>
          <div className={styles.imageSecondSectionContainer}>
            <img className={styles.peoplesImage} src={peoples} />
          </div>
        </section>
        <section id="empresa" className={styles.thirdSection}>
          <span className={styles.thirdSectionTitle}>O processo seletivo na nossa plataforma</span>
          <div className={styles.thirdSectionCardsContainer}>
            <div className={styles.thirdSectionCard}>
              <span className={styles.thirCardTitle}>
                Tradicional
              </span>
              <span className={styles.thirCardDescription}>
                Você entrega seu currículo, espera algumas semanas e então passa ou não para o processo seletivo. Caso não, o ciclo se repete.
              </span>
              <img className={styles.peoplethird} src={peopleconclusion} />
            </div>
            <div className={styles.thirdSectionCard}>
              <span className={styles.thirCardTitle}>
                DevSkills
              </span>
              <span className={styles.thirCardDescription}>
                Você preenche seus dados e recebe recomendações de desafios/vagas baseados(as) em seus interesses.
              </span>
              <img className={styles.peoplethird} src={peopleonmirror} />
            </div>
          </div>
        </section>
        <section className={styles.quarterSection}>
          <div className={styles.descriptionQuarterContainer}>
            <span className={styles.descriptionQuarterText}>
              Oferemos para você empresa a oportunidade de aplicar provas, e filtrando os desenvolvedores que se aplicam de acordo com suas necessidades, cadastre-se e recrute agora mesmo!
            </span>
          </div>
          <div className={styles.plansContainer}>
            <div className={styles.plan}>
              <span className={styles.plantitle}>
                Plano 1
              </span>
              <div className={styles.planDescriptionContainer}>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.planButton}>
                  <span className={styles.registertxt}>Cadastre-se</span>
                </div>
              </div>
            </div>
            <div className={styles.plan}>
              <span className={styles.plantitle}>
                Plano 2
              </span>
              <div className={styles.planDescriptionContainer}>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.planButton}>
                  <span className={styles.registertxt}>Cadastre-se</span>
                </div>
              </div>
            </div>
            <div className={styles.plan}>
              <span className={styles.plantitle}>
                Plano 3
              </span>
              <div className={styles.planDescriptionContainer}>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionItemContainer}>
                    <div className={styles.descriptionitem}></div>
                  </div>
                  <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                </div>
                <div className={styles.planButton}>
                  <span className={styles.registertxt}>Cadastre-se</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerItem}>
          <span className={styles.footerItemTitle}>
            Contatos
          </span>
          <span className={styles.sac}>SAC</span>
          <span className={styles.sac}>SAC</span>
          <span className={styles.sac}>SAC</span>
        </div>
        <div className={styles.footerItem}>
          <span className={styles.footerItemTitle}>
            DevSkills
          </span>
          <span className={styles.sac}>Rua do sabugo 6337,
            jardim dos carazes - SP
            09957-643</span>
          <span className={styles.sac}>55 11 999999999</span>
        </div>
         <div className={styles.footerItem}>
          <span className={styles.footerItemTitle}>
              <nav>Nossas redes</nav>
          </span>
          <div className={styles.socialContainer}>
            <img src={ig}/>
            <span className={styles.sac}>instagram</span>
          </div>
          <div className={styles.socialContainer}>
            <img src={zao}/>
            <span className={styles.sac}>Whatsapp</span>
          </div>
          <div className={styles.socialContainer}>
            <img src={linkedin}/>
            <span className={styles.sac}>Linkedin</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
