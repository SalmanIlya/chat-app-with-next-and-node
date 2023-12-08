"use client"
import { createSlice } from "@reduxjs/toolkit";
export const User=createSlice({
    name:"User",
    initialState:{
        User:{}
    },
    reducers:{
getUser:(state,action)=>{
    // console.log("action",action.payload);
    state.User=action.payload
    console.log("state",state.User);

}
    }
})
export const {getUser} =User.actions
export default User.reducer