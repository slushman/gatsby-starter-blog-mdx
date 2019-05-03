import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from './SEO';

const QuerySEO = ( { description, lang, meta, keywords, title } ) => {
  const data = useStaticQuery( detailsQuery );

  return (
    <SEO
      author={ data.site.siteMetadata.author }
      description={ description || data.site.siteMetadata.description }
      lang={ lang }
      meta={ meta }
      metaTitle={ data.site.siteMetadata.title }
      keywords={ keywords }
      title={ title }
    />
  )
};

QuerySEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

QuerySEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default QuerySEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
