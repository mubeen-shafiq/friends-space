"use client";
import { Layout } from "antd";
import React from "react";
import { ChatsHeader } from "./header";

export const ChatsMainContent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Layout
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      <ChatsHeader />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};
