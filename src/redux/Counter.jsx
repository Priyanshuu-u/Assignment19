import { createSlice } from "@reduxjs/toolkit";

let counterSlice=createSlice({

    name:'counter',
    initialState:{value:0},
    reducers:{
        Increment:(state)=>{
        state.value++
        },
        Decrement:(state)=>{
            state.value--
        },
        IncreaseBy10:(state,action)=>{
            state.value+=action.payload
        },
        Settozero:(state,action)=>{
            state.value=0
        }
    }

})
export default counterSlice.reducer;
export const  {Increment,Decrement,IncreaseBy10,Settozero}= counterSlice.actions;
