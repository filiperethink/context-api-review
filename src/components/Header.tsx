import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../App.css";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const classHeader =
    theme === "dark" ? "header theme-dark" : "header theme-light";
  return (
    <header className={classHeader}>
      <h3>Context Api - {theme}</h3>
      <button onClick={toggleTheme}>Trocar tema</button>
    </header>
  );
}

export default Header;
