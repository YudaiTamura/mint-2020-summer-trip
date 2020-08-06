import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
        }
      }
    }
  `);

  const title = props.pageTitle
    ? `${props.pageTitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title;

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="robots" content="noindex" />
    </Helmet>
  );
};
