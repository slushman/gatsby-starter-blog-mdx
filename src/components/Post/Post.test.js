import { shallowFactory } from '../../../testutils';

import Post from './Post';

const defaultProps = {
	date: '',
	excerpt: '',
	slug: '',
	title: '',
};
const factory = shallowFactory(Post, defaultProps);

describe('<Post />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundSmall = wrapper.find('[data-test="postDate"]');
		const foundP = wrapper.find('[data-test="postExcerpt"]');
		const foundLink = wrapper.find(`[to="${ defaultProps.slug }"]`);

		expect(wrapper.exists()).toBe(true);
		expect(foundP.prop('dangerouslySetInnerHTML').__html).toBe(defaultProps.excerpt);
		expect(foundSmall.prop('children')).toBe(defaultProps.date);
		expect(foundLink.exists()).toBe(true);
		expect(foundLink.prop('children')).toBe(defaultProps.title);
	});

	describe('when given a date', () => {
		it('should render with that expected date', () => {
			const givenDate = 'February 22, 2010';
			const wrapper = factory({
				date: givenDate,
			});
			const foundSmall = wrapper.find('[data-test="postDate"]');

			expect(foundSmall.prop('children')).toBe(givenDate);
		});
	});
	
	describe('when given an excerpt', () => {
		it('should render with the expected excerpt', () => {
			const givenExcerpt = 'iuabdbksbdjlbkdf';
			const wrapper = factory({
				excerpt: givenExcerpt,
			});
			const foundP = wrapper.find('[data-test="postExcerpt"]');

			expect(foundP.prop('dangerouslySetInnerHTML').__html).toBe(givenExcerpt);
		});
	});
	
	describe('when given a slug', () => {
		it('should render with the expected slug', () => {
			const givenSlug = 'ergegtntd';
			const wrapper = factory({
				slug: givenSlug,
			});
			const foundLink = wrapper.find(`[to="${ givenSlug }"]`);

			expect(foundLink.exists()).toBe(true);
		});
	});

	describe('when given a title', () => {
		it('should render with the expected title', () => {
			const givenTitle = 'ergegtntd';
			const wrapper = factory({
				title: givenTitle,
			});
			const foundLink = wrapper.find(`[to="${ defaultProps.slug }"]`);

			expect(foundLink.exists()).toBe(true);
			expect(foundLink.prop('children')).toBe(givenTitle);
		});
	});
});
