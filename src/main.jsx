// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Bootstrap CSS (sabse upar)
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
