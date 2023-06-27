import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { productsData } from "@/data/data";
import { usePagination } from "@mantine/hooks";
import Paginate from "./Paginate";

interface CartBoxProps {
  isOpen: boolean;
}

const CartBox: React.FC<CartBoxProps> = ({ isOpen }) => {
  const cartAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(100%)",
  });

  return (
    <animated.div className="cart-box" style={cartAnimation}>
      {/* Your cart contents go here */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum
        aliquid adipisci quod quo illum soluta sed quia ex! Voluptatem nobis
        odio eaque, inventore perspiciatis omnis cumque cum
      </p>
      <Paginate itemsPerPage={4} />
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
