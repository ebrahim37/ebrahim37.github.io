import { type PostSummary, getPosts } from '~/utils/posts.ts';

export type Data = {
	posts: PostSummary[],
};

export function data(): Data {
	return {
		posts: getPosts().map(({ content: _, ...post }) => post),
	};
}
