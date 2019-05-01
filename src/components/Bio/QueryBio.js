import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Bio from './Bio';

const QueryBio = () => {
  const data = useStaticQuery( bioQuery );
  const { author, social } = data.site.siteMetadata;

  return (
    <Bio author={author} avatar={ data.avatar } social={ social } />
  )
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default QueryBio;
