import React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";

import TopPage from "./TopPage";
import Footer from "./Footer";
import Variables from "./Variables";

const MainContents = styled.main`
  /* 画面の高さ - footerの高さ */
  min-height: calc(100vh - 40px);
  width: 100vw;
  background-color: ${Variables.COLOR.BASE};
`;

const App = () => {
  return (
    <>
      <Reset />
      <MainContents>
        <TopPage />
      </MainContents>
      <Footer />
    </>
  );
};

export default App;
