import React, { ReactNode } from "react";
import { Avatar, Indicator, Menu } from "@mantine/core";
import { IconPhoto, IconTrash } from "@tabler/icons-react";
import { StaticImageData } from "next/image";
import { AiOutlineBell } from "react-icons/ai";

interface HeaderMenuProps {
  isAvatar: boolean;
  menuTrigger?: ReactNode;
  menuLabel: string;
  menuLabelDanger: string;
  menuItem: { Icon: React.ComponentType; label: string }[];
  dangerLabelColor: string;
  avatarUrl?: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  menuTrigger,
  menuLabel,
  menuLabelDanger,
  menuItem,
  isAvatar,
  dangerLabelColor,
  avatarUrl,
}) => {
  return (
    <div>
      <Menu trigger="hover" width={200}>
        <Menu.Target>
          {isAvatar ? (
            <Indicator
              inline
              size={12}
              offset={7}
              position="top-end"
              color="blue"
              withBorder
            >
              <Avatar
                radius={"xl"}
                style={{ cursor: "pointer" }}
                size="lg"
                src={avatarUrl}
              />
            </Indicator>
          ) : (
            menuTrigger // Render menuTrigger directly
          )}
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{menuLabel}</Menu.Label>
          {menuItem.map((data, index) => {
            const IconComponent = data.Icon; // Assign the component to a variable
            return (
              <Menu.Item key={index} icon={<IconComponent />}>
                {data.label}
              </Menu.Item>
            );
          })}

          <Menu.Divider />
          {isAvatar ? <Menu.Label>Danger zone</Menu.Label> : null}

          <Menu.Item color={dangerLabelColor} icon={<IconTrash size={14} />}>
            {menuLabelDanger}
          </Menu.Item>
        </Menu.Dropdown>
        <Menu.Divider />
      </Menu>
    </div>
  );
};

export default HeaderMenu;
