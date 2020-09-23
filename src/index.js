import React from "react";
import ReactDOM from "react-dom";

import Application from "@components/Application";

import "./styles/app.scss";

function Render() {
  const appRoot = document.getElementById("app");
  ReactDOM.render(<Application />, appRoot);
}

Render();
