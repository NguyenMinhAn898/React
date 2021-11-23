import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import Form from "./Form";
import TextAria from "./Textaria";
import SelectList from "./Select";

// Helloworld
// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));

// ReactDOM.render(<Form />, document.getElementById("root"));

// ReactDOM.render(<TextAria />, document.getElementById("root"));

// ReactDOM.render(<SelectList />, document.getElementById("root"));

// ReactDOM.render(<input value="hi" />, document.getElementById("root"));

setTimeout(function () {
  ReactDOM.render(<input value={null} />, document.getElementById("root"));
}, 1000);

reportWebVitals();
