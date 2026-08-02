import { writeFileSync } from 'node:fs';
import path from 'node:path';

import { Feed } from 'feed';

import { renderMarkdown } from './src/utils/markdown.ts';
import { getPosts } from './src/utils/posts.ts';

const siteUrl = 'https://ebra.dev';
const feedUrl = `${siteUrl}/rss.xml`;
const author = {
	name: 'Ebrahim Haghshenas',
	link: siteUrl,
};
const posts = getPosts();
const feed = new Feed({
	title: author.name,
	description: `Posts by ${author.name}.`,
	id: siteUrl,
	link: siteUrl,
	feed: feedUrl,
	feedLinks: { rss: feedUrl },
	language: 'en',
	updated: posts[0] ? new Date(posts[0].timestamp) : new Date(),
	author,
});

for (const post of posts) {
	const url = `${siteUrl}/posts/${post.slug}`;
	const html = await renderMarkdown(post.content);

	feed.addItem({
		title: post.title,
		id: url,
		guid: url,
		link: url,
		description: html,
		content: html,
		date: new Date(post.timestamp),
	});
}

writeFileSync(path.join(process.cwd(), 'docs', 'rss.xml'), feed.rss2());
