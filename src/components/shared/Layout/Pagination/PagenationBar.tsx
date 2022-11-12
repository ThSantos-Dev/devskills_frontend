// Hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Styles
import ButtonPagination from "./ButtonPagination";
import styles from "./PagenationBar.module.css";

// Props
interface Props {
  numberOfButtons?: number;
  numberOfPages: number;
  page?: number;
  redirectTo: string;
  query?: string;
};

const PagenationBar: React.FC<Props> = ({
  numberOfButtons = 9,
  numberOfPages,
  page = 1,
  redirectTo,
  query = "",
}) => {
  // States para controle de página
  const [currentPage, setCurrentPage] = useState<number>(page);

  const [leftButtons, setLeftButtons] = useState<number[]>([]);
  const [rightButtons, setRightButtons] = useState<number[]>([]);

  // Utilizando hook para redirecionamento do usuário
  const navigate = useNavigate();

  // Função responsável por gerar os valores iniciais para os botões
  const renderButtons = (): void => {
    // Validação para verificar se a quantidade de botões informados corresponde ao número de páginas
    if (numberOfButtons > numberOfPages) return;

    // Definindo a quantidade de botões de cada lado do indicador da página atual
    const qtdyButtons = (numberOfButtons - 1) / 2;

    // Transformando o número de páginas em um array
    let arrayPages: number[] = [];

    for (let i = 1; i <= numberOfPages; i++) {
      arrayPages.push(i);
    }
    // ** Buscar melhorias

    // Variáveis de controle
    let leftButtons: number[] = [];
    let rightButtons: number[] = [];

    // Setando valores dos botões caso seja a página 1 ou menor que a quantidade dos botões

    // Se a página atual for maior que a quantidade de botões e menor que o limite de páginas em razão a quantidade de botões
    if (
      currentPage > qtdyButtons &&
      currentPage < arrayPages.length - qtdyButtons
    ) {
      // Botões da esquerda - Descrescente
      for (let i = qtdyButtons + 1; i > 1; i--) {
        leftButtons.push(arrayPages[currentPage - i]);
      }

      // Botões da direita - Crescente
      for (let i = 0; i < qtdyButtons; i++) {
        rightButtons.push(arrayPages[currentPage + i]);
      }
    }

    // Se a página atual for menor que a quantidade de botões
    if (currentPage <= qtdyButtons) {
      // Botões da esquerda - Decrescente
      for (let i = qtdyButtons + 1; i > 1; i--) {
        // Validação para verificar se o indice proposto é válido
        if (currentPage - i <= -1) {
          // Adicionando ao array o resultado da quantidade de páginas menos o i - que nesse caso é negativo mais a página altual, que dá o indice correto
          leftButtons.push(arrayPages[arrayPages.length - i + currentPage]);
        } else {
          leftButtons.push(arrayPages[currentPage - i]);
        }
      }

      // Botões da direita - Crescente
      for (let i = 0; i < qtdyButtons; i++) {
        rightButtons.push(arrayPages[currentPage + i]);
      }
    }

    // Se a página atual for a última página ou próximo a ela
    if (currentPage >= arrayPages.length - qtdyButtons) {
      // Botões da esquerda - Descrescente
      for (let i = qtdyButtons + 1; i > 1; i--) {
        leftButtons.push(arrayPages[currentPage - i]);
      }

      // Botões da direita - Crescente
      let count: number = 0;
      for (let i = 0; i < qtdyButtons; i++) {
        // Validação para verificar se a próxima página é maior que quantidade total de páginas
        if (currentPage + i >= arrayPages.length) {
          rightButtons.push(arrayPages[count]);
          count++;
        } else {
          rightButtons.push(arrayPages[currentPage + i]);
          console.log("teste");
        }
      }
    }

    // Atualizando os states
    setLeftButtons(leftButtons);
    setRightButtons(rightButtons);
  };

  //   Atualizando os botões toda vez em que a página for alterada
  useEffect(() => {
    renderButtons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, numberOfPages, numberOfButtons]);

  // Função responsável por atualizar o valor da lista de botões de acordo com a página atual
  const handlePage = (page: number): void => {
    // Validação para verificar se a página informada é válida
    if (page > numberOfPages) {
      page = 1;
    } else if (page <= 0) {
      page = numberOfPages;
    }

    // Alterando o valor da página atual
    setCurrentPage(page);

    // Redirecionando o usuário para a paginação
    navigate(`${redirectTo}/${page}${query && query}`);
  };

  //  Caso o número de páginas seja 1 não haverá paginação
  if (numberOfPages < 1) return <></>;

  return (
    <div className={styles.bar}>
      <h2>
        Página {currentPage} de {numberOfPages}
      </h2>

      <div id={styles.bar_buttons}>
        <button onClick={() => handlePage(currentPage - 1)}>
          <FiChevronLeft />
        </button>

        <div className={styles.buttons_container}>
          {leftButtons &&
            leftButtons.map((btn) => (
              <ButtonPagination
                page={btn}
                handlePage={handlePage}
                key={`page-${btn}`}
              />
            ))}

          <button disabled className={styles.current_page}>
            {currentPage}
          </button>

          {rightButtons &&
            rightButtons.map((btn) => (
              <ButtonPagination
                page={btn}
                handlePage={handlePage}
                key={`page-${btn}`}
              />
            ))}
        </div>

        <button onClick={() => handlePage(currentPage + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PagenationBar;
