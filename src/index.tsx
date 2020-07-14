import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";

import TopPage from "./components/TopPage";
import Footer from "./components/Footer";
import Variables from "./components/Variables";

const AdditionalResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
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
      <TopPage />
      <Footer />
    </MainContents>
  </>,
  document.getElementById("root")
);
