import React from 'react';
import { Link } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';

import Bio from '../../components/Bio';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { rhythm, scale } from '../../utils/typography';

const BlogPostTemplate = ( { location, next, post, previous, siteTitle } ) => (
  <Layout location={ location } title={ siteTitle }>
    <SEO title={ post.frontmatter.title } description={ post.excerpt } />
    <h1>{ post.frontmatter.title }</h1>
    <p
      data-test="postDate"
      style={ {
        ...scale( -1 / 5 ), 
        display: `block`,
        marginBottom: rhythm( 1 ),
        marginTop: rhythm( -1 ),
      } }
    >
      { post.frontmatter.date }
    </p>
    <MDXRenderer data-test="postContent">{ post.code.body }</MDXRenderer>
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
          <Link data-test="previousLink" to={ previous.fields.slug } rel="prev">
            ← { previous.frontmatter.title }
          </Link>
        ) }
      </li>
      <li>
        { next && (
          <Link data-test="nextLink" to={ next.fields.slug } rel="next">
            { next.frontmatter.title } →
          </Link>
        ) }
      </li>
    </ul>
  </Layout>
);

BlogPostTemplate.propTypes = {
  location: PropTypes.object.isRequired,
  next: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  previous: PropTypes.object.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default BlogPostTemplate;
