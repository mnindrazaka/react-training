import React from "react";

export type NavbarProps = {
  onPathChange: (url: string) => void;
};

export const Navbar = (props: NavbarProps) => {
  const paths = [
    { title: "Product List", url: "/" },
    { title: "Todolist", url: "/todos" },
    { title: "Counter", url: "/counter" },
  ];

  return (
    <ul>
      {paths.map((path) => (
        <li onClick={() => props.onPathChange(path.url)}>{path.title}</li>
      ))}
    </ul>
  );
};
