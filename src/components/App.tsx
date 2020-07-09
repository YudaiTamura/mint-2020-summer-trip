import React from "react";
import { Reset } from "styled-reset";
import CSS from "csstype";

import Footer from "./Footer";
import Variables from "./Variables";

const App = () => {
  const minHeight: CSS.Properties = {
    minHeight: "756px",
    backgroundColor: Variables.COLOR.BASE,
  };

  return (
    <>
      <Reset />
      <h1>Hello, React!</h1>
      <h2 style={minHeight}>github actionsテスト</h2>
      <Footer />
    </>
  );
};

export default App;
