import React, { useContext } from "react";
import { paths } from "../../routes";
import { RouterContext } from "../../Router";
import { TokenContext } from "../../Token";

export const Navbar = () => {
  const { setPath } = useContext(RouterContext);
  const { token } = useContext(TokenContext);
  return (
    <ul>
      {paths
        .filter(({ publicOnly }) => !publicOnly || (publicOnly && !token))
        .filter(({ hideMenu }) => !hideMenu)
        .map((path) => (
          <li onClick={() => setPath(path.url)}>{path.title}</li>
        ))}
    </ul>
  );
};
