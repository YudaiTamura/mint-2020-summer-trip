import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';

import TopPage from '../components/TopPage';
import Himejijo from '../components/Himejijo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Variables from '../components/Variables';

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
  min-height: calc(100vh - ${Variables.FOOTER_HEIGHT});
  width: 100vw;
  background-color: ${Variables.COLOR.BASE};
`;

const Index: React.FC = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MainContents>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={TopPage}></Route>
            <Route exact path="/himejijo" component={Himejijo}></Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </MainContents>
    </>
  );
};

export default Index;
