import React, { useCallback, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Todo, actions } from "./store";

const TodoListItem: FC<{ todo: Todo }> = (props) => {
  const dispatch = useDispatch();
  const onClickButton = useCallback(() => {
    dispatch(actions.removeTodo(props.todo.id));
  }, [props, dispatch]);
  return (
    <li>
      <button onClick={onClickButton}>消す</button>&nbsp;
      {props.todo.content}
    </li>
  );
};

const TodoList: FC = () => {
  const todoList = useSelector<RootState, Todo[]>(
    (state) => state.todoList.todoList
  );
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
