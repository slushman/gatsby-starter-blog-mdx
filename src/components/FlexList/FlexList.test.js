import { shallowFactory } from '../../../testutils';

import FlexList from './FlexList';

const defaultProps = {
	children: '',
	spacing: 'space-between',
};
const factory = shallowFactory(FlexList, defaultProps);

describe('<FlexList />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});

	describe('when given a different spacing value', () => {
		it('renders with the expected spacing value', () => {
			const givenSpacing = 'center';
			const wrapper = factory({
				spacing: givenSpacing,
			});

			expect.stringContaining(givenSpacing);
		});
	});
});
