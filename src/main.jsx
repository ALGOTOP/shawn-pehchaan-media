import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";          // your base Tailwind styles
import "./styles/custom.css";  // your custom gradients, animations, etc.

// ✅ React 18 root render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
