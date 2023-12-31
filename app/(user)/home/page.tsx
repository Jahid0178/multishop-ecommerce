"use client";

import { products } from "@/libs/Data";
import Brand from "@/ui/Brand";
import CompanyProducts from "@/ui/CompanyProducts";
import ContactModal from "@/ui/Modals/ContactModal";
import PublicProducts from "@/ui/PublicProducts";
import SubscribeUs from "@/ui/SubscribeUs";
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
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { sellPreviewData } from "../../../data/data";
import SellPreviewCard from "../../../ui/SellPreviewCard/SellPreviewCard";
import ProductModal from "@/ui/Modals/product";

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
console.log("process.env.GOOGLE_CLIENT_ID", process.env.GOOGLE_CLIENT_ID);
console.log("clientSecret", process.env.GOOGLE_ClIENT_SECRET);
const HomePage = () => {
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
      <CompanyProducts products={products} />
      <PublicProducts products={products} />

      <Box component="section">
        <Container size="xl">
          <Brand />
        </Container>
      </Box>
      {/* Sell Preview Section */}
      <Box component="section">
        <Container size="xl">
          <Grid>
            {sellPreviewData.map((sellPreview) => {
              const { title } = sellPreview;
              return (
                <Grid.Col key={title} span={12} md={4}>
                  <SellPreviewCard data={sellPreview} />
                </Grid.Col>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <SubscribeUs />
      {opened && <ContactModal opened={opened} close={close} />}
      <ProductModal />
    </>
  );
};

export default HomePage;
