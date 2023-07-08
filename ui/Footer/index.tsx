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

import Link from "next/link";
import Image from "next/image";
import Address from "./Address";
import { IconCurrencyDollar, IconWorld } from "@tabler/icons-react";
import FooterColOne from './FooterColOne';
import SocialMedia from './SocialMedia';
import PaymentMathods from './PaymentMathods';
import FooterLinks from './FooterLinks';
import FooterColTow from './FooterColTow';
import FooterColThree from './FooterColThree';
import FooterColFor from './FooterColFor';

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
            <Grid.Col span={12} lg={5}>
              {/* Firt Col Of Footer (Head office of the company) */}
              <FooterColOne />
            </Grid.Col>
            <Grid.Col span={12} lg={7}>
              {/* Nested Grid  */}
              <Grid justify={"space-between"}>
                {/* Col: 1 */}
                <Grid.Col span={12} md={6} lg={4}>
                  {/* Second Col Of Footer (Comapny) */}
                  <FooterColTow />
                </Grid.Col>
                {/* Col: 2 */}
                <Grid.Col span={12} md={6} lg={4}>
                  {/* Third Col Of Footer (Public Business) */}
                  <FooterColThree />
                </Grid.Col>
                {/* Cole: 3 */}
                <Grid.Col span={12} md={6} lg={4}>
                  {/* Forth Col Of Footer (Public) */}
                  <FooterColFor />
                </Grid.Col>
              </Grid>

            </Grid.Col>
          </Grid>
        </div>
      </Container>
      
      {/* Payment Mathods Container  */}
      <Container size="lg">
        <PaymentMathods />
      </Container>

      {/* Social Media Container  */}
      <Container size="xl" className={classes.footerBottom} mt={10}>
        <SocialMedia />
      </Container>

      {/* Footer Bottom Links Container  */}
      <Container size="xl" mt={10}>
        <FooterLinks />
      </Container>
    </footer>
  );
};

export default Footer;
