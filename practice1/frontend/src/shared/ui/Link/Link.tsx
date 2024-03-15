import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  path?: string;
  children?: ReactNode;
};

export function Link({ path = "/", children }: LinkProps) {
  return <RouterLink to={path}>{children}</RouterLink>;
}
