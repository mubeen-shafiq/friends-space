"use client";
import { Button } from "antd";
import { useTheme } from "next-themes";

function ChatPage() {
  const { setTheme } = useTheme();
  return (
    <div>
      <Button type="primary" onClick={() => setTheme("light")}>
        Toggle Theme
      </Button>
    </div>
  );
}

export default ChatPage;
