import React from 'react';
import { graphql } from 'gatsby';

import BlogPost from '../components/BlogPost';

const BlogPostTemplate = ( { data, location, pageContext } ) => (
	<BlogPost
		location={ location }
		next={ pageContext.next }
		post={ data.mdx }
		previous={ pageContext.previous }
		siteTitle={ data.site.siteMetadata.title }
	/>
);

export default BlogPostTemplate;

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
