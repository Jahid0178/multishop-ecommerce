import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { productsData } from "@/data/data";
import { usePagination } from "@mantine/hooks";
import Paginate from "./Paginate";
import Pagination from "./Paginate";

interface CartBoxProps {
  isOpen: boolean;
}

const CartBox: React.FC<CartBoxProps> = ({ isOpen }) => {
  const cartAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(100%)",
  });

  return (
    <animated.div className="cart-box" style={cartAnimation}>
      <Pagination totalItems={20} itemsPerPage={5} />
    </animated.div>
  );
};
const styles = {
  cartBox: {
    position: "fixed",
    top: "0",
    right: "0",
    width: "300px",
    height: "100vh",
    backgroundColor: "white",
    padding: "16px",
  },
};
export default CartBox;
