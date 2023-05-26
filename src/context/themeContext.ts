import React, { createContext, ReactNode } from "react";
import { theme } from "../config/theme";

type ThemeContextType = {
  theme: typeof theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme,
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
