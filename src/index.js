import React from "react";
import { render } from "react-dom";
import App from "./app";
import { GlobalStyle } from "./globalStyle";
import "normalize.css";
render(
  <>
    {" "}
    <GlobalStyle /> <App />{" "}
  </>,
  document.getElementById("root")
);
