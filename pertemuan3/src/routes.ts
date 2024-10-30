import { LoginScreen } from "./screens/auth";
import { ProductListScreen, ProductCreateScreen } from "./screens/product";
import { ProductUpdateScreen } from "./screens/product/ProductUpdateScreen";

export const paths = [
  { title: "Product List", url: "/", Screen: ProductListScreen },
  { title: "Product Create", url: "/create", Screen: ProductCreateScreen },
  {
    title: "Product Update",
    url: "/update",
    Screen: ProductUpdateScreen,
    hideMenu: true,
  },
  {
    title: "Login",
    url: "/login",
    Screen: LoginScreen,
    publicOnly: true,
  },
];
