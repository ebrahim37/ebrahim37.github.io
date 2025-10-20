// @ts-expect-error
import readingTime from 'reading-time/lib/reading-time';

import POSTS_AND_TAGS from '~/posts/posts.json';

export type Post = {
	slug: string,
	title: string,
	subtitle: string,
	tags: string[],
	timestamp: number,
	image: string,
};

export type Tag = {
	slug: string,
	name: string,
};

export const POSTS = POSTS_AND_TAGS.posts as Post[];
export const TAGS = POSTS_AND_TAGS.tags as Tag[];

const postContents = import.meta.glob('../posts/*.md', {
	query: '?raw',
	eager: true,
});

export const getPostContent = (slug: string): string => {
	const content = postContents[`../posts/${slug}.md`];
	if (!content)
		return '';
	return (content as any).default;
};

export const getReadingTime = (slug: string): { words: number, minutes: number } => {
	const fileContents = getPostContent(slug);
	const stats = readingTime(fileContents ?? '');
	return {
		words: stats.words,
		minutes: stats.minutes
	};
};
