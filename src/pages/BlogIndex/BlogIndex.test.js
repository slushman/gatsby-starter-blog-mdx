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
  it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.prop('location').pathname).toBe(defaultProps.location.pathname);
		expect(wrapper.prop('title')).toBe(defaultProps.siteTitle);
	});

	describe('when given a location pathname', () => {
		it('should render the Layout with the expected pathname', () => {
			const givenPathname = 'wrgebdgnb';
			const wrapper = factory({
				location: {
					pathname: givenPathname
				}
			});

			expect(wrapper.prop('location').pathname).toBe(givenPathname);
		});
	});

	describe('when given some posts', () => {
		it('should render each post', () => {
			const testPost1 = {
				excerpt: 'dgnfgn',
				fields: {
					slug: 'sdgafn',
				},
				frontmatter: {
					date: 'afbdb',
					title: 'fgmnfhm',
				},
			};
			const testPost2 = {
				excerpt: 'tyyuk',
				fields: {
					slug: 'erhryj',
				},
				frontmatter: {
					date: 'srjtyhm',
					title: 'fhmghm',
				},
			};
			const wrapper = factory({
				posts: [
					{
						node: testPost1,
					},
					{
						node: testPost2,
					},
				],
			});
			const foundPosts = wrapper.find('Post');
			const foundPost1 = wrapper.find(`[slug="${ testPost1.fields.slug }"]`);
			const foundPost2 = wrapper.find(`[slug="${ testPost2.fields.slug }"]`);

			expect(foundPosts).toHaveLength(2);
			expect(foundPost1.exists()).toBe(true);
			expect(foundPost2.exists()).toBe(true);
		});
	});

	describe('when given a siteTitle', () => {
		it('should render the Layout with the expected siteTitle', () => {
			const givenSitetitle = 'wrgebdgnb';
			const wrapper = factory({
				siteTitle: givenSitetitle,
			});

			expect(wrapper.prop('title')).toBe(givenSitetitle);
		});
	});
});
