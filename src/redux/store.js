import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todoSlice";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    todo,
    pizza,
  },
});
