import React from 'react';
import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Variables from './Variables';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    font-family: serif;
  }
  button:focus {
    outline:0;
  }
`;

const MainContents = styled.main`
  min-height: calc(100vh - ${Variables.HEADER_HEIGHT} - ${Variables.FOOTER_HEIGHT});
  width: 100vw;
  background-color: ${Variables.COLOR.BASE};
`;

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <MainContents>{children}</MainContents>
      <Footer />
    </>
  );
};

export default Layout;
