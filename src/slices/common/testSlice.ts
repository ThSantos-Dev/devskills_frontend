// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TSkillsData } from "../../components/shared/Layout/Filter/Filter";
import { TTestRegister } from "../../types/devskills/test/TTestRegister";
import { filterTestQuery, TFilterTestData } from "../../utils/filter-query";
import testService from "./../../services/apiDevSkills/common/testService";

interface ITestSlice {
  test: any;
  tests: any;

  error: any;
  success: any;
  loading: boolean;
}

// State inicial
const initialState: ITestSlice = {
  test: null,
  tests: {},

  error: false,
  success: false,
  loading: false,
};

export const create = createAsyncThunk(
  "test/create",
  async (test: any, thunkAPI) => {
    // Resgatando o token do usuário autenticado do Slice de auth
    const { auth }: any = thunkAPI.getState();

    console.log(auth);

    const data: TTestRegister = {
      ...test,
      id_criador: auth.user.id,
      tipo_criador: auth.user.type,
    };

    console.log(data);

    const res = await testService.create(data, auth.user.token);

    if (res.error) return thunkAPI.rejectWithValue(res.error);

    return thunkAPI.fulfillWithValue(res.message);
  }
);

export const getAllTemplates = createAsyncThunk(
  "test/getAllTemplates",
  async (_, thunkAPI) => {
    const res = await testService.getAllTemplates();

    if (res.error) return thunkAPI.rejectWithValue(res.error);

    return thunkAPI.fulfillWithValue(res.data);
  }
);

export const filterTemplates = createAsyncThunk(
  "test/filterTemplates",
  async (data: TFilterTestData, thunkAPI) => {
    // Resgatando usuário autenticado
    const { auth }: any = thunkAPI.getState();

    const filters = filterTestQuery(data);

    const res = await testService.filterTemplates(filters, auth.user.token);

    if (res.error) return thunkAPI.rejectWithValue(res.error);

    return thunkAPI.fulfillWithValue(res.data);
  }
);

export const applyTemplate = createAsyncThunk(
  "test/applyTemplate",
  async (config: any, thunkAPI) => {
    const { auth }: any = thunkAPI.getState();

    console.log(auth);

    const data = {
      id_empresa: auth.user.id,
      ...config,
    };

    const res = await testService.useTemplate(data, auth.token);

    if (res.error) {
      return thunkAPI.rejectWithValue(res.error);
    }

    return thunkAPI.fulfillWithValue(res.message);
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

        state.error = action.payload;
      })
      // Get All Templates
      .addCase(getAllTemplates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTemplates.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = true;
        state.test = {};

        state.tests = action.payload;
      })
      .addCase(getAllTemplates.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

        state.error = action.payload;
      })
      // Filter Templates
      .addCase(filterTemplates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterTemplates.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = true;
        state.test = {};
        console.log("Testes prontos filtrados: ", action.payload);

        state.tests = action.payload;
      })
      .addCase(filterTemplates.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

        state.error = action.payload;
      })
      // Template
      .addCase(applyTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyTemplate.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = action.payload;
        state.test = {};
        state.tests = {};
      })
      .addCase(applyTemplate.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

        state.error = action.payload;
      });
  },
});

// Exportanto o Slice
export const { reset } = testSlice.actions;
export default testSlice.reducer;
