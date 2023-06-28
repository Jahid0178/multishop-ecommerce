import { CSSProperties, ChangeEvent } from "react";
import { ProductType } from "../types/types";

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
export interface CompanyProductTypes extends ProductType {
  date: string;
  types: "company" | "public";
}
