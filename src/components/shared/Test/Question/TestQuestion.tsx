// Styles
import styles from "./TestQuestion.module.css";

// Hooks
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

// Icons
import { BiImageAdd } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";

// Components
import SelectCustom from "../../Form/Select/SelectCustom";
import TestAlternative from "../Alternative/TestAlternative";

interface Props {
  questionRefElDiv?: any;
  setType?: "DISSERTATIVA" | "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA";
  options?: TOptionData[];
  indexQuestion: any;
  error?: boolean;
  errorMessage?: string | null;
  initialData?: {
    enunciado: string;
    image?: { url?: string; file?: File | null };
  };
  handleOnChange(data: {
    enunciado: string;
    image?: { file: File | null; url: string };

    tipo: "DISSERTATIVA" | "MULTIPLA_ESCOLHA" | "UNICA_ESCOLHA";
  }): void;
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

export type TQuestionData = {
  enunciado: string;
  image?: { file: File | null; url: string };

  tipo: "DISSERTATIVA" | "MULTIPLA_ESCOLHA" | "UNICA_ESCOLHA";
  alternativas?: TOptionData[];
};

export type TOptionData = {
  texto: string;
  correta: boolean | null;
};

const TestQuestion: React.FC<Props> = ({
  questionRefElDiv,
  setType,
  options,
  initialData,
  indexQuestion,
  error = false,
  errorMessage = "Este campo é de preenchimento obrigatório!",
  handleOnChange,
  handleOnDelete,
  addAlternative,
  deleteQuestionAlternative,
  handleOnChangeAlternative,
  handleOnSelectAlternativeCorrect,
}) => {
  // State que controla a exibição das opções de imagem
  const [showImageOptions, setShowImageOptions] = useState<boolean>(false);

  const [selected, setSelected] = useState<
    "DISSERTATIVA" | "UNICA_ESCOLHA" | "MULTIPLA_ESCOLHA"
  >(setType ? setType : "DISSERTATIVA");

  // Reeferencias aos elementos
  const inputFileEl = useRef<HTMLInputElement>(null);
  const inputTitleEl = useRef<HTMLInputElement>(null);
  const checkboxSwitchEl = useRef<HTMLInputElement>(null);

  // Função que lida com a foto
  const handleOnChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);

    if (!e.target.files) return;

    handleOnChange({
      enunciado: initialData?.enunciado ? initialData.enunciado : "",
      image: {
        file: e.target.files[0],
        url: initialData?.image?.url ? initialData?.image?.url : "",
      },
      tipo: selected,
    });
  };

  useEffect(() => {
    if (setType === "MULTIPLA_ESCOLHA")
      checkboxSwitchEl.current!.checked = true;
  }, [setType]);

  if (error) inputTitleEl.current?.focus();

  return (
    <div className={styles.question_container} ref={questionRefElDiv}>
      <div className={styles.question_header}>
        <div className={styles.text}>
          <input
            type="text"
            placeholder="Pergunta"
            value={initialData && initialData.enunciado}
            required
            ref={inputTitleEl}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOnChange({
                enunciado: e.target.value,
                image: {
                  file: initialData?.image?.file
                    ? initialData?.image?.file
                    : null,
                  url: initialData?.image?.url ? initialData.image?.url : "",
                },
                tipo: selected,
              })
            }
          />
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

        <div className={styles.select_container}>
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
            handleOnChange={(value) => {
              setSelected(value.value);
              handleOnChange({
                enunciado: initialData?.enunciado ? initialData.enunciado : "",
                image: {
                  file: initialData?.image?.file
                    ? initialData.image.file
                    : null,
                  url: initialData?.image?.url ? initialData?.image?.url : "",
                },
                tipo: value.value,
              });
            }}
          />
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className={styles.question_body}>
        {initialData && initialData?.image?.file && (
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
                      handleOnChange({
                        enunciado: initialData.enunciado
                          ? initialData.enunciado
                          : "",
                        image: { file: null, url: "" },
                        tipo: selected,
                      });
                      setShowImageOptions(false);
                    }}
                  >
                    <BsFillTrashFill size="1.7rem" /> <span>Remover</span>
                  </div>
                </div>
              )}

              <img
                src={
                  initialData?.image.url ||
                  URL.createObjectURL(initialData.image.file)
                }
                alt={initialData.image.file.name}
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
                  checked={option.correta}
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
                  checked={option.correta}
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
