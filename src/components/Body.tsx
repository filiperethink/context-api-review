import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../App.css";

function Body() {
  const { theme, name } = useTheme();
  const classBoyd = theme === "dark" ? "body theme-light" : "body theme-dark";
  return <main className={classBoyd}>Main Content {name}</main>;
}

export default Body;
