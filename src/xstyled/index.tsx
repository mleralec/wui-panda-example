import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, WuiProvider } from "@welcome-ui/core";

import { App } from "./App";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WuiProvider theme={theme} useReset={false}>
      <App />
    </WuiProvider>
  </React.StrictMode>
);
