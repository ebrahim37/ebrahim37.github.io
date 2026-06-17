import { getTags } from '~/utils/posts.ts';

export function onBeforePrerenderStart() {
	return getTags().map(tag => `/tags/${tag.slug}`);
}