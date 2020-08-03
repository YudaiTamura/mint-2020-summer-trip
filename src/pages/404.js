import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <StyledSection className="404">URL間違えとるで</StyledSection>
    </Layout>
  );
};

const StyledSection = styled.section`
  font-family: serif;
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin: auto;
  padding-top: 50%;
`;
