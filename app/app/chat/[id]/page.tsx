import React from "react";

async function ChatWithUserPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return <div>Chatting with {params.id}</div>;
}

export default ChatWithUserPage;
