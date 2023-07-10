import {
  Avatar,
  Box,
  Button,
  Divider,
  Image,
  Indicator,
  MediaQuery,
  Menu,
  Text,
  TextInput,
} from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
  IconBell,
} from "@tabler/icons-react";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";

import HeaderMenu from "./HeaderMenu";
let avatarUrl =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=70&q=70";
const DashboardHeader = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <Box style={{ margin: "10px", textAlign: "center" }}>
      {matches ? (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            radius="lg"
            style={{ width: "70px", height: "70px" }}
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
            alt="logo"
          />
          <TextInput
            radius="xl"
            size="md"
            placeholder="Search ....."
            sx={{ maxWidth: "400px", width: "100%" }}
            rightSection={
              <IconSearch size={25} color="gray" cursor="pointer" />
            }
          />

          <Box style={{ display: "flex", gap: "50px", alignItems: "center" }}>
            <HeaderMenu
              isAvatar={false}
              menuTrigger={<IconBell size={30} cursor="pointer" />}
              menuLabel="Notification"
              menuItem={[{ Icon: IconPhoto, label: "Profile" }]}
              menuLabelDanger="See all Notification"
              dangerLabelColor="#476574"
            />
            <HeaderMenu
              isAvatar={true}
              menuLabel="Profile"
              menuItem={[{ Icon: IconPhoto, label: "Profile" }]}
              menuLabelDanger="Delete my account"
              dangerLabelColor="red"
              avatarUrl={avatarUrl}
            />
          </Box>
        </Box>
      ) : (
        <>
          <h1>hello</h1>
        </>
      )}

      <Divider my="sm" />
    </Box>
  );
};

export default DashboardHeader;
