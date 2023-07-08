"use client";

import './footer.css';

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
  Flex,
  Divider,
  Box,
  Input,
  Select,
  TextInput,
  Button,
} from "@mantine/core";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import FooterPaymentImage from "../../public/assets/footer-payment.jpg";
import Link from "next/link";
import Image from "next/image";
import Address from "./Address";
import { IconCurrencyDollar, IconWorld } from "@tabler/icons-react";
import FooterColOne from './FooterColOne';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colors.dark[8],
    color: "#fff",
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
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
    gap: rem(16),
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
      <Container size="xl">
        <div>
          <Grid>
            <Grid.Col span={12} md={6} lg={5}>
              {/* Firt Col Of Footer (Head office of the company) */}
              <FooterColOne />
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={7}>
              {/* Nested Grid  */}
              <Grid justify={"space-between"}>
                {/* Cole: 1 */}
                <Grid.Col span={12} md={6} lg={4}>
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
                {/* Cole: 2 */}
                <Grid.Col span={12} md={6} lg={4}>
                  <Title order={4}>Public Business</Title>
                  <List listStyleType="none" mt={20}>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Customer Bill of Rights
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Gift Sards
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Track Orders
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Recalls
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Team Member Services
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Delivery
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Product Service
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        How to Buy
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Food Delivery
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#" className={classes.footerLink}>
                        Donates
                      </Link>
                    </List.Item>
                  </List>
                </Grid.Col>
                {/* Cole: 3 */}
                <Grid.Col span={12} md={6} lg={4}>
                  <Title order={4}>Public</Title>
                  <List listStyleType="none" mt={20}>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Tract Orders
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Recalls
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Accessibility
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Team Mamber Services
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Seller Centre
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        International Selling
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Seller Centre
                      </Link>
                    </List.Item>
                    <List.Item mb={5}>
                      <Link href="#" className={classes.footerLink}>
                        Blog
                      </Link>
                    </List.Item>
                  </List>
                </Grid.Col>
              </Grid>

            </Grid.Col>
          </Grid>
        </div>
      </Container>
      <Container size="xl" className={classes.footerBottom} mt={50}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()} mantine.dev. All rights reserved.
        </Text>

        <Image
          src={FooterPaymentImage}
          alt="Payment Methods"
          width={250}
          height={20}
        />

        <Group spacing={0} position="right" noWrap>
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
