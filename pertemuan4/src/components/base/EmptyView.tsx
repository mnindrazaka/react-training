import React from "react";

export type EmptyViewProps = {
  title: string;
};

export const EmptyView = (props: EmptyViewProps) => {
  return <p>{props.title}</p>;
};
