// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { autenticate } from './authSlice';

// Service
import authService from "../services/apiDevSkills/company/authService";

const user = JSON.parse(localStorage.getItem("user")!);

export interface IAuthCompany {
    user: any;
    error: any,
    success: boolean,
    loading: boolean,
}

const initialState: IAuthCompany = {
  user: user ? user : null,
  error: null,
  success: false,
  loading: false,
};

// Cadastro e login da Company
export const register = createAsyncThunk(
  "authCompany/register",
  async (user: any, thunkAPI) => {
    // Chamando o service responsável por cadastrar a Company
    const data = await authService.register(user);

    // Validando a resposta do servidor
    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    // Atualizando o Redux de autenticação
    const dispatch = useDispatch<any>();
    dispatch(autenticate({ user: data, type: "DEV" }));

    // Retornando o usuário cadastrado
    return data;
  }
);

// Criando slice para manipular os estados
export const companySlice = createSlice({
  name: "companySlice",
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
          state.success = true;
          state.error = null;

          state.user = action.payload;
        })
        .addCase(register.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.success = false;

          state.user = null;
        })

  },
});

// Exportanto o Slice
export const { reset } = companySlice.actions;
export default companySlice.reducer;