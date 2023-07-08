import { Navbar, ScrollArea } from "@mantine/core";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div>
      <Navbar height={600} p="xs" width={{ base: 300 }}>
        <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>

        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          {/* scrollable content here */}
        </Navbar.Section>

        <Navbar.Section>{/* Footer with user */}</Navbar.Section>
      </Navbar>
    </div>
  );
};

export default DashboardNavbar;
