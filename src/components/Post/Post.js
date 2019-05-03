import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { rhythm } from '../../utils/typography';

const Post = ( { date, excerpt, slug, title } ) => (
	<div key={ slug }>
		<h3
			style={ {
				marginBottom: rhythm( 1 / 4 ),
			} }
		>
			<Link style={ { boxShadow: `none` } } to={ slug }>
				{ title }
			</Link>
		</h3>
		<small>{ date }</small>
		<p dangerouslySetInnerHTML={ { __html: excerpt } } />
	</div>
);

Post.propTypes = {
	date: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Post;
