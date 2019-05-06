import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import Bio from '../Bio';
import { rhythm, scale } from '../../utils/typography';

const Header = ( { location, title } ) => {
	const rootPath = `${ __PATH_PREFIX__ }/`;
	const isHome = location.pathname === rootPath;
	let output = '';

	if( isHome ) {
		output = (
			<h1
				style={ {
					...scale( 1.5 ),
					marginBottom: rhythm( 1.5 ),
					marginTop: 0,
				} }
			>
				<Title title={ title } />
			</h1>
		);
	} else {
		output = (
			<p
				style={ {
					fontFamily: `Montserrat, sans-serif`,
					marginTop: 0,
					marginBottom: rhythm( -1 ),
				} }
			>
				<Title title={ title } />
			</p>
		)
	};

	return (
		<header>
			<div
				style={ {
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
				 } }
			>
				{ output }
			</div>
		{ isHome && <Bio isHome={ isHome } /> }
		</header>
	);
}

Header.propTypes = {
	location: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
};

export default Header;
