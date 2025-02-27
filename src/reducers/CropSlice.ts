import {createSlice} from "@reduxjs/toolkit";
import {Crop} from "../models/Crop.ts";

const initialState={
    crops:[]
}

const cropSlice = createSlice({
    name:'crop',
    initialState:initialState,
    reducers:{
        addCrop: (state, action)=>{
            state.crops.push(action.payload)
        },
        updateCrop: (state, action) => {
            state.crops.map((crop:Crop, index) => {
                if (crop.cropId === action.payload.cropId && index !== -1) {
                    state.crops[index] = action.payload;
                }
            });
        },
        deleteCrop: (state, action) => {
            state.crops = state.crops.filter((crop:Crop) => crop.cropId !== action.payload.cropId);
        }
    }
})

export const {addCrop,updateCrop,deleteCrop} = cropSlice.actions;
export default cropSlice.reducer;