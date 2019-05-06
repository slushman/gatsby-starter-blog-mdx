import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import { contentWidth } from './layout-styles';

const Layout = ( { children, location, title } ) => {
  return (
    <div style={ contentWidth }>
      <Header
        location={ location }
        title={ title }
      />
      <main>
      { children }
      </main>
      <footer>
        © { new Date().getFullYear() }, Built with
        { ` ` }
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
