/* eslint-disable jsx-a11y/alt-text */
import {
  decreaseById,
  increaseById,
  removeByID
} from "@/redux/shoppingCartSlice";
import { RootState } from "@/redux/store";
import {
  ActionIcon,
  Grid,
  Image,
  NumberInput,
  Paper,
  rem,
} from "@mantine/core";
import { animated, useSpring } from "@react-spring/web";
import { IconTrash } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Paginate";
interface CartBoxProps {
  isOpen: boolean;
}

const CartBox: React.FC<CartBoxProps> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.shoppingCart);

  const cartAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(100%)",
  });
  const handleDelete = (id: number) => {
    dispatch(removeByID(id));
  };
  React.useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <animated.div className="cart-box" style={cartAnimation}>
      {items?.length === 0 ? (
        <div>
          <h1>Cart is empty</h1>
        </div>
      ) : (
        <>
          <Grid>
            {items?.map(
              (
                data: {
                  quantity: number;
                  src: string | null | undefined;
                  id: number;
                },
                index: React.Key
              ) => {
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
                        max={10}
                        min={0}
                        step={2}
                        disabled
                        styles={{
                          input: { width: rem(34), textAlign: "center" },
                        }}
                      />
                      <ActionIcon
                        onClick={() => dispatch(decreaseById(1))}
                        size={22}
                        variant="default"
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
              }
            )}
          </Grid>
          <Pagination itemsPerPage={4} />
        </>
      )}
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
