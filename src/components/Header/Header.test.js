import { shallowFactory } from '../../../testutils';

import Header from './Header';

const defaultProps = {
	location: {
		pathname: '',
	},
	title: '',
};
const factory = shallowFactory(Header, defaultProps);

describe('<Header />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundP = wrapper.find('p');
		const foundTitle = foundP.find('Title');

		expect(wrapper.exists()).toBe(true);
		expect(foundP.exists()).toBe(true);
		expect(foundTitle.exists()).toBe(true);
		expect(foundTitle.prop('title')).toBe(defaultProps.title);
	});

	describe('when given pathname equals website root', () => {
		it('renders an H1 in the header', () => {
			const givenPathname = '/';
			const wrapper = factory( {
				location: { pathname: givenPathname }
			} );
			const foundH1 = wrapper.find('h1');

			expect(foundH1.exists()).toBe(true);
		});
	});

	describe('when given a title', () => {
		it('should render with the expected title', () => {
			const givenTitle = 'asfhbvdjhfb';
			const wrapper = factory({
				title: givenTitle,
			});
			const foundTitle = wrapper.find('Title');

			expect(foundTitle.prop('title')).toBe(givenTitle);
		});
	});
});
