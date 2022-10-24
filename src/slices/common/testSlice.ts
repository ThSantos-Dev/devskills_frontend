// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import testService from './../../services/apiDevSkills/common/testService';

interface ITestSlice {
  test: any;
  tests: any[];

  error: any;
  success: any;
  loading: boolean;
}

// State inicial
const initialState: ITestSlice = {
  test: null,
  tests: [],

  error: null,
  success: null,
  loading: false,
};

export const create = createAsyncThunk(
  "test/create",
  async (data: any, thunkAPI) => {
    // Resgatando o token do usuário autenticado do Slice de auth
   console.log(thunkAPI.getState())

    const res = await testService.create(data, "");

    if(res.error) 
        return thunkAPI.rejectWithValue(res.error)
    
    return thunkAPI.fulfillWithValue(res.message)
  }
);

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    // Função responsável por RESETAR o meu state para o ESTADO INICIAL
    reset: (state) => {
      state.test = {};
      state.tests = [];

      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = action.payload;
        state.test = {};
        state.tests = [];
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = [];

        state.error = action.error;
      });
  },
});


// Exportanto o Slice
export const { reset } = testSlice.actions;
export default testSlice.reducer;
