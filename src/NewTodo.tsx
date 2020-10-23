import React, { ChangeEvent, useCallback, useState, FC } from "react";
import { useDispatch } from "react-redux";
import { actions } from "./store";

const NewTodo: FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const onChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
    },
    [setInput]
  );
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (input) dispatch(actions.addTodo(input));
      setInput("");
    },
    [dispatch, input]
  );
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" value={input} onChange={onChangeInput} />
        <button type="submit">追加</button>
      </div>
    </form>
  );
};

export default NewTodo;
