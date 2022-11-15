// Import - Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import - Styles
import styles from "./MovieRow.module.css";

// Import - icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Interfaces

// Components

// Props
type Props = {
  title: string;
  items: any[];
};

const MovieRow = ({ title, items }: Props) => {
  // State que armazena as informações de Margin atual
  const [margin, setMargin] = useState(0);

  // Utilizando hook para redirecionar o usuário
  const navigate = useNavigate();

  // Função que lida com o clique do botão esquerdo - Voltar/Anterior
  const handleLeftArrow = () => {
    // Calculando a nova margin
    let newMargin = margin + Math.round(window.innerWidth / 2);

    // Verificando se a margin é maior que 0, se já está na posição inical
    if (newMargin > 0) newMargin = 0;

    setMargin(newMargin);
  };

  // Função que lida com o clique do botão direito - Avançar/Próximo
  const handleRightArrow = () => {
    // Calculando a nova margin
    let newMargin = margin - Math.round(window.innerWidth / 2);

    // Largura da lista
    let widthList = items.results!.length * 150;

    // Verificando se a largura que quero avançar é maior que a da lista
    if (window.innerWidth - widthList > newMargin) {
      newMargin = window.innerWidth - widthList - 60; // -60 por conta do padding dos controles
    }

    setMargin(newMargin);
  };

  // Função que lida com o clique no item
  const handleClickItem = (id: number) => {
    // Redirecionando o usuário para a página de maiores detalhes do filme
    navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>

      {/* Controles */}
      <div className={styles.left} onClick={handleLeftArrow}>
        <FiChevronLeft />
      </div>

      <div className={styles.right} onClick={handleRightArrow}>
        <FiChevronRight />
      </div>

      <div className={styles.list_area}>
        <div
          className={styles.list}
          style={{
            width: items.results!.length * 150,
            marginLeft: margin,
          }}
        >
          {
            // Validação para verificar se há filmes
            items.results &&
              items.results.map((item: any) => (
                <div
                  className={styles.item}
                  onClick={() => handleClickItem(item.id!)}
                  key={item.id}
                >
                  <MovieCard
                    movie={item}
                    key={item.id}
                    showLink={false}
                    slider={true}
                  />
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
