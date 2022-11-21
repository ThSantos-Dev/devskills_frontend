// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TStartTest } from "../../types/devskills/test/TStartTest";
import { TTestRegister } from "../../types/devskills/test/TTestRegister";
import { TTestTemplateDetails } from "../../types/devskills/test/TTestTemplateDetails";
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
      tipo_criador: auth.user.type === "COMPANY" ? "EMPRESA" : "ADMIN",
    };

    console.log(data);

    const res = await testService.create(data, auth.user.token);

    if (res.error) return thunkAPI.rejectWithValue(res.error);

    return thunkAPI.fulfillWithValue(res.message);
  }
);

export const getAllOfCompany = createAsyncThunk(
  "test/getAllOfCompany",
  async (_, thunkAPI) => {
    const { auth }: any = thunkAPI.getState();

    const res = await testService.getAllOfCompany(auth.user.token);

    if (res.error) {
      return thunkAPI.rejectWithValue(res.error);
    }

    console.log(res);

    return thunkAPI.fulfillWithValue(res.data);
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

export const filterTestOfCompany = createAsyncThunk(
  "test/filterTestOfCompany",
  async (data: TFilterTestData, thunkAPI) => {
    // Resgatando usuário autenticado
    const { auth }: any = thunkAPI.getState();

    const filters = filterTestQuery(data);

    const res = await testService.filterTestOfCompany(filters, auth.user.token);

    if (res.error) return thunkAPI.rejectWithValue(res.error);

    return thunkAPI.fulfillWithValue(res.data);
  }
);

export const getTemplateById = createAsyncThunk(
  "test/getTemplateById",
  async (id: string, thunkAPI) => {
    const { auth }: any = thunkAPI.getState();

    const res = await testService.getTemplateById(id, auth.user.token);

    console.log(res);

    if (res.error) return thunkAPI.rejectWithValue(res.error);

    return thunkAPI.fulfillWithValue<TTestTemplateDetails>(res.data);
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

export const getToRealizeById = createAsyncThunk(
  "test/getToRealizeById",
  async (id: number, thunkAPI) => {
    const { auth }: any = thunkAPI.getState();

    const res = await testService.getToRealizeById(id, auth.user.token);

    if (res.error) return thunkAPI.rejectWithValue(res.error);

    return thunkAPI.fulfillWithValue(res.data);
  }
);

export const startTest = createAsyncThunk(
  "test/startTest",
  async (idTest: number, thunkAPI) => {
    const { auth }: any = thunkAPI.getState();

    const config: TStartTest = {
      id_usuario: auth.user.id,
      id_prova_andamento: idTest,
      finalizada: false,
      data_inicio: new Date().toISOString(),
    };

    const res = await testService.startTest(config, auth.user.token);

    if (res.error) return thunkAPI.rejectWithValue(res.error);

    return thunkAPI.fulfillWithValue(res);
  }
);

export const finishTest = createAsyncThunk(
  "test/finishTest",
  async (data: any, thunkAPI) => {
    const { auth }: any = thunkAPI.getState();

    const testData = {
      id_prova_usuario: parseInt(data.idTest),
      finalizada: true,
      data_entrega: new Date().toISOString(),
      respostas: [
        ...data.responses.map((question: any) => {
          if (question?.resposta)
            return {
              id_questao: question.id_questao,
              resposta: question.resposta,
            };

          if (question.tipo === "UNICA_ESCOLHA")
            return {
              id_questao: question.id_questao,
              id_alternativa: question.id_alternativa,
            };

          return {
            id_questao: question.id_questao,

            id_alternativa: question.id_alternativa
              .filter((alternative: any) => alternative.selected === true)
              .map((filtered: any) => filtered.id_alternativa),
          };
        }),
      ],
    };

    console.log("slice: ", testData);

    const res = await testService.finishTest(testData, auth.user.token);

    if (res.error) return thunkAPI.rejectWithValue(res.error);

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
      // getAllOfCompany
      .addCase(getAllOfCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOfCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = true;
        state.test = {};

        state.tests = action.payload;
      })
      .addCase(getAllOfCompany.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

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
      // Filter tests of company
      .addCase(filterTestOfCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterTestOfCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = true;
        state.test = {};
        console.log("Seus Testes filtrados: ", action.payload);

        state.tests = action.payload;
      })
      .addCase(filterTestOfCompany.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

        state.error = action.payload;
      })
      // Get details of template
      .addCase(getTemplateById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTemplateById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.test = action.payload;
        state.tests = {};
      })
      .addCase(getTemplateById.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

        state.error = action.payload;
      })
      // Apply Template
      .addCase(applyTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyTemplate.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = action.payload;
      })
      .addCase(applyTemplate.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

        state.error = action.payload;
      })
      // getToRealizeById
      .addCase(getToRealizeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getToRealizeById.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = null;

        state.test = action.payload;
        state.tests = {};
      })
      .addCase(getToRealizeById.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

        state.error = action.payload;
      })
      // startTest
      .addCase(startTest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(startTest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = action.payload;

        state.test = {};
        state.tests = {};
      })
      .addCase(startTest.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.test = {};
        state.tests = {};

        state.error = action.payload;
      })
      // finishTest
      .addCase(finishTest.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(finishTest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.success = action.payload;

        state.test = {};
        state.tests = {};
      })
      .addCase(finishTest.rejected, (state, action) => {
        state.loading = false;
        state.success = null;

        state.error = action.payload; 
      });
  },
});

// Exportanto o Slice
export const { reset } = testSlice.actions;
export default testSlice.reducer;
