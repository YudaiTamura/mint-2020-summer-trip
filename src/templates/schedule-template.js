import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';

export default ({ data }) => {
  return (
    <Layout>
      <SEO pageTitle="スケジュール" />
      <KeyImg
        fluid={data.contentfulSchedule.eyecatch.fluid}
        alt={data.contentfulSchedule.eyecatch.description}
      />
      <Title>{data.contentfulSchedule.title}</Title>
      <Contents>{data.contentfulSchedule.contents.contents}</Contents>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    contentfulSchedule(id: { eq: $id }) {
      slug
      title
      contents {
        contents
      }
      eyecatch {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
      }
    }
  }
`;

const KeyImg = styled(Img)`
  width: 100vw;
  height: 50vh;
`;

const Title = styled.h1`
  width: 90%;
  margin: 2rem auto;
  font-family: serif;
  font-size: 2rem;
  text-decoration: underline;
`;

const Contents = styled.p`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 2rem;
  font-weight: 200;
  line-height: 1.6;
`;
