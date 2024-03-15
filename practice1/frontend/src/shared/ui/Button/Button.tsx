import { type ReactNode } from "react";
import cn from "classnames";
import css from "./Button.module.css";

type ButtonTheme = "primary" | "secondary" | "btn-menu";

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "submit";
  style?: ButtonTheme;
  disabled?: boolean;
};

export function Button({
  onClick,
  children,
  type = "submit",
  style,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        css.button,
        css[`button_${style}`],
        disabled && css.btn_disabled
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
