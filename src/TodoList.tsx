import React, { useCallback, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Todo, actions } from "./store";

const TodoListItem: FC<{ todo: Todo }> = (props) => {
  const dispatch = useDispatch();
  const onClickDeleteButton = useCallback(() => {
    dispatch(actions.removeTodo(props.todo.id));
  }, [props, dispatch]);
  const onClickCompleteButton = useCallback(() => {
    dispatch(actions.complete(props.todo.id));
  }, [props, dispatch]);
  const contentStyle = props.todo.completed
    ? { textDecoration: "line-through", color: "red" }
    : {};
  return (
    <li>
      <button onClick={onClickDeleteButton}>消す</button>&nbsp;
      <span style={contentStyle}>{props.todo.content}</span>
      <button onClick={onClickCompleteButton}>完了</button>
    </li>
  );
};

const TodoList: FC = () => {
  const todoList = useSelector<RootState, Todo[]>((state) => state.todoList);
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
