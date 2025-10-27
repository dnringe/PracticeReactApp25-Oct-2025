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
const Title = () => {
  return (
    <div>
      <h1 className="head">Titel !!</h1>
    </div>
  );
};

const number = 100;

/* component inside component is called component composition */
const HeadingCoponent = () => (
  <div className="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="head">
      Namaste React Funcationl component without return !!
    </h1>
    <h2>JS Expression {2 * number}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCoponent />);
