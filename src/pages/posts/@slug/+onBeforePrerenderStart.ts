import { getPosts } from '~/utils/posts.ts';

export function onBeforePrerenderStart() {
	return getPosts().map(post => `/posts/${post.slug}`);
}