import { ReactNode } from "react";
import cn from "classnames";
import css from "./Layout.module.css";

type LayoutType = "wrap" | "header" | "container" | "footer";

type LayoutProps = {
  children: ReactNode;
  type?: LayoutType;
};

export function Layout({ children, type }: LayoutProps) {
  return (
    <div id={type} className={cn(css.root, css[`${type}`])}>
      {children}
    </div>
  );
}
