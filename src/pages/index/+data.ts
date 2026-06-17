import type { PageContextServer } from 'vike/types';

import { getPosts, type Post } from '~/utils/posts.ts';

export type Data = {
	posts: Post[],
};

export function data(pageContext: PageContextServer): Data {
	return {
		posts: getPosts(),
	};
}