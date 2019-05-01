import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import { rhythm } from '../../utils/typography';

const Bio = ( { author, avatar, social } ) => (
  <div
    style={ {
      display: `flex`,
      marginBottom: rhythm( 2.5 ),
    } }
  >
    <Image
      fixed={ avatar.childImageSharp.fixed }
      alt={ author }
      style={ {
        marginRight: rhythm( 1 / 2 ),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      } }
    />
    <p>
      Written by <strong>{ author }</strong> who lives and works in
      Minneapolis building silly things.
      { ` ` }
      <a href={ `https://twitter.com/${ social.twitter }` }>
        You should follow him on Twitter
      </a>
    </p>
  </div>
);

Bio.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
};

export default Bio;
