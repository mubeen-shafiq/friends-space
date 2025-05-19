"use client";

import Sider from "antd/es/layout/Sider";
import React, { CSSProperties } from "react";
import AppLogo from "../../common/app-logo";
import { SearchBox } from "../../common/search-box";
import { Menu, Space } from "antd";
import {
  CheckOutlined,
  FieldTimeOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

const siderStyles: CSSProperties = {
  position: "sticky",
  height: "100%",
  overflow: "auto",
  top: 0,
  left: 0,
  padding: "1rem",
};

const data: ItemType<MenuItemType>[] = [
  {
    id: "favorites",
    label: "Favorites",
    type: "group",
    children: [
      {
        id: "object_id_1",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=0",
        name: "Contact 1",
        lastMessage: {
          content: "Hi There From Old Friend!",
          readAt: new Date("12-12-2024"),
          sentAt: new Date("11-12-2024"),
        },
      },
      {
        id: "object_id_2",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
        name: "Contact 1",
        lastMessage: {
          content: "Hi There From Old Friend!",
          readAt: null,
          sentAt: new Date("10-12-2024"),
        },
      },
      {
        id: "object_id_3",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
        name: "Contact 1",
        lastMessage: {
          content: "Hi There From Old Friend!",
          readAt: new Date("12-12-2024"),
          sentAt: new Date("11-12-2024"),
        },
      },
      {
        id: "object_id_4",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
        name: "Contact 1",
        lastMessage: {
          content: "Hi There From Old Friend!",
          readAt: null,
          sentAt: null,
        },
      },
    ],
  },
];

const MessageStatusIcons = {
  sent: {
    icon: CheckOutlined,
    style: { color: "gray" },
  },
  read: {
    icon: ReadOutlined,
  },
  enqueue: {
    icon: FieldTimeOutlined,
    style: { color: "gray" },
  },
};

const getMessageStatus = (readAt: Date | null, sentAt: Date | null) => {
  if (readAt) return "read";
  if (sentAt) return "sent";
  return "enqueue";
};

export const RenderContactsList = () => (
  <Menu mode="inline" theme="light" items={data} />
);

export const ChatsSidebar = () => {
  return (
    <Sider
      style={siderStyles}
      width="320px"
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
    >
      <Space style={{ width: "100%" }} size="middle" direction="vertical">
        <AppLogo />
        <SearchBox
          style={{ width: "100%" }}
          placeholder="Search Contacts"
          label="Search contacts"
          queryKey="search_contact"
        />
        <RenderContactsList />
      </Space>
    </Sider>
  );
};
