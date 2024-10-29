import { ProductListScreen } from "./screens/ProductListScreen";
import { TodolistScreen } from "./screens/TodolistScreen";
import { CounterScreen } from "./screens/CounterScreen";

export const paths = [
  { title: "Product List", url: "/", Screen: ProductListScreen },
  { title: "Todolist", url: "/todos", Screen: TodolistScreen },
  { title: "Counter", url: "/counter", Screen: CounterScreen },
];
