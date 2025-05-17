"use client";

import Sider from "antd/es/layout/Sider";
import React, { CSSProperties } from "react";
import AppLogo from "../../common/app-logo";
import { SearchBox } from "../../common/search-box";
import { Avatar, List, Space } from "antd";
import Link from "next/link";

const siderStyles: CSSProperties = {
  position: "sticky",
  height: "100%",
  overflow: "auto",
  top: 0,
  left: 0,
  padding: "1rem",
};

const data = [
  {
    _id: "object_id_1",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=0",
    name: "Contact 1",
    lastMessage: { content: "Hi There From Old Friend!" },
  },
  {
    _id: "object_id_2",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    name: "Contact 1",
    lastMessage: { content: "Hi There From Old Friend!" },
  },
  {
    _id: "object_id_3",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
    name: "Contact 1",
    lastMessage: { content: "Hi There From Old Friend!" },
  },
  {
    _id: "object_id_4",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
    name: "Contact 1",
    lastMessage: { content: "Hi There From Old Friend!" },
  },
];

export const RenderContactsList = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item key={item._id}>
        <Link href={`/app/chat/${item._id}`} style={{ width: "100%" }}>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<p>{item.name}</p>}
            description={item.lastMessage.content}
          />
        </Link>
      </List.Item>
    )}
  />
);

export const ChatsSidebar = () => {
  return (
    <Sider
      style={siderStyles}
      width="280px"
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
