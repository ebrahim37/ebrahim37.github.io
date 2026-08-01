import { type Post, getPosts } from '~/utils/posts.ts';

export type Data = {
	posts: Post[],
};

export function data(): Data {
	return {
		posts: getPosts(),
	};
}
