import { useState } from "react";
import css from "./Input.module.css";

type InputProps = {
  onChange?: () => void;
  maxLength?: number;
  placeholder?: string;
};

export function Input({ onChange, maxLength = 255, placeholder }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      className={css.root}
      type={"search"}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
}
