import { shallowFactory } from '../../../testutils';

import SEO from './SEO';

/**
  meta: PropTypes.array,
 */

const defaultProps = {
	title: '',
};
const factory = shallowFactory( SEO, defaultProps );

describe('<SEO />', () => {
  it( 'renders without crashing', () => {
		const wrapper = factory();

		expect( wrapper.exists() ).toBe( true );
		expect( wrapper.prop('htmlAttributes').lang ).toBe( 'en' );
		expect( wrapper.prop('title') ).toBe( defaultProps.title );
		expect( wrapper.prop('titleTemplate') ).toBe( `%s | undefined` );
	} );

	describe( 'when given a lang value', () => {
		it( 'renders with the expected lang value', () => {
			const givenLang = 'fr';
			const wrapper = factory( {
				lang: givenLang,
			} );

			expect( wrapper.prop('htmlAttributes').lang ).toBe( givenLang );
		} );
	} );

	describe( 'when given a title', () => {
		it( 'renders with the expected title', () => {
			const givenTitle = 'sfvjhdfjd';
			const wrapper = factory( {
				title: givenTitle,
			} );

			expect( wrapper.prop('title') ).toBe( givenTitle );
		} );
	} );

	describe( 'when given a metaTitle', () => {
		it( 'renders with the expected metaTitle', () => {
			const givenMetaTitle = 'lbkjbjsfbv';
			const wrapper = factory( {
				metaTitle: givenMetaTitle,
			} );

			expect( wrapper.prop('titleTemplate') ).toBe( `%s | ${ givenMetaTitle }` );
		} );
	} );

	describe( 'when given an author', () => {
		it(' should render with the expected author in the meta', () => {
			const givenAuthor = 'kjqbkfbwkjbvef';
			const wrapper = factory( {
				author: givenAuthor,
			} );
			const foundAuthor = wrapper.prop( 'meta' ).filter( ( metaData ) => metaData.name === 'twitter:creator' );

			expect( foundAuthor[ 0 ].content ).toBe( givenAuthor );
		} );
	} );

	describe( 'when given an description', () => {
		it( 'should render with the expected description in the meta', () => {
			const givenDescription = 'ytqwfeuywgdjvhsbf';
			const wrapper = factory( {
				description: givenDescription,
			} );
			const foundDescription = wrapper.prop( 'meta' ).filter( ( metaData ) => metaData.name === 'description' );
			const foundOGDescription = wrapper.prop( 'meta' ).filter( ( metaData ) => metaData.property === 'og:description' );
			const foundTwitterDescription = wrapper.prop( 'meta' ).filter( ( metaData ) => metaData.name === 'twitter:description' );

			expect( foundDescription[ 0 ].content ).toBe( givenDescription );
			expect( foundOGDescription[ 0 ].content ).toBe( givenDescription );
			expect( foundTwitterDescription[ 0 ].content ).toBe( givenDescription );
		} );
	} );

	describe( 'when given keywords', () => {
		it( 'should render with the expected keywords in the meta', () => {
			const givenKeywords = ['one', 'two', 'three'];
			const wrapper = factory( {
				keywords: givenKeywords,
			} );
			const foundKeywords = wrapper.prop( 'meta' ).filter( ( metaData ) => metaData.name === 'keywords' );

			expect( foundKeywords[ 0 ].content ).toBe( givenKeywords.join( ', ' ) );
		} );
	} );

	describe( 'when given meta', () => {
		it( 'should render with the expected meta', () => {
			const givenMeta = [
				{
					name: 'one',
					content: 'wbgjhebrgv'
				},
				{
					name: 'two',
					content: 'ogjnfkb'
				},
				{
					name: 'three',
					content: 'pioqwofwhg'
				},
			];
			const wrapper = factory( {
				meta: givenMeta,
			} );
			const foundMeta1 = wrapper.prop( 'meta' ).filter( ( metaData ) => metaData.name === givenMeta[ 0 ].name );
			const foundMeta2 = wrapper.prop( 'meta' ).filter( ( metaData ) => metaData.name === givenMeta[ 1 ].name );
			const foundMeta3 = wrapper.prop( 'meta' ).filter( ( metaData ) => metaData.name === givenMeta[ 2 ].name );

			expect( foundMeta1[ 0 ].content ).toBe( givenMeta[ 0 ].content );
			expect( foundMeta2[ 0 ].content ).toBe( givenMeta[ 1 ].content );
			expect( foundMeta3[ 0 ].content ).toBe( givenMeta[ 2 ].content );
		} );
	} );
} );
