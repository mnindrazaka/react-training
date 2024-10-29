import React from "react";
import { paths } from "../routes";

export type NavbarProps = {
  onPathChange: (url: string) => void;
};

export const Navbar = (props: NavbarProps) => {
  return (
    <ul>
      {paths.map((path) => (
        <li onClick={() => props.onPathChange(path.url)}>{path.title}</li>
      ))}
    </ul>
  );
};
