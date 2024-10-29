import { Button } from "../components/Button";
import React from "react";

export const TodolistScreen = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState(["mandi", "ngoding", "makan"]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onReset = () => {
    setInputValue("");
  };

  const onSubmit = () => {
    setTodos([...todos, inputValue]);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={onChangeInput}
        type="text"
        placeholder="input todo"
      />
      <Button title="reset" onClick={onReset} />
      <Button title="submit" onClick={onSubmit} />
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>
  );
};
