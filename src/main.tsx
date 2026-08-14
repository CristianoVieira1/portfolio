import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { registerSW } from "virtual:pwa-register";
if (import.meta.env.PROD) {
  registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
