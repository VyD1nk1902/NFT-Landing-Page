import type React from "react";

export interface Buttons {
  className: string;
  type: "button";
  children: React.ReactNode;
  onClick?: () => void;
  link: string;
}
