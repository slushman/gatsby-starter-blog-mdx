import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Title = ( { title } ) => (
	<Link
		style={ {
			boxShadow: `none`,
			textDecoration: `none`,
			color: `inherit`,
		} }
			to={ `/` }
		>
		{ title }
	</Link>
);

Title.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Title;
