import type { PageContextServer } from 'vike/types';

import { renderMarkdown } from '~/utils/markdown.ts';
import { type PostSummary, getPost } from '~/utils/posts.ts';

export type Data = {
	post: PostSummary,
	html: string,
};

export async function data(pageContext: PageContextServer): Promise<Data> {
	const post = getPost(pageContext.routeParams.slug!);
	const { content, ...summary } = post;

	return {
		post: summary,
		html: await renderMarkdown(content),
	};
}
