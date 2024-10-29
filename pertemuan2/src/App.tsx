import { Navbar } from "./components/Navbar";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { paths } from "./routes";
import React from "react";

export const App = () => {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    window.history.pushState(null, "", path);
  }, [path]);

  const onPathChange = (path: string) => {
    setPath(path);
  };

  const Screen = paths.find(({ url }) => url === path)?.Screen;

  return (
    <div>
      <Navbar onPathChange={onPathChange} />
      {Screen ? <Screen /> : <NotFoundScreen />}
    </div>
  );
};
