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
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<DashboardNavbar />}
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Group position="center">
                <RingProgress
                  size={170}
                  thickness={16}
                  label={
                    <Text
                      size="xs"
                      align="center"
                      px="xs"
                      sx={{ pointerEvents: "none" }}
                    >
                      see your sell
                    </Text>
                  }
                  sections={[
                    { value: 40, color: "cyan", tooltip: "Documents – 40 Gb" },
                    { value: 25, color: "orange", tooltip: "Apps – 25 Gb" },
                    { value: 15, color: "grape", tooltip: "Other – 15 Gb" },
                  ]}
                />
              </Group>
            </Aside>
          </MediaQuery>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <DashboardHeader />
            </div>
          </Header>
        }
      >
        <Text>Resize app to see responsive navbar in action</Text>
      </AppShell>
    </div>
  );
};

export default DashBoardLayout;
