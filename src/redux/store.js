import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./Counter"
export let store=configureStore({
    reducer:{
        counter:counterReducer
    }
})