import {configureStore} from "@reduxjs/toolkit";
import fieldReducer from "../reducers/FieldSlice.ts";
import staffReducer from "../reducers/StaffSlice.ts";
import cropReducer from "../reducers/CropSlice.ts";

const placeholderReducer = (state = {}, action: any) => state;

export const store = configureStore({
    reducer: {
        placeholder: placeholderReducer,
        field: fieldReducer,
        staff: staffReducer,
        crop: cropReducer

    },
});

