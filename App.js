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
// JSX => Babel transpiles it to React.creatElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1>Namaste React using JSX !</h1>;

console.log("jsxHeading:::", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

//  git config --global user.email "dnringe@gmail.com"
// git config --global user.name "dninge"
