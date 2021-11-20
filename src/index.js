import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { Form, Toggle } from "./Event";
import reportWebVitals from "./reportWebVitals";

// Bottom
ReactDOM.render(<Form />, document.getElementById("root"));
// Event Toggle
ReactDOM.render(<Toggle />, document.getElementById("root"));

reportWebVitals();
