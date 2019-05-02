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
} );
