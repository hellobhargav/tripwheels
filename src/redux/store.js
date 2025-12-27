import { configureStore } from "@reduxjs/toolkit";
import { MobileReducer } from "./MobileReducer";

export const store = configureStore({ reducer: MobileReducer })