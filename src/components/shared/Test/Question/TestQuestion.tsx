// Styles
import styles from "./TestQuestion.module.css";

// Hooks
import React, { ChangeEvent, useRef, useState } from "react";

// Icons
import { BiImageAdd } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";

// Components
import { useEffect } from "react";
import { TOption } from "../../../../types/devskills/test/TTestRegister";
import SelectCustom from "../../Form/Select/SelectCustom";
import TestAlternative from "../Alternative/TestAlternative";


interface Props {
  setType?: "DISSERTATIVA" | "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
  options?: TOption[];
  indexQuestion: any;
  handleOnDelete(): void;
  addAlternative(index: any): void;
  deleteQuestionAlternative(indexParent: any, indexOpton: any): void;
  handleOnChangeAlternative(
    value: string,
    indexQuestion: any,
    indexAlternative: any
  ): void;
  handleOnSelectAlternativeCorrect(
    value: boolean | null,
    indexQuestion: any,
    indexAlternative: any,
    type?: "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA"
  ): void;
}

const TestQuestion: React.FC<Props> = ({
  setType,
  options,
  indexQuestion,
  handleOnDelete,
  addAlternative,
  deleteQuestionAlternative,
  handleOnChangeAlternative,
  handleOnSelectAlternativeCorrect,
}) => {
  // State para armazenar a imagem caso haja
  const [image, setImage] = useState<any>({ file: null, url: null });

  // State que controla a exibição das opções de imagem
  const [showImageOptions, setShowImageOptions] = useState<boolean>(false);

  const [selected, setSelected] = useState<
    "DISSERTATIVA" | "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA"
  >(setType ? setType : "DISSERTATIVA");

  // Reeferencias aos elementos
  const inputFileEl = useRef<HTMLInputElement>(null);
  const checkboxSwitchEl = useRef<HTMLInputElement>(null);

  // Função que lida com a foto
  const handleOnChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);

    if (!e.target.files) return;

    setImage({ ...image, file: e.target.files[0] });
  };

  useEffect(() => {
    if (setType === "MULTIPLA_ESCOLHA")
      checkboxSwitchEl.current!.checked = true;
  }, [setType]);

  return (
    <div className={styles.question_container}>
      <div className={styles.question_header}>
        <div className={styles.text}>
          <input type="text" placeholder="Pergunta" />
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
              { label: "opções", value: "UNICA_ESCOLHA" },
            ]}
            defaultValue={
              selected !== "DISSERTATIVA"
                ? { label: "opções", value: "UNICA_ESCOLHA" }
                : { label: "dissertativa", value: "DISSERTATIVA" }
            }
            handleOnChange={(value) => setSelected(value.value)}
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
                alt={image.file.name}
                onClick={() => setShowImageOptions(false)}
              />
            </div>
          </>
        )}

        {selected === "DISSERTATIVA" && (
          <p>A resposta será no formato dissertativo...</p>
        )}

        {selected === "UNICA_ESCOLHA" && (
          <>
            {options &&
              options.map((option, indexAlternative) => (
                <TestAlternative
                  key={indexAlternative}
                  type={selected}
                  checked={option.correto}
                  text={option.texto}
                  handleOnChange={(value) =>
                    handleOnChangeAlternative(
                      value,
                      indexQuestion,
                      indexAlternative
                    )
                  }
                  handleOnDelete={() =>
                    deleteQuestionAlternative(indexQuestion, indexAlternative)
                  }
                  handleOnSelect={(selected) =>
                    

                    handleOnSelectAlternativeCorrect(
                      selected,
                      indexQuestion,
                      indexAlternative,
                      "UNICA_ESCOLHA"
                    )
                  }
                />
              ))}

            <div className={styles.new_alternative} onClick={addAlternative}>
              <span className={styles.circle}></span>
              <p>Adicionar alternativa</p>
            </div>
          </>
        )}

        {selected === "MULTIPLA_ESCOLHA" && (
          <>
            {options &&
              options.map((option, indexAlternative) => (
                <TestAlternative
                  key={indexAlternative}
                  type={selected}
                  checked={option.correto}
                  text={option.texto}
                  handleOnChange={(value) =>
                    handleOnChangeAlternative(
                      value,
                      indexQuestion,
                      indexAlternative
                    )
                  }
                  handleOnSelect={(selected) =>
                    handleOnSelectAlternativeCorrect(
                      selected,
                      indexQuestion,
                      indexAlternative,
                      "MULTIPLA_ESCOLHA"
                    )
                  }
                  handleOnDelete={() =>
                    deleteQuestionAlternative(indexQuestion, indexAlternative)
                  }
                />
              ))}

            <div className={styles.new_alternative} onClick={addAlternative}>
              <span className={styles.multiples}></span>
              <p>Adicionar alternativa</p>
            </div>
          </>
        )}
      </div>

      <div className={styles.question_footer}>
        <div className={styles.icon} onClick={handleOnDelete}>
          <BsFillTrashFill />
        </div>

        {selected !== "DISSERTATIVA" && (
          <div className={styles.switch_container}>
            <span>Várias opções</span>

            <div className={styles.switch}>
              <input type="checkbox" ref={checkboxSwitchEl} />
              <label
                onClick={() => {
                  checkboxSwitchEl.current!.checked =
                    !checkboxSwitchEl.current!.checked;

                  setSelected(
                    checkboxSwitchEl.current!.checked
                      ? "MULTIPLA_ESCOLHA"
                      : "UNICA_ESCOLHA"
                  );
                }}
              >
                Toggle
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestQuestion;
