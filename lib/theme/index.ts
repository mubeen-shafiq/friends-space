import { theme, ThemeConfig } from "antd";

export const getAppTheme = (currentTheme?: string): ThemeConfig => {
  // convert system theme to dark or light based on system preference.
  if (currentTheme === "system") {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";
  }

  const selectedTheme =
    currentTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return {
    theme: selectedTheme,
  } as ThemeConfig;
};
