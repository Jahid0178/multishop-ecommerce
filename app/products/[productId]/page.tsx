"use client";

import { useState } from "react";
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

const ProductDetailsPage = ({ params }: any) => {
  const [cartItems, setCartItems] = useState(0);
  const { productId } = params;

  const handleIncrease = () => {
    setCartItems((prevItems) => prevItems + 1);
  };

  const handleDecrease = () => {
    if (cartItems > 0) {
      setCartItems((prevItems) => prevItems - 1);
    }
  };

  const handleInputChange = (value: number | "") => {
    if (typeof value === "number") {
      setCartItems(value);
    }
  };

  return (
    <Box component="section">
      <Container size="lg">
        <Grid>
          <Grid.Col span={12} md={6}>
            <Image src="/" alt="Product Image" width={550} height={480} />
          </Grid.Col>
          <Grid.Col span={12} md={6}>
            <Title order={3} mb={15}>
              MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with
              apple 1 year warranty
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
                $1049
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
              <Button rightIcon={<BsBagFill size={20} />}>Add To Cart</Button>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetailsPage;
