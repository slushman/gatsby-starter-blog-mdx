import React from 'react';
import { graphql } from 'gatsby';

import BlogPostTemplate from './BlogPostTemplate';

const QueryBlogPostTemplate = ( { data, location, pageContext } ) => (
  <BlogPostTemplate
    location={ location }
    next={ pageContext.next }
    post={ data.mdx }
    postTitle={ post.frontmatter.title }
    previous={ pageContext.previous }
    siteTitle={ data.site.siteMetadata.title }
  />
);

export default QueryBlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`;
