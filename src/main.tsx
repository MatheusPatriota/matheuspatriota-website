import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './i18n';

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
