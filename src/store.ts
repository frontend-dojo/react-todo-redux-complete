import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { combineReducers, createStore } from "redux";

export type Todo = { id: string; content: string; completed: boolean };

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: []
  } as {
    todoList: Todo[];
  },
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todoList = [
        ...state.todoList,
        { id: nanoid(), content: action.payload, completed: false }
      ];
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    complete(state, action: PayloadAction<string>) {
      state.todoList = state.todoList.map((e) => {
        if (e.id === action.payload) {
          e.completed = true;
        }
        return e;
      });
    }
  }
});

const reducer = combineReducers({
  todoList: todoListSlice.reducer
});

export const actions = { ...todoListSlice.actions };

const store = createStore(reducer);

export default store;
export type RootState = {
  todoList: {
    todoList: Todo[];
  };
};
