import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Todo = {
  name: string;
  id: string;
};

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: [{ name: "task 1", id: "0" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const selectTodos = (state: RootState) => state.todo;
export const selectTodoById = (id: string) => (state: RootState) =>
  state.todo.todos.find((obj) => obj.id === id);
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
