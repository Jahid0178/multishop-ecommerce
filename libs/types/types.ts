import React, { InputHTMLAttributes } from "react";
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
