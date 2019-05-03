import { shallowFactory } from '../../../testutils';

import NotFoundPage from './404';

const defaultProps = {
	location: {
		pathname: '',
	},
};
const factory = shallowFactory( NotFoundPage, defaultProps );

describe('<NotFoundPage />', () => {
  it( 'renders without crashing', () => {
		const wrapper = factory();

		expect( wrapper.exists() ).toBe( true );
	} );
} );
