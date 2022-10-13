// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Service
import stackService, {
  TResponse,
} from "../../services/apiDevSkills/common/stackService";

// Types
import { TStack } from "../../types/devskills/stack/TStack";

// Interface
interface IStackSlice {
  stack: TStack | null;
  stacks: TStack[] | null;

  error: any;
  loading: boolean;
  success: boolean;
}

// State inicial
const initialState: IStackSlice = {
  stack: null,
  stacks: null,

  error: null,
  loading: false,
  success: false,
};

// Listagem de Stacks
export const getAll = createAsyncThunk("stack/getAll", async (_, thunkAPI) => {
  // Chamando o service responsável por listar todos as Stacks
  const data: TResponse = await stackService.getAll();

  // Validação para verificar se houveram erros
  if (!data.data)
    return thunkAPI.rejectWithValue(
      data.error ? data.error : "Erro ao buscar as stacks."
    );

  // Retornando as Stacks encontrados
  return data.data;
});

// Criando slice para manipular os estados
export const stackSlice = createSlice({
  name: "stackSlice",
  initialState,
  reducers: {
    // Função responsável por RESETAR o meu state para o ESTADO INICIAL
    reset: (state) => {
      state.stack = null;
      state.stacks = null;

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
        state.stack = null;

        state.stacks = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.success = false;

        state.stack = null;
        state.stacks = null;

        state.error = action.payload;
      });
  },
});

// Exportanto o Slice
export const { reset } = stackSlice.actions;
export default stackSlice.reducer;
