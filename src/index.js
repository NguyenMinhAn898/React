import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";

// 1
const name = "Nguyen Minh An";
const element = <h1>Hello, I am {name}</h1>;
// 2
const user = {
  firstName: "Nguyen Minh",
  lastName: "An",
};
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const element2 = <h1>Hello, My name is {formatName(user)}</h1>;
// 3
const element3 = React.createElement(
  "h1",
  { className: "text-center" },
  "Hello, My name is " + formatName(user)
);
// render
// ReactDOM.render(element, document.getElementById("root"));

// ReactDOM.render(element2, document.getElementById("root"));

ReactDOM.render(element3, document.getElementById("root"));

reportWebVitals();
