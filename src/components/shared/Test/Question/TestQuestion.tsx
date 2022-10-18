// Styles
import styles from "./TestQuestion.module.css";

// Hooks
import React, { ChangeEvent, useRef, useState } from "react";

// Icons
import { BiImageAdd } from "react-icons/bi";
import { BsCircle, BsFillTrashFill } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";

// Components
import SelectCustom from "../../Form/Select/SelectCustom";
import TestAlternative from "../Alternative/TestAlternative";

interface Props {
  type: "DISSERTATIVA" | "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
}

const TestQuestion: React.FC<Props> = ({ type }) => {
  // State para armazenar a imagem caso haja
  const [image, setImage] = useState<any>({ file: null, url: null });

  // State que controla a exibição das opções de imagem
  const [showImageOptions, setShowImageOptions] = useState<boolean>(false);

  // Reeferencia a input de imagem
  const inputFileEl = useRef<HTMLInputElement>(null);

  // Função que lida com a foto
  const handleOnChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);

    if (!e.target.files) return;

    setImage({ ...image, file: e.target.files[0] });
  };

  return (
    <div className={styles.question_container}>
      <div className={styles.question_header}>
        <div className={styles.text}>
          <input type="text" value="Pergunta" />
        </div>

        <div className={styles.icon}>
          <label>
            <input
              type="file"
              ref={inputFileEl}
              accept=".jpg, .jpeg, .png"
              onChange={handleOnChangeImage}
            />
            <BiImageAdd />
          </label>
        </div>

        <div className="select_container">
          <SelectCustom
            placeholder="Selecione"
            name="type_question"
            options={[
              { label: "dissertativa", value: "DISSERTATIVA" },
              { label: "opcoes", value: "UNICA_ESCOLHA" },
            ]}
            handleOnChange={(value) => console.log(value)}
          />
        </div>
      </div>

      <div className={styles.question_body}>
        {image.file && (
          <>
            <div className={styles.image_container}>
              <span className={styles.icon}>
                <IoMdMore onClick={() => setShowImageOptions(true)} />
              </span>

              {showImageOptions && (
                <div className={styles.image_options}>
                  <div
                    className={styles.image_option}
                    onClick={() => {
                      inputFileEl.current?.click();
                      setShowImageOptions(false);
                    }}
                  >
                    <BiImageAdd /> <span>Alterar</span>
                  </div>

                  <div
                    className={styles.image_option}
                    onClick={() => {
                      inputFileEl.current!.value = "";
                      setImage({ file: "", url: null });
                      setShowImageOptions(false);
                    }}
                  >
                    <BsFillTrashFill size="1.7rem" /> <span>Remover</span>
                  </div>
                </div>
              )}

              <img
                src={URL.createObjectURL(image.file)}
                onClick={() => setShowImageOptions(false)}
              />
            </div>
          </>
        )}

        {type === "DISSERTATIVA" && (
          <p>A resposta será no formato dissertativo...</p>
        )}

        {type === "UNICA_ESCOLHA" && (
          <>
            {[1, 2, 3].map((x: any) => (
              <TestAlternative type={type} />
            ))}
          </>
        )}

        {type === "MULTIPLA_ESCOLHA" && (
          <>
            {[1, 2, 3, 4].map((x: any) => (
              <TestAlternative type={type} />
            ))}
          </>
        )}
      </div>

      <div className={styles.outhers_container}>
        <div className={styles.icon}>
          <BsCircle  />
        </div>

        <div className={styles.options}>
          <p>
            <span>Adicionar opção</span> ou <span>adicionar "Outro"</span>
          </p>
        </div>
      </div>

      <div className={styles.question_footer}>
        <div className={styles.icon}>
          <BsFillTrashFill />
        </div>

        {type !== "DISSERTATIVA" && (
          <div className={styles.switch_container}>
            <span>Várias opções</span>

            <div className={styles.switch}>
              <input type="checkbox" id="switch" />
              <label htmlFor="switch">Toggle</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestQuestion;
