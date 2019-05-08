import React from 'react';
import PropTypes from 'prop-types';

const FlexList = ( { children } ) => (
	<ul
		style={ {
			display: `flex`,
			flexWrap: `wrap`,
			justifyContent: `space-between`,
			listStyle: `none`,
			padding: 0,
		} }
	>{ children }</ul>
);

FlexList.propTypes = {
	children: PropTypes.any.isRequired,
};

export default FlexList;
