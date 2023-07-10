import { IconFingerprint, IconGauge } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavLink from "./NavLink";
import { AiOutlineAppstore } from "react-icons/ai";
import { Box, Text } from "@mantine/core";
import { ScrollArea } from "@mantine/core";
import { useSelectedLayoutSegments } from "next/navigation";

interface DashboardNavbarProps {
  navData: { path: string; routeName: string }[];
}
const DashboardNavbar = () => {
  // const {p/}=router
  const segment = useSelectedLayoutSegments();
  let href = "/dashboard";
  const active = href === `/${segment}`;
  console.log("navlink active", segment, active);
  let navData = [
    { path: "/react", routeName: "React" },
    {
      path: "/js",
      routeName: "JS",
    },
  ];
  return (
    <ScrollArea type="always" h={450}>
      <Link
        href="/dashboard"
        style={{ textDecoration: "none", color: "#4C515B" }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "4px",
            cursor: "pointer",
          }}
        >
          <AiOutlineAppstore color="#4C515B" size={26} />
          <Text>DASHBOARD</Text>
        </Box>
      </Link>

      {navData.map((data, index) => {
        return (
          <div key={index}>
            <NavLink href={data.path}>{data.routeName}</NavLink>
          </div>
        );
      })}
      {/* <NavLink nested={navData} header="first test" /> */}
    </ScrollArea>
  );
};

export default DashboardNavbar;
