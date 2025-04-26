"use client";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";

function ChatWithUserPage() {
  useEffect(() => {
    // notFound();
    throw new Error("Error Incoming!")
  });
  return <div>ChatWithUserPage</div>;
}

export default ChatWithUserPage;
