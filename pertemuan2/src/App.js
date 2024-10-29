import { Navbar } from "./Navbar";
import { ProductList } from "./ProductList";
import { Todolist } from "./Todolist";
import { Counter } from "./Counter";
import { NotFound } from "./NotFound";

export const App = () => {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    window.history.pushState(null, "", path);
  }, [path]);

  const onPathChange = (path) => {
    setPath(path);
  };

  const onButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Navbar onPathChange={onPathChange} />
      {path === "/" ? (
        <ProductList />
      ) : path === "/todos" ? (
        <Todolist />
      ) : path === "/counter" ? (
        <div>
          <Counter counter={1} />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
