import type { PageContextServer } from 'vike/types';

import { type Tag, type Post, getTags, getPosts } from '~/utils/posts.ts';

export type Data = {
	tag: Tag,
	posts: Post[],
};

export function data(pageContext: PageContextServer): Data {
	const tag = getTags().find(tag => tag.slug === pageContext.routeParams.tag)!;

	return {
		tag,
		posts: getPosts().filter(post => post.tags.some(x => x.slug === tag.slug)),
	};
}