import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currdate = new Date();
currdate = currdate.getHours();
let greeting = "";
//inline CSS
const cSS = {};

if (currdate >= 1 && currdate < 12) {
  greeting = "Good Morning";
  cSS.color = "blue";
} else if (currdate >= 12 && currdate < 20) {
  greeting = "Good Afternoon";
  cSS.color = "orange";
} else {
  greeting = "Good Night";
  cSS.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1>Welcome Saurav</h1>
    </div>
    <h1>
      <span style={cSS}>{greeting}</span>
    </h1>
  </>,
  document.getElementById("root")
);
