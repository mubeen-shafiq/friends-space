"use client";
import { Layout } from "antd";
import React from "react";

const { Sider, Header, Content } = Layout;

function ChatsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Layout hasSider style={{ overflow: "auto", height: "100%" }}>
      <Sider
        style={{
          position: "sticky",
          height: "100%",
          top: 0,
          left: 0,
        }}
        theme="light"
      >
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar Chats Sidebar
        Chats Sidebar Chats Sidebar
      </Sider>
      <Layout
        style={{
          height: "100%",
        }}
      >
        <Header
          style={{
            position: "sticky",
            top: 0,
            width: "100%",
            color: "#fff",
            background: "#555",
          }}
        >
          Chats Header
        </Header>
        <Content
          style={{
            minHeight: "1600px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default ChatsLayout;
