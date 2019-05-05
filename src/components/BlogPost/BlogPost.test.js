import { shallowFactory } from '../../../testutils';

import BlogPost from './BlogPost';

const defaultProps = {
	location: {
		pathname: '',
	},
	next: {
		fields: {
			slug: '',
		},
		frontmatter: {
			title: '',
		},
	},
	post: {
		code: {
			body: '',
		},
		excerpt: '',
		fields: {
			slug: '',
		},
		frontmatter: {
			date: '',
			title: '',
		},
	},
	previous: {
		fields: {
			slug: '',
		},
		frontmatter: {
			title: '',
		},
	},
	siteTitle: '',
};

const factory = shallowFactory(BlogPost, defaultProps);

describe('<BlogPost />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundNext = wrapper.find('[data-test="nextLink"]');
		const foundPrevious = wrapper.find('[data-test="previousLink"]');
		const foundSEO = wrapper.find('QuerySEO');
		const foundH1 = wrapper.find('h1');
		const foundPostDate = wrapper.find('[data-test="postDate"]');
		const foundContent = wrapper.find('[data-test="postContent"]');

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.prop('location').pathname).toBe(defaultProps.location.pathname);
		expect(wrapper.prop('title')).toBe(defaultProps.siteTitle);
		expect(foundNext.exists()).toBe(true);
		expect(foundNext.prop('to')).toBe(defaultProps.next.fields.slug);
		expect(foundNext.prop('children')[0]).toBe(`${ defaultProps.next.frontmatter.title }`);
		expect(foundPrevious.exists()).toBe(true);
		expect(foundPrevious.prop('to')).toBe(defaultProps.previous.fields.slug);
		expect(foundPrevious.prop('children')[1]).toBe(`${ defaultProps.previous.frontmatter.title }`);
		expect(foundSEO.prop('title')).toBe(defaultProps.post.frontmatter.title);
		expect(foundSEO.prop('description')).toBe(defaultProps.post.excerpt);
		expect(foundH1.prop('children')).toBe(defaultProps.post.frontmatter.title);
		expect(foundPostDate.prop('children')).toBe(defaultProps.post.frontmatter.date);
		expect(foundContent.prop('children')).toBe(defaultProps.post.code.body);
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

	describe('when given a siteTitle', () => {
		it('should render the Layout with the expected siteTitle', () => {
			const givenSitetitle = 'wrgebdgnb';
			const wrapper = factory({
				siteTitle: givenSitetitle,
			});

			expect(wrapper.prop('title')).toBe(givenSitetitle);
		});
	});

	describe('when given a next object', () => {
		it('should render the next Link with the expected to and slug', () => {
			const givenNext = {
				fields: {
					slug: 'egnsgtn',
				},
				frontmatter: {
					title: 'adsfanad',
				},
			};
			const wrapper = factory({
				next: givenNext,
			});
			const foundNext = wrapper.find('[data-test="nextLink"]');

			expect(foundNext.prop('children')[0]).toBe(givenNext.frontmatter.title);
		});
	});

	describe('when given a previous object', () => {
		it('should render the previous Link with the expected to and slug', () => {
			const givenPrevious = {
				fields: {
					slug: 'gpojktoyin',
				},
				frontmatter: {
					title: 'tkhkhj',
				},
			};
			const wrapper = factory({
				previous: givenPrevious,
			});
			const foundPrevious = wrapper.find('[data-test="previousLink"]');

			expect(foundPrevious.prop('children')[1]).toBe(givenPrevious.frontmatter.title);
		});
	});

	describe('when given a post object', () => {
		it('should render the previous Link with the expected to and slug', () => {
			const givenPost = {
				code: {
					body: 'oabflbndkjfgb',
				},
				excerpt: 'tqcwhgwvdc',
				fields: {
					slug: 'ohnpotkhmn',
				},
				frontmatter: {
					date: 'sdgwf',
					title: 'asfbdfgb',
				},
			};
			const wrapper = factory({
				post: givenPost,
			});
			const foundSEO = wrapper.find('QuerySEO');
			const foundH1 = wrapper.find('h1');
			const foundPostDate = wrapper.find('[data-test="postDate"]');
			const foundContent = wrapper.find('[data-test="postContent"]');

			expect(foundSEO.prop('title')).toBe(givenPost.frontmatter.title);
			expect(foundSEO.prop('description')).toBe(givenPost.excerpt);
			expect(foundH1.prop('children')).toBe(givenPost.frontmatter.title);
			expect(foundPostDate.prop('children')).toBe(givenPost.frontmatter.date);
			expect(foundContent.prop('children')).toBe(givenPost.code.body);
		});
	});
});
