// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Service
import { forgotPasswordService } from "../../services/apiDevSkills/common/forgotPasswordService";

// Interface
interface IForgotPassword {
  error: any;
  message: any;
  loading: boolean;
}

// State inicial
const initialState: IForgotPassword = {
  error: null,
  message: null,
  loading: false,
};

export const sendEmail = createAsyncThunk(
  "forgotPassword/sendEmail",
  async (data: {login: string, type: "DEVELOPER" | "ADMIN" | "COMPANY"}, thunkAPI) => {

    // Chamando o service responsável por solicitar o envio do código para o e-mail
    const res = await forgotPasswordService(data)

    if(res.error)
        return thunkAPI.rejectWithValue(res.error)

    if(res.message)
        return thunkAPI.fulfillWithValue(res.message)
  }
);

// Criando slice para manipular os estados
export const forgotPasswordSlice = createSlice({
  name: "forgotPasswordSlice",
  initialState,
  reducers: {
    // Função responsável por RESETAR o meu state para o ESTADO INICIAL
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // sendPassword
      .addCase(sendEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.message = action.payload;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = false;

        state.error = action.payload;
      });
  },
});

// Exportanto o Slice
export const { reset } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;

