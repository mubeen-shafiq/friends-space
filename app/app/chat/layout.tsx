import { Layout } from "antd";

import { ChatsMainContent } from "@/app/components/app/chats/main-content";
import { ChatsSidebar } from "@/app/components/app/chats/sidebar";
import { ChildrenPropsType } from "@/definitions/common";

function ChatsLayout({ children }: ChildrenPropsType) {
  return (
    <Layout hasSider style={{ overflow: "hidden", height: "100%" }}>
      <ChatsSidebar />
      <ChatsMainContent>{children}</ChatsMainContent>
    </Layout>
  );
}

export default ChatsLayout;
