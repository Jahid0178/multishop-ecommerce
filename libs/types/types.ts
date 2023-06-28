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
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export type AuthData = {
  name?: any;
  email: any;
  password?: any;
  endPoint: string;
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
