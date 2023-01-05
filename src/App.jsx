import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import RoutesFnComp from "./RoutesFnComp";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <RoutesFnComp />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));

export default (el) => {
  ReactDOM.render(<App />, el);
};
