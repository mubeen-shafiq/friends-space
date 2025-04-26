"use client";

import Sider from "antd/es/layout/Sider";
import React, { CSSProperties } from "react";
import AppLogo from "../../common/app-logo";
import { SearchBox } from "../../common/search-box";
import { Avatar, List, Space } from "antd";

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
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export const RenderContactsList = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design. Avatar"
        />
      </List.Item>
    )}
  />
);

export const ChatsSidebar = () => {
  return (
    <Sider
      style={siderStyles}
      width="250px"
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
    >
      <Space size="middle" direction="vertical">
        <AppLogo />
        <SearchBox
          placeholder="Search Contacts"
          label="Search contacts"
          queryKey="search_contact"
        />
        <RenderContactsList />
      </Space>
    </Sider>
  );
};
