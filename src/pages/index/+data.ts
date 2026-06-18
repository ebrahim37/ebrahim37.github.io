import type { PageContextServer } from 'vike/types';

import { type Post, getPosts } from '~/utils/posts.ts';

export type Data = {
	posts: Post[],
};

export function data(pageContext: PageContextServer): Data {
	return {
		posts: getPosts(),
	};
}