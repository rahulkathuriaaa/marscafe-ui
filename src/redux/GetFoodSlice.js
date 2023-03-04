import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetFoodThunk=createAsyncThunk("GetFoodThunk",async()=>{
    const res=await axios.get("https://free-food-menus-api-production.up.railway.app/best-foods");
    return res.data;
})
const initialState={
    items:[],
    cart:[],
    totalCostCart:0,
    loading:false
}
const GetFoodSlice=createSlice({
    name:'GetFoodSlice',
    initialState,
    reducers:{
        addToCart:(state,{payload})=>{
            state.cart.push(payload);
            state.totalCostCart+=payload.price;

        }
    },
    extraReducers:{
        [GetFoodThunk.pending]:(state)=>{
            state.loading=true;
        },
        [GetFoodThunk.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.items=payload;
            console.log(payload);
        }
    }
})
export default GetFoodSlice.reducer;
export const {addToCart}=GetFoodSlice.actions
