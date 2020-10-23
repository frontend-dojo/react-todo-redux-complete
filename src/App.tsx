import React, { FC } from "react";
import "./styles.css";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

const App: FC = () => {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
};

export default App;
