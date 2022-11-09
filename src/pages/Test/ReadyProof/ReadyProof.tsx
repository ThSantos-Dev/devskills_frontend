import TestDevSkillsCard from "../../../components/shared/Card/Test/DevSkills/TestDevSkillsCard";
import Container from "./../../../components/shared/Layout/Container/Container";
import styles from "./ReadyProof.module.css";

interface Props {}

const ReadyProof = (props: Props) => {
  const data = [
    {
      title: "Prova de JavaScript",
      description:
        "Lorem inps madmakm akn kankndakn daknanaklnakna lkjnnkj nadan andjlknaldnalndadajnajdn dwidw",
      stack: "Front-end",
      icons: [
        {
          name: "JS",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          name: "JS",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          name: "JS",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          name: "JS",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          name: "JS",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          name: "JS",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
        },
      ],
    },
  ];

  return (
    <Container filter={true}>
      <div className={styles.container}>
        <h1>Nossas provas</h1>

        <main>
          <div className={styles.cards_container}>
            {data.map((card, index) => (
              <TestDevSkillsCard
                key={index}
                description={card.description}
                title={card.title}
                icons={card.icons}
                stack={card.stack}
              />
            ))}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default ReadyProof;
