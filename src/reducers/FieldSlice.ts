import {createSlice} from "@reduxjs/toolkit";

const initialState={
    field:[]
}

const fieldSlice = createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        addField: (state, action)=>{
            state.field.push(action.payload)
        }
    }
})

export const {addField} = fieldSlice.actions;
export default fieldSlice.reducer;