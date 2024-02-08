import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Calculator from "./Calculator";
import Tables from "./Tables";

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<Calculator />, document.getElementById("table1"));

ReactDOM.render(<Tables />, document.getElementById("tables"));
