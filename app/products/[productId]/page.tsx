"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Grid,
  Group,
  NumberInput,
  Text,
  Title,
} from "@mantine/core";
import { BsBagFill } from "react-icons/bs";
import { productsData } from "@/data/data";
import { FilterDataProps } from "@/libs/types/types";
import {
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ProductDetailsPage = ({ params }: any) => {
  const { cartItems: items } = useSelector(
    (state: RootState) => state.shoppingCart
  );

  const [cartItems, setCartItems] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<FilterDataProps>([]);
  const { productId } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    const filteredProducts = productsData.filter(
      (product) => product.id == productId
    );
    setFilteredData(filteredProducts);
  }, [productId]);

  const handleInputChange = (value: number | "") => {
    if (typeof value === "number") {
      setCartItems(value);
    }
  };

  const {
    price = "",
    src = "/",
    title = "",
    id,
  } = filteredData.length > 0 ? filteredData[0] : {};
  // console.log(filteredData);
  const handleIncrease = () => {
    dispatch(increaseQuantity(String(id)));
    setCartItems((prevItems) => prevItems + 1);
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };
  console.log("items log by page ", items);
  return (
    <Box component="section">
      <Container size="lg">
        <Grid>
          <Grid.Col span={12} md={6}>
            <Image src={src} alt={title} width={550} height={480} />
          </Grid.Col>
          <Grid.Col span={12} md={6}>
            <Title order={3} mb={15}>
              {title}
            </Title>
            <Text mb={10}>
              Product details are a crucial part of any eCommerce website or
              online marketplace. These details help the potential customers to
              make an informed decision about the product they are interested in
              buying. A well-written product description can also be a powerful
              marketing tool that can help to increase sales.Product details
              typically include information about the product&apos;s features,
              specifications, dimensions, weight, materials, and other relevant
              information that can help customers to understand the product
              better. The product details section should also include
              high-quality images and videos of the product, as well as customer
              reviews and ratings.
            </Text>
            <Group mb={10}>
              <Text component="span" fw="bold">
                ${price}
              </Text>
              <Text component="span" fw="bold" color="red">
                $1099
              </Text>
            </Group>
            <Group align="middle" spacing={5}>
              <ActionIcon size={42} variant="default" onClick={handleDecrease}>
                –
              </ActionIcon>

              <NumberInput
                hideControls={true}
                value={cartItems}
                onChange={handleInputChange}
                min={0}
                step={1}
                size="md"
                style={{ width: 100, textAlign: "center" }}
              />

              <ActionIcon size={42} variant="default" onClick={handleIncrease}>
                +
              </ActionIcon>
            </Group>
            <Box component="div" mt={10}>
              <Button
                onClick={() => dispatch(addItemToCart(filteredData))}
                rightIcon={<BsBagFill size={20} />}
              >
                Add To Cart
              </Button>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetailsPage;
