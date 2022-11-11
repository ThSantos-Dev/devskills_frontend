// Styles
import styles from "./Filter.module.css";

// Hooks
import { useState } from "react";

// Icons
import { BsFilterSquare } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

// Components
import SelectCustom from "./../../Form/Select/SelectCustom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TSkill } from "../../../../types/devskills/skill/TSkill";
import { getAll as getAllSkills } from "./../../../../slices/common/skillSlice";
import { getAll as getAllStacks } from "./../../../../slices/common/stackSlice";
import { selectFormat } from "./../../../../utils/select-format";

interface Props {
  getFilters(filters?: TSkillsData | null, type?: "PRATICA" | "TEORICA"): void;
}

type TSelected = {
  label: string;
  value: string;
};

export type TSkillsData = {
  stacks: number[];
  skills: number[];
};

const Filter: React.FC<Props> = ({ getFilters }) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const { skills, loading: skillLoading } = useSelector(
    (state: any) => state.skill
  );
  const { stacks, loading: stackLoading } = useSelector(
    (state: any) => state.stack
  );
  const dispatch = useDispatch<any>();

  // State responsável por armazenar os dados dos selects
  const [selects, setSelects] = useState<TSkillsData>({
    stacks: [],
    skills: [],
  });

  // State responsável por armazenar as skills filtradas pela stack
  const [skillFiltered, setSkillFiltered] = useState<TSkill[]>([]);
  const [typeOfTest, setTypeOfTest] = useState<"PRATICA" | "TEORICA">(
    "TEORICA"
  );

  // Função responsável por alterar os do Selects a cada alteracao
  const handleOnChange = (selecteds: TSelected[], input: string) => {
    const selectedId = {
      ...selects,
      [input]: selecteds.map((select: TSelected) => parseInt(select.value)),
    };

    setSelects(selectedId);

    getFilters({ ...selectedId });
  };

  // Buscando as Stacks e Skills
  useEffect(() => {
    dispatch(getAllSkills());
    dispatch(getAllStacks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recuperando o valor dos Radio buttons
  useEffect(() => {
    getFilters(null, typeOfTest)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfTest])

  // Filtrando as skills com base nas stacks
  useEffect(() => {
    if (selects.stacks.length === 0 || !stacks) return;

    let filtered: TSkill[] = [];

    selects.stacks.map((idStack: number) => {
      return (filtered = [
        ...filtered,
        ...skills.filter((skill: TSkill) => skill.idStack === idStack),
      ]);
    });

    setSkillFiltered(filtered);
    console.log(filtered);
  }, [selects.stacks, skills, stacks]);

  return (
    <div
      className={`${styles.filter_container} ${
        showFilter ? styles.expanded : ""
      }`}
    >
      <div
        className={`${styles.filter_toggle_container} ${
          showFilter ? styles.expanded : ""
        }`}
      >
        <div className={styles.toggle_button}>
          <label>
            <input type="checkbox" />

            <div
              className={styles.filter_text}
              onClick={() => {
                if (!showFilter) {
                  setShowFilter(!showFilter);
                  window.document.body.style.overflow = "hidden";
                  return;
                }

                setShowFilter(!showFilter);
                window.document.body.style.overflow = "auto";
              }}
            >
              {showFilter ? (
                <>
                  <IoClose title="Fechar" />
                  <span>Fechar</span>
                </>
              ) : (
                <>
                  <BsFilterSquare />
                  <span>Filtros</span>
                </>
              )}
            </div>
          </label>
        </div>
      </div>

      <div className={styles.filter_content}>
        <div className={styles.radio_button_container}>
          <h3>Tipo</h3>

          <div className={styles.radio_button}>
            <label>
              <input
                type="radio"
                name="type"
                defaultChecked={true}
                onChange={() => setTypeOfTest("TEORICA")}
              />
              <span>Teórica</span>
            </label>
          </div>
          <div className={styles.radio_button}>
            <label>
              <input
                type="radio"
                name="type"
                onChange={() => setTypeOfTest("PRATICA")}
              />
              <span>Prática</span>
            </label>
          </div>
        </div>

        <div className={styles.select_container}>
          <SelectCustom
            label="Stacks"
            handleOnChange={(selecteds: TSelected[]) =>
              handleOnChange(selecteds, "stacks")
            }
            options={stacks && selectFormat(stacks)}
            name="stacks"
            placeholder="Selecione..."
            isMulti={true}
            closeMenuOnSelect={false}
            isLoading={stackLoading}
          />
        </div>
        <div className={styles.select_container}>
          <SelectCustom
            label="Habilidades"
            handleOnChange={(selecteds: TSelected[]) =>
              handleOnChange(selecteds, "skills")
            }
            options={skillFiltered && selectFormat(skillFiltered)}
            name="skills"
            placeholder="Selecione..."
            isMulti={true}
            isLoading={skillLoading}
            closeMenuOnSelect={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
