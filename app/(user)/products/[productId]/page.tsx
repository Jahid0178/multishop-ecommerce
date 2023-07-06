"use client";

import { products } from "@/libs/Data";
import { ProductType } from "@/libs/types/types";
import { addItem, decreaseById, increaseById } from "@/redux/shoppingCartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  NumberInput,
  Tabs,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsBagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ReviewsTab from "./ReviewsTab";
import ContactModal from "@/ui/Modals/ContactModal";

// custom style
const useStyles = createStyles((theme) => ({
  relative: {
    position: "relative",
  },
}));

const ProductDetailsPage = ({ params }: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  const { classes } = useStyles();
  const { items } = useSelector((state: RootState) => state.shoppingCart);

  const [cartItems, setCartItems] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<ProductType>();
  const { productId } = params;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const filteredProducts = products.find(
      (product) => product.id == productId
    );
    setFilteredData(filteredProducts);
  }, [productId, filteredData]);
  if (!filteredData) {
    return;
  }
  const { id, price, src, title } = filteredData;

  const handleInputChange = (value: number | "") => {
    if (typeof value === "number") {
      setCartItems(value);
    }
  };

  const handleIncrease = () => {
    dispatch(increaseById(id));
    setCartItems((prevItems) => prevItems + 1);
  };

  const handleDecrease = () => {
    dispatch(decreaseById(id));
  };
  const handleAddTocart = () => {
    dispatch(addItem(filteredData));
  };

  return (
    <>
      {/* Product View Section  */}
      <Box component="section" pb={20}>
        <Container size="lg">
          <Grid>
            <Grid.Col span={12} md={6} h={417} className={classes.relative}>
              <Image
                src={
                  "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png"
                }
                alt={title}
                // width={550}
                // height={480}
                fill={true}
              />
            </Grid.Col>
            <Grid.Col span={12} md={6}>
              <Title order={3} mb={15}>
                {title}
              </Title>
              <Text mb={10}>
                Product details are a crucial part of any eCommerce website or
                online marketplace. These details help the potential customers
                to make an informed decision about the product they are
                interested in buying. A well-written product description can
                also be a powerful marketing tool that can help to increase
                sales.Product details typically include information about the
                product&apos;s features, specifications, dimensions, weight,
                materials, and other relevant information that can help
                customers to understand the product better. The product details
                section should also include high-quality images and videos of
                the product, as well as customer reviews and ratings.
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
                <ActionIcon
                  size={42}
                  variant="default"
                  onClick={handleDecrease}
                >
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

                <ActionIcon
                  size={42}
                  variant="default"
                  onClick={handleIncrease}
                >
                  +
                </ActionIcon>
              </Group>
              <Box component="div" mt={10}>
                <Button
                  onClick={handleAddTocart}
                  rightIcon={<BsBagFill size={20} />}
                  mr={10}
                >
                  Add To Cart
                </Button>
                <Button onClick={open}>Send Message</Button>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
        {/* Modal  */}
        {opened && <ContactModal opened={opened} close={close} />}
      </Box>

      {/* Product Description Section Additional information, Reviews  */}
      <Box component="section" pt={5}>
        <Container size="lg" px={8}>
          <Card padding="lg" radius={0} withBorder pb={40}>
            <Tabs defaultValue="description">
              <Tabs.List>
                <Tabs.Tab value="description">Description</Tabs.Tab>
                {/* <Tabs.Tab value="additional information" >Additional information</Tabs.Tab> */}
                <Tabs.Tab value="riviews">Riviews</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="description" pt="xs">
                <Title order={3}>Quick Facts</Title>
                <Text>
                  Lorem ipsum dolor sit amet, cons ectetur adipi scingeliras
                  sodales tristique laoreet. Vivamus iaculis sollicitudin
                  viverra. Morbi dapibus nunc tellus, ut iaculis dui congue
                  lacinia. Mauris dignissim euismod tortor non pharetra.
                  Suspendisse justo augue, mollis ut enim eu, pharetra feugiat
                  ex. In porttitor purus elit, feugiat viverra nisi condimentum
                  nec. Nunc ac mi ante. Nulla fringilla hendrerit elit.
                </Text>
              </Tabs.Panel>

              {/* <Tabs.Panel value="additional information" pt="xs">
                Messages tab content
              </Tabs.Panel> */}

              <Tabs.Panel value="riviews" pt="xs">
                <ReviewsTab />
              </Tabs.Panel>
            </Tabs>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetailsPage;
