import React, { FormEvent, MouseEvent } from "react";

// Styles
import "./Button.css";

// Icons
import { MdOutlineChevronRight } from "react-icons/md";

interface Props {
  text: string;
  color: "solid_white" | "solid_gray" | "solid_pink" | "outline";
  size: "small" | "medium" | "inherit";
  skipIcon?: boolean;
  submit?: boolean;

  handleOnClick?(e: MouseEvent<HTMLButtonElement>): void;
  handleOnSubmit?(e: FormEvent<HTMLButtonElement>): void;
}

const Button: React.FC<Props> = ({
  text,
  color,
  size,
  submit = true,
  skipIcon = false,
  handleOnClick,
  handleOnSubmit,
}) => {
  return (
    <>
      {submit ? (
        <button
          type="submit"
          className={`btn_color_${color} btn_size_${size} ${
            skipIcon && "icon"
          }`}
          onSubmit={handleOnSubmit}
        >
          {skipIcon && <MdOutlineChevronRight />}
          <span>{text}</span>
        </button>
      ) : (
        <button
          className={`btn_color_${color} btn_size_${size} ${
            skipIcon && "icon"
          }`}
          onClick={handleOnClick}
        >
          {skipIcon && <MdOutlineChevronRight />}
          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
