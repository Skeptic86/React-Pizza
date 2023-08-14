import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ name: "task 1", id: 0 }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    deleteTodo: (state, todosId) => {
      state.todos = state.todos.filter((todo) => todo.id !== todosId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
