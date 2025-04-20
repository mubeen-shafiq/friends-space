"use client";

import React from "react";
import { getAppTheme } from "@/lib/theme";
import { ConfigProvider } from "antd";
import { useTheme } from "next-themes";

function AppThemeConfig({ children }: Readonly<{ children: React.ReactNode }>) {
  const { theme } = useTheme();

  const themeConfig = React.useMemo(() => getAppTheme(theme), [theme]);

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
}

export default AppThemeConfig;
