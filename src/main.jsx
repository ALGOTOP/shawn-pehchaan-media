import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";          // ✅ Correct — lives directly in src/
import "./styles/custom.css";  // ✅ Optional — lives inside src/styles/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
