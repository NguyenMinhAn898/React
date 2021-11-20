import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// example one
function Welcome(props) {
  return <h1>Hello, My name is {props.name}</h1>;
}
const element = <Welcome name="Nguyen Minh An" />;
ReactDOM.render(element, document.getElementById("root"));

// Example two
function App() {
  return (
    <div>
      <Welcome name="Nguyễn Minh An" />
      <Welcome name="Nguyễn " />
      <Welcome name="Nguyễn Đình " />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// Example three
const user = {
  author: {
    userDetail: {
      name: "Nguyễn Minh An",
      avatarUrl:
        "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
    },
    role: "Supper Admin",
  },
  text: "Hello world",
};

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.user.author} />
      <div className="Comment-text">{props.user.text}</div>
      {/* <div className="Comment-date">{formatDate(props.date)}</div> */}
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <p>Hello , {props.author.role}</p>
      <Avatar userDetail={props.author.userDetail} />
      <div className="UserInfo-name">{props.author.userDetail.name}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.userDetail.avatarUrl}
      alt={props.userDetail.name}
    />
  );
}
ReactDOM.render(<Comment user={user} />, document.getElementById("root"));

reportWebVitals();
