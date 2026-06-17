import type { PageContextServer } from 'vike/types';
import { micromark } from 'micromark';

import { getPost, type Post } from '~/utils/posts.ts';

export type Data = {
	post: Post,
	html: string,
};

export function data(pageContext: PageContextServer): Data {
	const post = getPost(pageContext.routeParams.slug);

	return {
		post,
		html: micromark(post.content),
	};
}