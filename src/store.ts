// Redux
import { configureStore } from "@reduxjs/toolkit";

// Auth Redux
import authReducer from "./slices/authSlice"

// Dev Redux
import devReducer from "./slices/devSlice";

// Comapany Redux
import companyReducer from "./slices/companySlice";

// Recursos
import genderSlice from "./slices/genderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dev: devReducer,
    company: companyReducer,

    // Recursos
    gender: genderSlice,
  },
});