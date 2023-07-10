import { NavLinkPropsType } from "@/libs/types";
import { NavLink } from "@mantine/core";
import { IconGauge } from "@tabler/icons-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
export const NestedNav: React.FC<NavLinkPropsType> = ({ href, children }) => {
  return (
    <NavLink label="Nested parent link" childrenOffset={28}>
      <NavLink label={children} />
    </NavLink>
  );
};
const NavLinkCustom: React.FC<NavLinkPropsType> = ({ href, children }) => {
  const segment = useSelectedLayoutSegments();
  const active = href === `/${segment}`;
  return (
    <div>
      {/* <Link
        style={active ? { backgroundColor: "red" } : {}}
        href={`/dashboard${href}`}
      >
        {children}
      </Link> */}
      <NavLink
        label={children}
        icon={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink
          component="a"
          onClick={(e) => e.preventDefault()}
          href={`/dashboard${href}`}
          active={active ? active : false}
          label={children}
        />
      </NavLink>
    </div>
  );
};

export default NavLinkCustom;
