import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { IsLoggedInProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IsLoggedInProvider>
      <App />
    </IsLoggedInProvider>
  </StrictMode>
);
