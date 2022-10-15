// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Service
import authService from "../../services/apiDevSkills/dev/authService";

const user = JSON.parse(localStorage.getItem("user")!);

export interface IAuthDev {
  user: any;
  type: "DEV";
  error: any;
  success: any;
  loading: boolean;
}

const initialState: IAuthDev = {
  user: user ? user : null,
  type: "DEV",

  error: null,
  success: false,
  loading: false,
};

// Cadastro e login do Dev
export const register = createAsyncThunk(
  "dev/register",
  async (user: any, thunkAPI) => {
    // Chamando o service responsável por cadastrar o dev
    const data = await authService.register(user);
    
    // Validando a resposta do servidor
    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    if(data.message)
      return thunkAPI.fulfillWithValue(data.message)
  }
);

// Criando slice para manipular os estados
export const devSlice = createSlice({
  name: "devSlice",
  initialState,
  reducers: {
    // Função responsável por RESETAR o meu state para o ESTADO INICIAL
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register (cadastro)
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;

        state.user = null;
      });
  },
});

// Exportanto o Slice
export const { reset } = devSlice.actions;
export default devSlice.reducer;
