import React from "react";
import { forwardRefPanda } from "@welcome-ui/system";

import * as S from "./styles";

export type Shape = "circle" | "square";
export type Size = "xxs" | "xs" | "sm" | "md" | "lg";
export type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "primary-info"
  | "secondary-info"
  | "primary-success"
  | "secondary-success"
  | "ghost"
  | "primary-warning"
  | "secondary-warning"
  | "primary-danger"
  | "secondary-danger";

export interface ButtonOptions {
  disabled?: boolean;
  size?: Size;
  variant?: Variant;
  shape?: Shape;
}

type ButtonPandaOptions = ButtonOptions & { children: React.ReactNode };

export const ButtonPanda = forwardRefPanda<"button", ButtonPandaOptions>(
  (
    { children, disabled, size = "md", variant = "primary", shape, ...rest },
    ref
  ) => (
    <S.ButtonPanda
      data-shape={shape}
      disabled={disabled}
      ref={ref}
      size={size}
      variant={variant}
      shape={shape}
      {...rest}
    >
      {children}
    </S.ButtonPanda>
  )
);
