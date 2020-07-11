import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import styled from "styled-components";

import TopPage from "./components/TopPage";
import Footer from "./components/Footer";
import Variables from "./components/Variables";

const MainContents = styled.main`
  /* 画面の高さ - footerの高さ */
  min-height: calc(100vh - 40px);
  width: 100vw;
  background-color: ${Variables.COLOR.BASE};
`;

ReactDOM.render(
  <>
    <Reset />
    <MainContents>
      <TopPage />
    </MainContents>
    <Footer />
  </>,
  document.getElementById("root")
);
