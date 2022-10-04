// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Service
import authService from "../../services/apiDevSkills/company/authService";

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

// Cadastro e login do Dev
export const register = createAsyncThunk(
  "authCompany/register",
  async (user: any, thunkAPI) => {
      // Chamando o service responsável por cadastrar o dev 
    const data = await authService.register(user);

    // Validando a resposta do servidor
    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    // Retornando o usuário cadastrado
    return data;
  }
);

// Logout do Dev
export const logout = createAsyncThunk('authCompany/logout', async () => {
    // Chamando o service para remover o token do LocalStorage
    await authService.logout()
})

// Login do Dev
export const login = createAsyncThunk(
  "authCompany/login",
  async (user: any, thunkAPI) => {
    // Chamando o service responsável por realizar o loing do dev
    const data = await authService.login(user);

    // Validando a resposta do servidor
    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    // Retornando o usuário autenticado
    return data;
  }
);


// Criando slice para manipular os estados
export const authSlice = createSlice({
  name: "authCompany",
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
        // Logout
        .addCase(logout.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.error = null;

          state.user = null;
        })
        // Login 
        .addCase(login.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.error = null;

          state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.success = false;

          state.user = null;
        });

  },
});

// Exportanto o Slice
export const {reset} = authSlice.actions
export default authSlice.reducer