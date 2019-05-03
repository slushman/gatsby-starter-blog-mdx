import React from 'react';
import PropTypes from 'prop-types';

import Bio from '../../components/Bio';
import Layout from '../../components/Layout';
import Post from '../../components/Post';
import SEO from '../../components/SEO';

const BlogIndex = ( { location, posts, siteTitle } ) => (
	<Layout location={ location } title={ siteTitle }>
		<SEO
			title="All posts"
			keywords={ [ `blog`, `gatsby`, `javascript`, `react` ] }
		/>
		<Bio />
		{ posts.map( ( { node } ) => (
			<Post
				date={ node.frontmatter.date }
				excerpt={ node.excerpt }
				slug={ node.fields.slug }
				title={ node.frontmatter.title || node.fields.slug }
			/>
		)
		) }
	</Layout>
);

BlogIndex.propTypes = {
	location: PropTypes.object.isRequired,
	posts: PropTypes.array.isRequired,
	siteTitle: PropTypes.string.isRequired,
};

export default BlogIndex;
