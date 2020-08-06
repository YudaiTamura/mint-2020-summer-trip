import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/layout';

export default ({ data }) => {
  return (
    <Layout>
      <SEO pageTitle="スケジュール" />
      <Img
        fluid={data.contentfulSchedule.eyecatch.fluid}
        alt={data.contentfulSchedule.eyecatch.description}
      />
      <h1>{data.contentfulSchedule.title}</h1>
      <p>{data.contentfulSchedule.slug}</p>
      <p>{data.contentfulSchedule.contents.contents}</p>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulSchedule {
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
