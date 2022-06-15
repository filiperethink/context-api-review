import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};
function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, toggleThem] = useState<"dark" | "light">("dark");

  const onToggleThem = () => {
    toggleThem(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, toggleTheme: onToggleThem, name: "Filipe" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
