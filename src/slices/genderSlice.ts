// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Service
import genderService, {
  TResponse,
} from "../services/apiDevSkills/admin/genderService";

// Types
import { TGender } from "../types/devskills/gender/TGender";

// Interface
interface IGenderSlice {
  gender: TGender | null;
  genders: TGender[] | null;

  error: any;
  loading: boolean;
  success: boolean;
}

// State inicial
const initialState: IGenderSlice = {
  gender: null,
  genders: null,

  error: null,
  loading: false,
  success: false,
};

// Listagem de Generos
export const getAll = createAsyncThunk("gender/getAll", async (_, thunkAPI) => {
    console.log("teste");

  // Chamando o service responsável por listar todos os Generos
  const data: TResponse = await genderService.getAll();

  // Validação para verificar se houveram erros
  if (!data.data)
    return thunkAPI.rejectWithValue(
      data.error ? data.error : "Erro ao buscar os gêneros."
    );

  // Retornando os Gêneros encontrados
  return data.data;
});

// Criando slice para manipular os estados
export const genderSlice = createSlice({
  name: "genderSlice",
  initialState,
  reducers: {
    // Função responsável por RESETAR o meu state para o ESTADO INICIAL
    reset: (state) => {
      state.gender = null;
      state.genders = null;

      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register (cadastro)
      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.gender = null;

        state.genders = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.success = false;

        state.gender = null;
        state.genders = null;

        state.error = action.payload;
      });
  },
});

// Exportanto o Slice
export const { reset } = genderSlice.actions;
export default genderSlice.reducer;
