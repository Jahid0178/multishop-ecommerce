import React from "react";
import {
  AppShell,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  RingProgress,
  Group,
} from "@mantine/core";
import DashboardNavbar from "../dashboardNavbar";
import DashboardHeader from "../dashBoardHeader";
//
const DashBoardLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState<boolean>(false);
  return (
    <div>
      <h1>hello dashboard lay</h1>
    </div>
  );
};

export default DashBoardLayout;
