import path from 'node:path';
import { readFileSync, readdirSync } from 'node:fs';

import matter from 'gray-matter';
import readingTime from 'reading-time';

export type Post = {
	slug: string,
	title: string,
	subtitle: string,
	timestamp: number,
	image?: {
		alt: string,
		src: string,
	},
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
		image: data.imageSrc ? {
			alt: data.imageAlt,
			src: data.imageSrc,
		} : undefined,
		words: readingStats.words,
		minutes: Math.max(1, Math.round(readingStats.minutes)),
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
