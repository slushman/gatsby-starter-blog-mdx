import React from 'react';
import { graphql } from 'gatsby';

import BlogIndex from './BlogIndex';

const QueryBlogIndex = ( { data, location } ) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
		<BlogIndex
			location={ location }
			posts={ posts }
			siteTitle={ siteTitle }
		/>
  )
};

export default QueryBlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
