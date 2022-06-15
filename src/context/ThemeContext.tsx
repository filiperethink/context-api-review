import { createContext, useContext } from "react";

interface ThemeContextType {
  theme: "dark" | "light";
  name: string;
  toggleTheme: VoidFunction;
}

const ThemeContext = createContext<ThemeContextType>(null!);

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeContext, useTheme };
