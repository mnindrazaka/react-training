import React from "react";

export type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: "blue", color: "white" }}
    >
      {props.title}
    </button>
  );
};
