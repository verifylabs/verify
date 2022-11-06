import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { styled } from "@fuel-ui/css";
import type { ButtonProps as RootButtonProps } from "@fuel-ui/react";
import { Button as Root } from "@fuel-ui/react";
import { forwardRef } from "react";

const focus = {
  "&:not([aria-disabled=true]):focus": {
    outline: `2px solid $blue10`,
    outlineOffset: "1px",
  },
};

const StyledButton = styled(Root, {
  fontFamily: '"Supreme", system-ui, -apple-system, sans-serif',
  fontWeight: "$bold",
  textTransform: "uppercase",
  border: "transparent",
  variants: {
    size: {
      sm: {
        px: "$3",
        py: "$2",
        height: "30px",
        fontSize: "12px",
      },
      md: {
        px: "$4",
        py: "$3",
        height: "40px",
        fontSize: "14px",
      },
    },
    color: {
      gray: {
        color: "$gray10",
        background: "$gray4",
        "&:not([aria-disabled=true]):hover": {
          background: "$gray5",
        },
        ...focus,
      },
      blue: {
        background: "$accent10",
        "&:not([aria-disabled=true]):hover": {
          background: "$accent11",
        },
        ...focus,
      },
      black: {
        background: "$gray12",
        "&:not([aria-disabled=true]):hover": {
          background: "$gray12",
        },
        ...focus,
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "gray",
  },
});

export type ButtonProps = Omit<RootButtonProps, "size" | "color"> & {
  size?: "sm" | "md";
  color?: "blue" | "gray" | "black";
  css?: ThemeUtilsCSS;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <StyledButton
        ref={ref}
        {...props}
        css={props.css}
        iconSize={props.size === "md" ? 14 : 16}
      />
    );
  }
);

Button.defaultProps = {
  size: "sm",
  color: "gray",
};
