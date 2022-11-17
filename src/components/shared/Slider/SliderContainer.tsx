// Import - Hooks
import { useState } from "react";

// Import - Styles
import styles from "./SliderContainer.module.css";

// Import - icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Interfaces

// Components

// Props
type Props = {
  totalCards: number;
  widthOfCard: number;
  children: JSX.Element[];
};

const SliderContainer = ({ totalCards, widthOfCard, children }: Props) => {
  // State que armazena as informações de Margin atual
  const [margin, setMargin] = useState(0);

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
    let widthList = totalCards * widthOfCard + totalCards * 80;

    // Verificando se a largura que quero avançar é maior que a da lista
    if (window.innerWidth - widthList > newMargin) {
      newMargin = window.innerWidth - widthList - 60; // -60 por conta do padding dos controles
    }

    setMargin(newMargin);
  };


  return (
    <div className={styles.row}>
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
            width: totalCards * widthOfCard,
            marginLeft: margin,
          }}
        >
          {
            // Validação para verificar se há filmes
            children.length > 0 &&
              children.map((item: any, index) => (
                <div
                  className={styles.item}
                  key={index}
                >
                  {item}
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default SliderContainer;
