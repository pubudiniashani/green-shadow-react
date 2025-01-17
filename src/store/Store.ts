import {configureStore} from "@reduxjs/toolkit";

const placeholderReducer = (state = {}, action: any) => state;

export const store = configureStore({
    reducer: {
        placeholder: placeholderReducer,
    },
});

