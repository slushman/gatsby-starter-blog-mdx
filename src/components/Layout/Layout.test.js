import { shallowFactory } from '../../../testutils';

import Layout from './Layout';

const defaultProps = {
	location: {
		pathname: '',
	},
};
const factory = shallowFactory( Layout, defaultProps );

describe('<Layout />', () => {
  it( 'renders without crashing', () => {
		const wrapper = factory();
		const foundH3 = wrapper.find( 'h3' );
		const foundLink = foundH3.find( `[to="/"]` );

		expect( wrapper.exists() ).toBe( true );
		expect( foundH3.exists() ).toBe( true );
		expect( foundLink.exists() ).toBe( true );
		expect( foundLink.prop('children') ).toBeFalsy();
	} );

	describe('when given pathname equals website root', () => {
		it('renders an H1 in the header', () => {
			const givenPathname = '/';
			const wrapper = factory( {
				location: { pathname: givenPathname }
			} );
			const foundH1 = wrapper.find( 'h1' );

			expect( foundH1.exists() ).toBe( true );
		});
	});

	describe( 'when given a title', () => {
		it( 'should render with the expected title', () => {
			const givenTitle = 'kjbfvkbdjfb';
			const wrapper = factory( {
				title: givenTitle,
			} );
			const foundH3 = wrapper.find( 'h3' );
			const foundLink = foundH3.find( `[to="/"]` );

			expect( foundLink.prop( 'children') ).toBe( givenTitle );
		} );
	} );
} );
