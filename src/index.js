import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./App";
import { theme } from "./theme";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyles } from "./theme/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
