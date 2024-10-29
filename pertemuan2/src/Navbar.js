export const Navbar = (props) => {
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
