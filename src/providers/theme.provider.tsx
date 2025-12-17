"use client";

import { ThemeProvider } from "next-themes";
import { memo } from "react";

const ThemesProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme-preference"
    >
      {children}
    </ThemeProvider>
  );
};

export default memo(ThemesProviders);
