import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";

import TopPage from "./components/TopPage";
import Himejijo from "./components/Himejijo";
import Footer from "./components/Footer";
import Variables from "./components/Variables";

const AdditionalResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
  }
  button:focus {
    outline:0;
  }
`;

const MainContents = styled.main`
  min-height: calc(100vh - ${Variables.FOOTER_HEIGHT});
  width: 100vw;
  background-color: ${Variables.COLOR.BASE};
`;

ReactDOM.render(
  <>
    <Reset />
    <AdditionalResetStyle />
    <MainContents>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TopPage}></Route>
          <Route exact path="/himejijo" component={Himejijo}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </MainContents>
  </>,
  document.getElementById("root")
);
