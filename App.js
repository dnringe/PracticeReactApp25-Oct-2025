import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Namaste React !"
);

console.log("heading:::", heading);

// JSX - HTML like or XML like systax
const jsxHeading = <h1>Namaste React using JSX !</h1>;

console.log("jsxHeading:::", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
