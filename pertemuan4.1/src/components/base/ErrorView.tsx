import React from "react";

export type ErrorViewProps = {
  message: string;
  onRetry?: () => void;
};

export const ErrorView = (props: ErrorViewProps) => {
  return (
    <div>
      <p>{props.message}</p>
      {props.onRetry ? <button onClick={props.onRetry}>Retry</button> : null}
    </div>
  );
};
