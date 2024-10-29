import { Button } from "./Button";

export const Todolist = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState(["mandi", "ngoding", "makan"]);

  const onChangeInput = (event) => {
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
