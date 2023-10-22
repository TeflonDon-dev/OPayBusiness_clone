import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer from "../features/modalSlice";


export const store = configureStore({
    reducer: {
        modal:modalSliceReducer,
    }
})