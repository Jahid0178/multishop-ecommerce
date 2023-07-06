import React, { InputHTMLAttributes, MouseEventHandler } from "react";

export type ProductProps = {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: number;
  sold: number;
  src: string;
};
export type ProductType = {
  quantity: number;
  id: number;
  title: string;
  category: string;
  rating: number;
  price: number;
  sold: number;
  src: string;
};

export type FaqTpes = {
  title: string;
  data: { faqTitle: string; faqDescription: string; value: string }[];
};
export type SignUpProps = {
  state: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export type AuthData = {
  name?: string;
  email: string;
  password?: string;
  endPoint: string;
  role?: string;
};

export type FilterDataProps = {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: number;
  sold: number;
  src: string;
}[];
