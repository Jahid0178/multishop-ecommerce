import {
  Box,
  Image,
  NavLink,
  Navbar,
  ScrollArea,
  Indicator,
  Avatar,
  Divider,
  Text,
} from "@mantine/core";
import { IconFingerprint, IconGauge } from "@tabler/icons-react";
import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
const DashboardNavbar = () => {
  return (
    <div>
      <Navbar height={600} p="xs" width={{ base: 300 }}>
        <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>
        <Box w={240}>
          <NavLink
            label="First parent link"
            icon={<IconGauge size="1rem" stroke={1.5} />}
            childrenOffset={28}
          >
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Nested parent link" childrenOffset={28}>
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Third child link" />
            </NavLink>
          </NavLink>

          <NavLink
            label="Second parent link"
            icon={<IconFingerprint size="1rem" stroke={1.5} />}
            childrenOffset={28}
            defaultOpened
          >
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Third child link" />
          </NavLink>
        </Box>

        {/* scorable navbar here */}
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          {/* scrolllllllllllllll */}
        </Navbar.Section>
        <Divider mb={7} size="lg" />
        <Navbar.Section>
          {/* Footer with user */}
          <Box
            style={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "36px",
              cursor: "pointer",
              gap: "10px",
            }}
          >
            <Box>
              <Indicator
                inline
                size={10}
                offset={7}
                // position="bottom-end"
                position="top-end"
                color="#08edd8fa"
                withBorder
              >
                <Avatar
                  size="lg"
                  radius="xl"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=100"
                />
              </Indicator>
              {/* <Image
                style={{ width: "100%", height: "100%", borderRadius: "50px" }}
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=50"
                alt="userimage"
              /> */}
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                width: "100%",
              }}
            >
              <Box>
                <Text size="md" style={{ margin: "2px 0px" }}>
                  Junaid
                </Text>
                <Text style={{ marginTop: "-7px" }} size="xs">
                  user.user@gail.com
                </Text>
              </Box>
              <AiOutlineDoubleRight />
            </Box>
          </Box>
          {/* Navbar Footer */}
        </Navbar.Section>
        <Divider mb={7} size="lg" />
      </Navbar>
    </div>
  );
};

export default DashboardNavbar;
