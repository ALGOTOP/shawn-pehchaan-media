// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";            // main app with AnimatePresence + routes
import "./styles/index.css";           // Tailwind base imports
import "./styles/custom.css";          // custom vars, gradients, misc helpers

// Create root and render App
const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element not found — ensure index.html contains <div id=\"root\"></div>");
}

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
