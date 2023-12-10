"use client";
import { configureStore } from "@reduxjs/toolkit";
import User from "./User";
export const Store = configureStore({
  reducer: {
    User: User,
  },
});
