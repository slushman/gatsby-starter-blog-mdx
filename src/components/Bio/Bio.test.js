import { shallowFactory } from '../../../testutils';

import Bio from './Bio';

const defaultProps = {
	author: 'CJ Wilcoxson',
	avatar: {
		childImageSharp: {
			fixed: {
				height: 50,
				src: '',
				srcSet: '',
				width: 50,
			},
		}
	},
	social: {
		twitter: 'cjwilcoxson',
	}
};
const factory = shallowFactory( Bio, defaultProps );

describe('<Bio />', () => {
  it( 'renders without crashing', () => {
		const wrapper = factory();
		const foundImage = wrapper.find( 'Image' );
		const foundTwitter = wrapper.find( 'a' );

		expect( wrapper.exists() ).toBe( true );
		expect( foundImage.prop( 'alt' ) ).toBe( defaultProps.author );
		expect( foundTwitter.prop( 'href' ) ).toBe( `https://twitter.com/${ defaultProps.social.twitter }` );
	} );

	describe( 'when given an author', () => {
		it( 'renders the alt attribute as the given author', () => {
			const givenAuthor= 'Dean Koontz';
			const wrapper = factory( {
				author: givenAuthor,
			} );
			const foundImage = wrapper.find( 'Image' );
			const foundTwitter = wrapper.find( 'a' );

			expect( foundImage.prop( 'alt' ) ).toBe( givenAuthor );
		} );
	} );

	describe( 'when given a twitter username', () => {
		it( 'renders the Twitter link with the given twitter username', () => {
			const givenAuthor= 'deankoontz';
			const wrapper = factory( {
				author: givenAuthor,
			} );
			const foundTwitter = wrapper.find( 'a' );

			expect( foundTwitter.prop( 'href' ) ).toBe( `https://twitter.com/${ defaultProps.social.twitter }` );
		} );
	} );

	describe( 'when given an avatar object', () => {
		it( 'renders the Image with the fixed props from the given avatar object', () => {
			const givenAvatar= {
				childImageSharp: {
					fixed: {
						height: 100,
						src: 'https://images.unsplash.com/photo-1556485226-cbbae56215cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
						srcSet: '',
						width: 100,
					},
				}
			};
			const wrapper = factory( {
				avatar: givenAvatar,
			} );
			const foundImage = wrapper.find( 'Image' );

			expect( foundImage.prop( 'fixed' ).height ).toBe( givenAvatar.childImageSharp.fixed.height );
			expect( foundImage.prop( 'fixed' ).src ).toBe( givenAvatar.childImageSharp.fixed.src );
			expect( foundImage.prop( 'fixed' ).srcSet ).toBe( givenAvatar.childImageSharp.fixed.srcSet );
			expect( foundImage.prop( 'fixed' ).width ).toBe( givenAvatar.childImageSharp.fixed.width );
		} );
	} );
} );
