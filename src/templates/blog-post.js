import React from 'react';
import { graphql, Link } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm, scale } from '../utils/typography';

const BlogPostTemplate = ( { data, location, pageContext } ) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={ location } title={ siteTitle }>
      <SEO title={ post.frontmatter.title } description={ post.excerpt } />
      <h1>{ post.frontmatter.title }</h1>
      <p
        style={ {
          ...scale( -1 / 5 ),
          display: `block`,
          marginBottom: rhythm( 1 ),
          marginTop: rhythm( -1 ),
        } }
      >
        { post.frontmatter.date }
      </p>
      <MDXRenderer>{ post.code.body }</MDXRenderer>
      <hr
        style={ {
          marginBottom: rhythm( 1 ),
        } }
      />
      <Bio />

      <ul
        style={ {
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        } }
      >
        <li>
          { previous && (
            <Link to={ previous.fields.slug } rel="prev">
              ← { previous.frontmatter.title }
            </Link>
          ) }
        </li>
        <li>
          { next && (
            <Link to={ next.fields.slug } rel="next">
              { next.frontmatter.title } →
            </Link>
          ) }
        </li>
      </ul>
    </Layout>
  )
};

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
