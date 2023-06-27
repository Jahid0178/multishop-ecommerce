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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
        accusantium repellendus eius. Quae consectetur rerum enim nemo quos
        magnam laborum cumque doloribus nostrum reiciendis sint fugit excepturi
        facilis officiis maiores tempore recusandae ratione in, numquam quia
        suscipit tenetur. Iure enim quia fugiat modi natus fugit repellat minus
        rem unde velit voluptas, necessitatibus blanditiis est maiores, non vel
        id autem sit, dolores ullam ut magnam mollitia neque. Repellat officiis
        velit ea, rem, ad fuga, nisi maxime esse suscipit vitae cumque eius
        magnam nemo voluptas. Ut, fugit? Harum consectetur ab, cum voluptates
        quia accusantium esse, minus unde, magni quaerat pariatur sed assumenda.
      </p>{" "}
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
