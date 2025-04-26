import "@ant-design/v5-patch-for-react-19";

import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";
import AppThemeConfig from "@/components/providers/theme-config";
import { ThemeProvider } from "next-themes";
import { ChildrenPropsType } from "@/definitions/common";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "700", "900", "600", "800"],
});

export const metadata: Metadata = {
  title: "Friends Space",
  description: "Friends space chat application",
};

export default function RootLayout({ children }: ChildrenPropsType) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <AntdRegistry>
          <ThemeProvider storageKey="app-theme" forcedTheme="light">
            <AppThemeConfig>{children}</AppThemeConfig>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
