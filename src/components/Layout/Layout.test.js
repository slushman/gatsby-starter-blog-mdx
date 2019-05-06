import { shallowFactory } from '../../../testutils';

import Layout from './Layout';

const defaultProps = {
	location: {
		pathname: '',
	},
	title: '',
};
const factory = shallowFactory( Layout, defaultProps );

describe('<Layout />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundHeader = wrapper.find('Header');

		expect(wrapper.exists()).toBe(true);
		expect(foundHeader.exists()).toBe(true);
	});

	describe('when given a title', () => {
		it('should render with the expected title', () => {
			const givenTitle = 'kjbfvkbdjfb';
			const wrapper = factory({
				title: givenTitle,
			});
			const foundHeader = wrapper.find('Header');

			expect(foundHeader.prop('title')).toBe(givenTitle);
		});
	});
});
