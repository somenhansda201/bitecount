/**
 * ------------------------------------------------------------
 * BiteCount AI Frontend
 * ------------------------------------------------------------
 *
 * Application entry point.
 *
 * Responsibilities:
 * - Render the React application.
 * - Configure React Router.
 * - Initialize Google OAuth Provider.
 * - Load global styles.
 *
 * Author: Somen Hansda
 * Project: BiteCount AI
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./index.css";

import { SidebarProvider } from "./context/SidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>

        <SidebarProvider>
          <App />
        </SidebarProvider>

      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);