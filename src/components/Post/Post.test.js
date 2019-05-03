import { shallowFactory } from '../../../testutils';

import Post from './Post';

const defaultProps = {
	date: '',
	excerpt: '',
	slug: '',
	title: '',
};
const factory = shallowFactory( Post, defaultProps );

describe('<Post />', () => {
  it( 'renders without crashing', () => {
		const wrapper = factory();

		expect( wrapper.exists() ).toBe( true );
	} );
} );
