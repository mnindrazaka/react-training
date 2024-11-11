import { ReactNode } from "react";
import { Navbar } from "./Navbar";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <div style={{ padding: 15 }}>
      <Navbar />
      {props.children}
    </div>
  );
};
