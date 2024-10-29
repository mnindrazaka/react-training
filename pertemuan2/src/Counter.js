import { Button } from "./Button";

export const Counter = (props) => {
  const [counter, setCounter] = React.useState(props.counter);

  const onPlusClick = () => {
    setCounter(counter + 1);
  };

  const onMinusClick = () => {
    setCounter(counter - 1);
  };

  const onResetClick = () => {
    setCounter(0);
  };

  return (
    <div>
      <Button title="-" onClick={onMinusClick} />
      <Button title="+" onClick={onPlusClick} />
      <Button title="reset" onClick={onResetClick} />
      <p id="counterDisplay">{counter}</p>
    </div>
  );
};
