import {createSlice} from "@reduxjs/toolkit";
import {Field} from "../models/Field.ts";

const initialState={
    field:[]
}

const fieldSlice = createSlice({
    name:'field',
    initialState:initialState,
    reducers:{
        addField: (state, action)=>{
            state.field.push(action.payload)
        },
        updateField: (state, action)=>{
            state.field.map((field:Field, index) => {
                if (field.fieldId === action.payload.cropId && index !== -1) {
                    state.field[index] = action.payload;
                }
            });
        },
        deleteField: (state, action)=>{
            state.field.splice(state.field.indexOf(action.payload), 1)
        }
    }
})

export const {addField,updateField,deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;