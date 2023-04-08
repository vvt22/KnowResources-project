import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResContextProvider } from "./context/ResContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResContextProvider>
      <App />
    </ResContextProvider>
  </React.StrictMode>
);
