// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Services
import adminAuthService from "../services/apiDevSkills/admin/authService";
import companyAuthService from "../services/apiDevSkills/company/authService";
import devAuthService from "../services/apiDevSkills/dev/authService";

export interface IAuth {
  user: any;
  type: "ADMIN" | "DEV" | "COMPANY" | null;
  error: any;
  success: boolean;
  loading: boolean;
}

const initialState: IAuth = {
  user: null,
  type: null,
  error: null,
  success: false,
  loading: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: any, thunkAPI) => {
    // Verificando qual tipo de usuário está tentando se autenticar
    const type: "ADMIN" | "DEV" | "COMPANY" = data.type;

    if (type === "DEV") {
      //  Chamando o service responsável por realizar o login do Desenvolvedor
      const res = await devAuthService.login(data.user);

      // Validando a resposta do servidor
      if (res.error) {
        return thunkAPI.rejectWithValue(res.error);
      }

      // Retornando o usuário cadastrado
      return res;
    } else if (type === "COMPANY") {
      //  Chamando o service responsável por realizar o login da Empresa
      const res = await companyAuthService.login(data.user);

      // Validando a resposta do servidor
      if (res.error) {
        return thunkAPI.rejectWithValue(res.error);
      }

      // Retornando o usuário cadastrado
      return res;
    } else if (type === "ADMIN") {
      //  Chamando o service responsável por realizar o login do Administrador
      const res = await adminAuthService.login(data.user);

      // Validando a resposta do servidor
      if (res.error) {
        return thunkAPI.rejectWithValue(res.error);
      }

      // Retornando o usuário cadastrado
      return res;
    }
  }
);

export const autenticate = createAsyncThunk(
  "auth/autenticate",
  async (data: any, thunkAPI) => {
    await data;

    return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
});

// Criando slice para manipular os estados
export const authSlice = createSlice({
  name: "auth",
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
      })
      // Autenticate
      .addCase(autenticate.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;

        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;