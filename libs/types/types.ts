import React, { InputHTMLAttributes, MouseEventHandler } from "react";
export type ProductProps = {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: string;
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
