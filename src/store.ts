// Redux
import { configureStore } from "@reduxjs/toolkit";

// Auth Redux
import authReducer from "./slices/authSlice";

// Dev Redux
import devReducer from "./slices/dev/devSlice";

// Comapany Redux
import companyReducer from "./slices/company/companySlice";

// Recursos
import genderSlice from "./slices/common/genderSlice";
import stackSlice from "./slices/common/stackSlice";
import skillSlice from "./slices/common/skillSlice";
import forgotPasswordSlice from "./slices/common/forgotPasswordSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dev: devReducer,
    company: companyReducer,

    // Recursos
    gender: genderSlice,
    stack: stackSlice,
    skill: skillSlice,
    forgotPassword: forgotPasswordSlice,
  },
});