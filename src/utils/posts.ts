import path from 'node:path';
import { readFileSync, readdirSync } from 'node:fs';

import matter from 'gray-matter';
import readingTime from 'reading-time';

export type Tag = {
	slug: string,
	name: string
};

export type Post = {
	slug: string,
	title: string,
	subtitle: string,
	timestamp: number,
	tags: Tag[],
	image: string,
	words: number,
	minutes: number,
	content: string,
};

const postsDir = path.join(process.cwd(), 'posts');

export const getPost = (slug: string): Post => {
	const file = path.join(postsDir, slug + '.md');
	const { data, content } = matter(readFileSync(file, 'utf8'));
	const readingStats = readingTime(content);

	return {
		slug,
		title: data.title,
		subtitle: data.subtitle,
		timestamp: data.timestamp,
		tags: data.tags.map((x: string[]) => ({ slug: x[0], name: x[1] })),
		image: data.image,
		words: readingStats.words,
		minutes: +readingStats.minutes.toFixed(),
		content,
	};
};

export const getPosts = (): Post[] => {
	return readdirSync(postsDir)
		.filter(file => file.endsWith('.md'))
		.map(file => file.slice(0, -3))
		.map(getPost)
		.sort((a, b) => b.timestamp - a.timestamp);
};

export const getTags = (): Tag[] => {
	const tagsBySlug = new Map<string, Tag>();
	for (const post of getPosts())
		for (const tag of post.tags)
			tagsBySlug.set(tag.slug, tag);

	return [...tagsBySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug));
};
