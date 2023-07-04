"use client";

import { openShoppingCartOpen } from "@/redux/shoppingCartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import {
  Box,
  Container,
  Flex,
  Header,
  Indicator,
  Select,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { BsCart, BsFillArrowRightCircleFill, BsHeart } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CartBox from "../CartBox";
import Auth from "../Auth";
import React from "react";

const useStyles = createStyles((theme) => ({
  topNavContainer: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
}));

const TopNavbar = () => {
  const { classes } = useStyles();
  const [auth, setAuth] = React.useState(true);
  const { isCartOpen } = useSelector((state: RootState) => state.shoppingCart);
  const dispatch = useDispatch<AppDispatch>();
  const handleOpen = () => {
    setAuth((prev) => !prev);
  };
  return (
    <Header height={rem(60)} className={classes.topNavContainer}>
      <Container fluid={true}>
        <Box component="div" className={classes.root}>
          <Text component="p">Logo</Text>
          <Box component="div">
            <Flex gap={10}>
              <Select
                defaultValue="company"
                size="md"
                data={[
                  { value: "company", label: "Company" },
                  { value: "public business", label: "Public Business" },
                  { value: "public", label: "Public" },
                ]}
              />
              <Select
                defaultValue="product"
                size="md"
                data={[
                  { value: "product", label: "Product" },
                  { value: "new", label: "New" },
                  { value: "old", label: "Old" },
                ]}
              />

              <Select
                defaultValue="all depeartments"
                size="md"
                data={[
                  { value: "all depeartments", label: "All Depeartments" },
                  {
                    value: "computer and laptops",
                    label: "Computer And Laptops",
                  },
                  { value: "cosmetics", label: "Costemics and Body Care" },
                ]}
              />
              <TextInput
                radius="xl"
                size="md"
                placeholder="Search Product..."
                sx={{ maxWidth: "400px", width: "100%" }}
                rightSection={
                  <BsFillArrowRightCircleFill
                    size={25}
                    color="#221ECD"
                    cursor="pointer"
                  />
                }
              />
            </Flex>
          </Box>
          <Flex gap={30} align="center">
            <Indicator label={25} size={20} color="green" lh={0}>
              <MdOutlineMessage size={25} cursor="pointer" />
            </Indicator>
            <Indicator label={0} size={25} color="green" lh={0}>
              <BsHeart size={25} cursor="pointer" />
            </Indicator>
            <Indicator label={0} size={25} color="green" lh={0}>
              <BsCart
                onClick={() => dispatch(openShoppingCartOpen())}
                size={25}
                cursor="pointer"
              />
            </Indicator>

            <BiUserCircle onClick={handleOpen} size={25} cursor="pointer" />
          </Flex>
        </Box>
      </Container>
      {/* Display the products on the current page */}
      <Auth isOpen={auth} />
      <CartBox isOpen={isCartOpen} />
    </Header>
  );
};

export default TopNavbar;
