"use client";

import {
  Box,
  Container,
  Flex,
  Header,
  Select,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
import { BsFillArrowRightCircleFill, BsHeart, BsCart } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

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
          <Flex gap={20}>
            <BsHeart size={25} cursor="pointer" />
            <BsCart size={25} cursor="pointer" />
            <BiUserCircle size={25} cursor="pointer" />
          </Flex>
        </Box>
      </Container>
    </Header>
  );
};

export default TopNavbar;