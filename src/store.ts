import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { combineReducers, createStore } from "redux";

export type Todo = {
  id: string;
  content: string;
  completed: boolean;
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [] as Todo[],
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push({
        id: nanoid(),
        content: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.forEach((todo, idx) => {
        if (todo.id === action.payload) {
          state.splice(idx, 1);
        }
      });
    },
    complete(state, action: PayloadAction<string>) {
      const todo = state.find(
        (todo) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = true;
      }
    },
  },
});

const reducer = combineReducers({
  todoList: todoListSlice.reducer,
});

export const actions = { ...todoListSlice.actions };

const store = createStore(reducer);

export default store;
export type RootState = {
  todoList: Todo[];
};
