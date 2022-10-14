// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Service
import authService from "../../services/apiDevSkills/company/authService";
import { TCompanyRegister } from "../../types/devskills/company/TCompanyRegister";

const user = JSON.parse(localStorage.getItem("user")!);

export interface ICompany {
  user: any;
  error: any;
  success: any;
  loading: boolean;
}

const initialState: ICompany = {
  user: user ? user : null,
  error: null,
  success: false,
  loading: false,
};

// Cadastro e login da Company
export const register = createAsyncThunk(
  "company/register",
  async (company: TCompanyRegister, thunkAPI) => {
    // Chamando o service responsável por cadastrar a Company
    const data = await authService.register(company);

    // Validando a resposta do servidor
    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    if (data.message) return thunkAPI.fulfillWithValue(data.message);

    // AJUSTAR COM A NATHALIA
    if (data.newCompany) return thunkAPI.fulfillWithValue("Cadastrado!");
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
export const { reset } = companySlice.actions;
export default companySlice.reducer;
