/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { productsData } from "@/data/data";
import { usePagination } from "@mantine/hooks";
import Paginate from "./Paginate";
import Pagination from "./Paginate";
import { ProductType } from "@/libs/types/types";
import { IconTrash } from "@tabler/icons-react";
import {
  ActionIcon,
  Grid,
  NumberInput,
  Paper,
  rem,
  Image,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeByID,
  increaseById,
  decreaseById,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
} from "@/redux/shoppingCartSlice";
import { RootState } from "@/redux/store";
interface CartBoxProps {
  isOpen: boolean;
}

const CartBox: React.FC<CartBoxProps> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState<ProductType[]>();
  const cartAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(100%)",
  });
  // console.log("data from cart box", data);
  const handleDelete = (id: number) => {
    dispatch(removeByID(id));
  };
  return (
    <animated.div className="cart-box" style={cartAnimation}>
      <Grid>
        {data?.map((data, index) => {
          return (
            <Grid.Col key={index} span={12} md={12}>
              <Paper
                shadow="md"
                radius="md"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  padding: "4px 9px",
                }}
              >
                {/* {data.title.slice(0, 16)} */}
                <ActionIcon
                  size={22}
                  variant="default"
                  onClick={() => dispatch(increaseById(1))}
                >
                  +
                </ActionIcon>
                <NumberInput
                  hideControls
                  value={data.quantity}
                  // onChange={(val) => setValue(val)}
                  // handlersRef={handlers}
                  max={10}
                  min={0}
                  step={2}
                  disabled
                  styles={{ input: { width: rem(34), textAlign: "center" } }}
                />
                <ActionIcon
                  onClick={() => dispatch(decreaseById(1))}
                  size={22}
                  variant="default"
                  // onClick={handleDecncrement}
                >
                  –
                </ActionIcon>
                <Image
                  style={{ border: "2px solid green" }}
                  width={50}
                  height={50}
                  fit="contain"
                  src={data.src}
                />
                <IconTrash
                  onClick={() => handleDelete(data.id)}
                  style={{ cursor: "pointer" }}
                  size={20}
                  strokeWidth={2}
                  color={"red"}
                />
              </Paper>
            </Grid.Col>
          );
        })}
      </Grid>
      <Pagination state={setData} totalItems={20} itemsPerPage={4} />
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
