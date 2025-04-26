"use client";
import { Typography } from "antd";
import React, { CSSProperties } from "react";

const appLogoStyles: CSSProperties = {
  margin: "0.5rem 0px",
};

function AppLogo() {
  return (
    <div style={appLogoStyles}>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Friends Space
      </Typography.Title>
    </div>
  );
}

export default AppLogo;
