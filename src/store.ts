// Redux
import { configureStore } from "@reduxjs/toolkit";

// Dev Redux
import devAuthReducer from './slices/dev/authSlice'

// Comapany Redux
import companyAuthReducer from './slices/company/authSlice'


export const store = configureStore({
    reducer: {
        devAuth: devAuthReducer,
        companyAuth: companyAuthReducer
    }
})