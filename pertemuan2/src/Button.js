export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: "blue", color: "white" }}
    >
      {props.title}
    </button>
  );
};
