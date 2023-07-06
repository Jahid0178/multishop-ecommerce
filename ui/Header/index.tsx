import routes from "@/routes/routes";
import {
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  Menu,
  Paper,
  Transition,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";
import { dropdownMenus } from "../../data/data";
import TopNavbar from "./TopNavbar";
import { MdArrowRight } from "react-icons/md";
import Dropdown from "react-multilevel-dropdown";
import Image from "next/image";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "#3321C8",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#fff",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      color: "#000",
    },
  },

  linkActive: {
    "&": {
      color: theme.colors.green[4],
    },
  },
}));

const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(routes[0].id);
  const { classes, cx } = useStyles();

  const items = routes.map((route) => (
    <Link
      key={route.id}
      href={route.href}
      className={cx(classes.link, {
        [classes.linkActive]: active === route.id,
      })}
      onClick={() => {
        setActive(route.id);
        close();
      }}
    >
      {route.label}
    </Link>
  ));

  const dropdowns = dropdownMenus.map((menus) => {
    return (
      <Dropdown.Item key={menus.id}>
        <Image
          src={menus.icon}
          alt={menus.label}
          width={20}
          height={20}
          style={{ marginRight: "1rem" }}
        />
        {menus.label}
        <Dropdown.Submenu position="right">
          {menus.subItems?.map((items, ind) => (
            <Dropdown.Item key={ind}>
              <Link href="#" style={{ textDecoration: "none", color: "#000" }}>
                {items.label}
              </Link>
              <Dropdown.Submenu position="right">
                {items.subProducts?.map((subProduct, ind) => (
                  <Dropdown.Item key={ind}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {subProduct.label}
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Submenu>
            </Dropdown.Item>
          ))}
        </Dropdown.Submenu>
      </Dropdown.Item>
    );
  });

  return (
    <>
      <TopNavbar />
      <MantineHeader height={HEADER_HEIGHT} className={classes.root}>
        <Container className={classes.header} size="lg">
          <Group spacing={5} className={classes.links}>
            <Dropdown
              title="All"
              position="right"
              style={{
                background: "transparent",
                color: "#fff",
                boxShadow: "none",
              }}
            >
              {dropdowns}
            </Dropdown>

            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </MantineHeader>
    </>
  );
};

export default Header;
