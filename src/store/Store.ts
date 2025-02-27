import {configureStore} from "@reduxjs/toolkit";
import fieldReducer from "../reducers/FieldSlice.ts";

const placeholderReducer = (state = {}, action: any) => state;

export const store = configureStore({
    reducer: {
        placeholder: placeholderReducer,
        field: fieldReducer,


    },
});

