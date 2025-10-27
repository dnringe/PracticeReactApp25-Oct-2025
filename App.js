import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX !
  </h1>
);
console.log("heading:::", heading);

const fn1 = () => true;
const fn2 = () => {
  return true;
};

//React functional component
const HeadingCoponent1 = () => {
  return (
    <>
      <h1 className="head">
        Namaste React Funcationl component with return !!
      </h1>
      <h2 className="head">
        Namaste React Funcationl component with return !!
      </h2>
    </>
  );
};

const HeadingCoponent2 = () => (
  <h1 className="head">Namaste React Funcationl component without return !!</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCoponent1 />);
