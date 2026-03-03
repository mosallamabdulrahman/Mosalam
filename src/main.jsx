import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { useTheme } from "./hooks/useTheme";
import "./index.css";

function Root() {
  const { toggleTheme } = useTheme();
  return (
    <BrowserRouter>
      <App onToggleTheme={toggleTheme} />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
