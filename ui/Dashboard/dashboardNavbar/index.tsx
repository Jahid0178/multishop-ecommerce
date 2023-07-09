import { IconFingerprint, IconGauge } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavLink from "./NavLink";

interface DashboardNavbarProps {
  navData: { path: string; routeName: string }[];
}
const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ navData }) => {
  // const {p/}=router

  return (
    <div>
      {navData.map((data, index) => {
        return (
          <div key={index}>
            <NavLink isNested={false} href={data.path}>
              {data.routeName}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardNavbar;
