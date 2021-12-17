import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Container from "@mui/material/Container";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container maxWidth="L">
        <App />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
