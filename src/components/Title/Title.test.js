import { shallowFactory } from '../../../testutils';

import Title from './Title';

const defaultProps = {
	title: '',
};
const factory = shallowFactory(Title, defaultProps);

describe('<Title />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundLink = wrapper.find('[to="/"]');

		expect(wrapper.exists()).toBe(true);
		expect(foundLink.exists()).toBe(true);
		expect(foundLink.prop('children')).toBe(defaultProps.title);
	});

	describe('when given a title', () => {
		it('should render with the expected title', () => {
			const givenTitle = 'asfhbvdjhfb';
			const wrapper = factory({
				title: givenTitle,
			});
			const foundLink = wrapper.find('[to="/"]');

			expect(foundLink.prop('children')).toBe(givenTitle);
		});
	});
});
