import { shallowFactory } from '../../../testutils';

import Code from './Code';

const defaultProps = {
	codeString: '<html></html>',
	language: 'javascript',
};
const factory = shallowFactory( Code, defaultProps );

describe('<Code />', () => {
  it( 'renders without crashing', () => {
		const wrapper = factory();
		const foundLiveProvider = wrapper.find('LiveProvider');
		const foundLiveEditor = wrapper.find('LiveEditor');
		const foundLiveError = wrapper.find('LiveError');
		const foundLivePreview = wrapper.find('LivePreview');
		console.log(wrapper.props());
		console.log(wrapper.debug());

		expect( wrapper.exists() ).toBe( true );
		expect( wrapper.prop('code') ).toBe( defaultProps.codeString );
		expect( wrapper.prop('language') ).toBe( defaultProps.language );
		expect( foundLiveProvider.exists() ).toBe( false );
		expect( foundLiveEditor.exists() ).toBe( false );
		expect( foundLiveError.exists() ).toBe( false );
		expect( foundLivePreview.exists() ).toBe( false );
	} );

	describe( 'when given react-live', () => {
		it( 'renders the LiveProvider', () => {
			const wrapper = factory( {
				'react-live': true,
			} );
			const foundLiveProvider = wrapper.find('LiveProvider');
			const foundLiveEditor = wrapper.find('LiveEditor');
			const foundLiveError = wrapper.find('LiveError');
			const foundLivePreview = wrapper.find('LivePreview');

			expect( foundLiveProvider.exists() ).toBe( true );
			expect( foundLiveEditor.exists() ).toBe( true );
			expect( foundLiveError.exists() ).toBe( true );
			expect( foundLivePreview.exists() ).toBe( true );
			expect( foundLiveProvider.prop('code') ).toBe( defaultProps.codeString );
		} );
	} );

	describe( 'when given a language', () => {
		it( 'renders the Highlight with the language prop as the given language', () => {
			const givenLang= 'graphql';
			const wrapper = factory( {
				language: givenLang,
			} );

			expect( wrapper.prop('language') ).toBe( givenLang );
		} );
	} );

	describe( 'when given a code string', () => {
		it( 'renders the Highlight with the code prop as the given code string', () => {
			const givenCodeString= 'console.log("yer mom");';
			const wrapper = factory( {
				codeString: givenCodeString,
			} );

			expect( wrapper.prop('code') ).toBe( givenCodeString );
		} );
	} );

	// describe( 'when given an avatar object', () => {
	// 	it( 'renders the Image with the fixed props from the given avatar object', () => {
	// 		const givenAvatar= {
	// 			childImageSharp: {
	// 				fixed: {
	// 					height: 100,
	// 					src: 'https://images.unsplash.com/photo-1556485226-cbbae56215cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
	// 					srcSet: '',
	// 					width: 100,
	// 				},
	// 			}
	// 		};
	// 		const wrapper = factory( {
	// 			avatar: givenAvatar,
	// 		} );
	// 		const foundImage = wrapper.find( 'Image' );

	// 		expect( foundImage.prop( 'fixed' ).height ).toBe( givenAvatar.childImageSharp.fixed.height );
	// 		expect( foundImage.prop( 'fixed' ).src ).toBe( givenAvatar.childImageSharp.fixed.src );
	// 		expect( foundImage.prop( 'fixed' ).srcSet ).toBe( givenAvatar.childImageSharp.fixed.srcSet );
	// 		expect( foundImage.prop( 'fixed' ).width ).toBe( givenAvatar.childImageSharp.fixed.width );
	// 	} );
	// } );
} );
