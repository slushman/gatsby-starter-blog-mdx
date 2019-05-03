import { shallowFactory } from '../../../testutils';

import BlogIndex from './BlogIndex';

const defaultProps = {
	location: {
		pathname: '',
	},
	posts: [],
	siteTitle: ''
};
const factory = shallowFactory( BlogIndex, defaultProps );

describe('<BlogIndex />', () => {
  it( 'renders without crashing', () => {
		const wrapper = factory();

		expect( wrapper.exists() ).toBe( true );
	} );
} );
