"use client"
import { createSlice } from "@reduxjs/toolkit";
export const User=createSlice({
    name:"User",
    initialState:{
        User:{}
    },
    reducers:{
getUser:(state,action)=>{
      state.User=action.payload
   

}
    }
})
export const {getUser} =User.actions
export default User.reducer