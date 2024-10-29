import { Button } from "../components/Button";
import React from "react";

export const CounterScreen = () => {
  const [counter, setCounter] = React.useState(0);

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
