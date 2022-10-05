// Redux
import { configureStore } from "@reduxjs/toolkit";

// Dev Redux
import devReducer from "./slices/devSlice";

// Comapany Redux
import companyReducer from "./slices/companySlice";

export const store = configureStore({
  reducer: {
    devReducer: devReducer,
    companyReducer: companyReducer,
  },
});