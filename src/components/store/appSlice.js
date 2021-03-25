import { createSlice } from '@reduxjs/toolkit';

const appSlice=createSlice({
    name:"search",
    initialState:{
        searchInput:"",
    },
    reducers:{
        setInputValue:(state,action)=>{
            state.searchInput=action.payload.input;
        }
    }
})

export default appSlice;