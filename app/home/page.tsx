"use client";

import { useState } from "react";
import ProductsCard from "@/ui/Cards";
import { productsData } from "@/data/data";
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import Link from "next/link";
import SubscribeUs from "@/ui/SubscribeUs";
import ContactModal from "@/ui/Modals/ContactModal";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url('/assets/images/home/banner-img.jpg')",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.colors.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.colors.dark,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),
  },

  pageTitle: {
    backgroundColor: theme.white,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.sm,
  },
}));

const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Box component="section" py={0}>
        <div className={classes.root}>
          <Container size="lg">
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}>
                  A
                  <Text component="span" inherit>
                    fully featured
                  </Text>
                  React components library
                </Title>

                <Text className={classes.description} mt={30}>
                  Build fully functional accessible web applications with ease –
                  Mantine includes more than 100 customizable components and
                  hooks to cover you in any situation
                </Text>

                <Group mt={50}>
                  <Link href="/products">
                    <Button
                      variant="gradient"
                      size="xl"
                      className={classes.control}
                    >
                      Shop Now
                    </Button>{" "}
                  </Link>

                  <Button
                    variant="gradient"
                    size="xl"
                    className={classes.control}
                    onClick={open}
                  >
                    Contact Us
                  </Button>
                </Group>
              </div>
            </div>
          </Container>
        </div>
      </Box>

      <Box component="section">
        <Container size="lg">
          <Box component="div">
            <Title order={2} className={classes.pageTitle}>
              New Company Products
            </Title>
            <Box component="div" mt={20}>
              <Grid>
                {productsData.map((product) => (
                  <Grid.Col key={product.id} span={12} md={6} lg={3}>
                    <ProductsCard data={product} />
                  </Grid.Col>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section">
        <Container size="lg">
          <Box component="div">
            <Title order={2} className={classes.pageTitle}>
              Old Company Products
            </Title>
            <Box component="div" mt={20}>
              <Grid>
                {productsData.map((product) => (
                  <Grid.Col key={product.id} span={12} md={6} lg={3}>
                    <ProductsCard data={product} />
                  </Grid.Col>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section">
        <Container size="lg">
          <Box component="div">
            <Title order={2} className={classes.pageTitle}>
              New Public Business Products
            </Title>
            <Box component="div" mt={20}>
              <Grid>
                {productsData.map((product) => (
                  <Grid.Col key={product.id} span={12} md={6} lg={3}>
                    <ProductsCard data={product} />
                  </Grid.Col>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section">
        <Container size="lg">
          <Box component="div">
            <Title order={2} className={classes.pageTitle}>
              Old Public Business Products
            </Title>
            <Box component="div" mt={20}>
              <Grid>
                {productsData.map((product) => (
                  <Grid.Col key={product.id} span={12} md={6} lg={3}>
                    <ProductsCard data={product} />
                  </Grid.Col>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section">
        <Container size="lg">
          <Box component="div">
            <Title order={2} className={classes.pageTitle}>
              Old Public Products
            </Title>
            <Box component="div" mt={20}>
              <Grid>
                {productsData.map((product) => (
                  <Grid.Col key={product.id} span={12} md={6} lg={3}>
                    <ProductsCard data={product} />
                  </Grid.Col>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <SubscribeUs />
      {opened && <ContactModal opened={opened} close={close} />}
    </>
  );
};

export default HomePage;
