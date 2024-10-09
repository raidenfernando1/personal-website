import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

import App from "./layout";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics>
      <App />
    </Analytics>
  </StrictMode>
);

// strict mode removed!
