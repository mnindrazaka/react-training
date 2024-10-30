import React from "react";
import { paths } from "./routes";
import { Navbar } from "./components/base";
import { RouterContext, useRouter } from "./Router";
import { TokenContext, useToken } from "./Token";

export const App = () => {
  const { path, params, setParams, setPath } = useRouter();
  const tokenContextvalue = useToken();

  const Screen = paths.find(({ url }) => url === path)?.Screen;
  return (
    <TokenContext.Provider value={tokenContextvalue}>
      <RouterContext.Provider value={{ path, params, setParams, setPath }}>
        <div>
          <Navbar />
          {Screen ? <Screen /> : <p>Not Found</p>}
        </div>
      </RouterContext.Provider>
    </TokenContext.Provider>
  );
};
