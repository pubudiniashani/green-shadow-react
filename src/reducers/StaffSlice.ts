import {createSlice} from "@reduxjs/toolkit";
import {Staff} from "../models/Staff.ts";

const initialState={
    staff:[]
}

const staffSlice = createSlice({
    name:'staff',
    initialState:initialState,
    reducers:{
        addStaff: (state, action)=>{
            state.staff.push(action.payload)
        },
        updateStaff:(state, action)=>{
            state.staff.map((staff:Staff,index)=>{
                if(staff.email == action.payload.email && index!=-1){
                    state.staff[index]=action.payload
                }
            })
        },
        deleteStaff: (state, action)=>{
            state.staff =state.staff.filter((staff:Staff) => staff.email !== action.payload.email)
        }

    },

})

export const {addStaff,updateStaff,deleteStaff} = staffSlice.actions;
export default staffSlice.reducer;