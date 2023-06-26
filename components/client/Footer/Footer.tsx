"use client";

import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Grid,
  Title,
  List,
  Box,
} from "@mantine/core";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";
import ScrollTop from "@/components/common/Buttons/ScrollTop/ScrollTop";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colors.dark[8],
    color: "#fff",
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  wrapper: {
    width: rem(160),
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  footerLink: {
    color: theme.colors.gray[6],
    textDecoration: "none",
    "&:hover": {
      color: theme.colors.green[6],
    },
  },

  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: rem(10),
    [theme.fn.smallerThan("lg")]: {
      flexDirection: "column",
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <ScrollTop />
        <Box component="div">
          <Grid>
            <Grid.Col span={12} md={6} lg={3}>
              Logo
              <Text component="p">
                The home and elements needeed to create beatiful products.
              </Text>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={3}>
              <Title order={4}>Comapny</Title>
              <List listStyleType="none" mt={20}>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    About Us
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Career
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Store Location
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Our Blog
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="#" className={classes.footerLink}>
                    Reviews
                  </Link>
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={3}>
              <Title order={4}>Shop</Title>
              <List listStyleType="none" mt={20}>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Games & Video
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Phone & Tablet
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Computer & Laptop
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Sport Watch
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="#" className={classes.footerLink}>
                    Events
                  </Link>
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={3}>
              <Title order={4}>Support</Title>
              <List listStyleType="none" mt={20}>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    FAQ
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Reviews
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Contact Us
                  </Link>
                </List.Item>
                <List.Item mb={5}>
                  <Link href="#" className={classes.footerLink}>
                    Shopping
                  </Link>
                </List.Item>
              </List>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
      <Container size="lg" className={classes.footerBottom}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()} mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon variant="transparent" size="lg">
            <BsTwitter size={20} />
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg">
            <BsYoutube size={20} />
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg">
            <BiLogoInstagramAlt size={20} />
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg">
            <BsFacebook size={20} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
