import { NavLinkPropsType } from "@/libs/types";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

const NavLink: React.FC<NavLinkPropsType> = ({ href, children }) => {
  const segment = useSelectedLayoutSegments();
  const active = href === `/${segment}`;
  console.log("navlink active", href, active);
  return (
    <div>
      <Link
        style={active ? { backgroundColor: "red" } : {}}
        href={`/dashboard${href}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
