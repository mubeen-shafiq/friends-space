import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chats | Friends Space",
  description: "Chats page of friends space",
};

async function ChatPage() {
  return (
    <div style={{ fontSize: "24px" }}>
      <button type="button">Toggle</button>
    </div>
  );
}

export default ChatPage;
