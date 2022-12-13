// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Services
import { Navigate } from "react-router-dom";
import adminAuthService from "../services/apiDevSkills/admin/authService";
import companyAuthService from "../services/apiDevSkills/company/authService";
import devAuthService from "../services/apiDevSkills/dev/authService";

export interface IAuth {
  user: any;
  error: any;
  success: any;
  loading: boolean;
}

// Resgatando o usuário que foi armazenado no localStorage
const user: {
  token?: string;
  id?: string;
  type?: "DEVELOPER" | "COMPANY" | "ADMIN";
} = JSON.parse(localStorage.getItem("user") || "{}");

const initialState: IAuth = {
  user: user.token ? user : null,
  error: null,
  success: false,
  loading: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    data: {
      user: { login: string; senha: string };
      type: "DEVELOPER" | "COMPANY" | "ADMIN";
    },
    thunkAPI
  ) => {
    // Verificando qual tipo de usuário está tentando se autenticar
    const type = data.type;

    if (type === "DEVELOPER") {
      //  Chamando o service responsável por realizar o login do Desenvolvedor
      const res = await devAuthService.login(data.user);

      // Validando a resposta do servidor
      if (res.error) {
        return thunkAPI.rejectWithValue(res.error);
      }

      const user = {
        token: res.token,
        id: res.userInfo!.id,
        type: "DEVELOPER",
      };

      localStorage.setItem("user", JSON.stringify(user));

      // Retornando o usuário cadastrado
      return thunkAPI.fulfillWithValue({...user, profile_image: res.userInfo?.fotoPerfil});
    } else if (type === "COMPANY") {
      //  Chamando o service responsável por realizar o login da Empresa
      const res = await companyAuthService.login(data.user);
      console.log(res);

      // Validando a resposta do servidor
      if (res.error || !res.token) {
        return thunkAPI.rejectWithValue(res.error);
      }

      const company = {
        token: res.token,
        id: res.data?.idEmpresa,
        name: res.data?.nome,
        type: "COMPANY",
      };

      localStorage.setItem("user", JSON.stringify(company));

      // Retornando o usuário cadastrado
      return {...company, logo: res.data?.logo};
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

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
  Navigate({ to: "/" });
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
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Logout
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;

        state.user = {};
      })
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        console.log(action.payload);

        state.success = action.payload.message || "Login realizado com sucesso";
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

export const { reset } = authSlice.actions;
export default authSlice.reducer;
