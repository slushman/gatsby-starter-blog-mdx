import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const NotFoundPage = ( { location } ) => {
  const title = '404: Not Found';
  return (
    <Layout location={ location } title={ title }>
      <SEO title={ title } />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
