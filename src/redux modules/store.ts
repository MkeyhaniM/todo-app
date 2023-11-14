import { configureStore } from "@reduxjs/toolkit";
import todoList from "./counterSlice";

export const store = configureStore({
  reducer: {
    todo: todoList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
