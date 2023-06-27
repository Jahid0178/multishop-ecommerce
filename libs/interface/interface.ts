import { CSSProperties, ChangeEvent } from "react";

export interface routesInterface {
  id: number | string;
  label: string;
  href: string;
}
[];
export interface InputFieldProps {
  label: string;
  type: string;
  style?: CSSProperties;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
