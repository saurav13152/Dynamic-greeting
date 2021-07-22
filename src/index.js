import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currdate = new Date();
var date = currdate.getHours();
var currtime = currdate.toLocaleTimeString();
let greeting = " ";
//inline CSS
const cSS = {};

if (date >= 1 && date < 12) {
  greeting = "Good Morning";
  cSS.color = "blue";
} else if (date >= 12 && date < 20) {
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
    <h2>
      <span style={cSS}>{greeting}</span>
    </h2>
    <p> Current Time -{currtime}</p>
  </>,
  document.getElementById("root")
);
