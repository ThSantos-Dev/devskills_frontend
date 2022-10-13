// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Service
import skillService, {
  TResponse,
} from "../../services/apiDevSkills/common/skillService";

// Types
import { TSkill } from "../../types/devskills/skill/TSkill";

// Interface
interface IskillSlice {
  skill: TSkill | null;
  skills: TSkill[] | null;

  error: any;
  loading: boolean;
  success: boolean;
}

// State inicial
const initialState: IskillSlice = {
  skill: null,
  skills: null,

  error: null,
  loading: false,
  success: false,
};

// Listagem de skills
export const getAll = createAsyncThunk("skill/getAll", async (_, thunkAPI) => {
  // Chamando o service responsável por listar todos as skills
  const data: TResponse = await skillService.getAll();

  // Validação para verificar se houveram erros
  if (!data.data)
    return thunkAPI.rejectWithValue(
      data.error ? data.error : "Erro ao buscar as skills."
    );

  // Retornando as skills encontrados
  return data.data;
});

// Criando slice para manipular os estados
export const skillSlice = createSlice({
  name: "skillSlice",
  initialState,
  reducers: {
    // Função responsável por RESETAR o meu state para o ESTADO INICIAL
    reset: (state) => {
      state.skill = null;
      state.skills = null;

      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Listagem
      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.skill = null;

        state.skills = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.success = false;

        state.skill = null;
        state.skills = null;

        state.error = action.payload;
      });
  },
});

// Exportanto o Slice
export const { reset } = skillSlice.actions;
export default skillSlice.reducer;
