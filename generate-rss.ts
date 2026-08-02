import { writeFileSync } from 'node:fs';
import path from 'node:path';

import { Feed } from 'feed';

import { getPosts } from './src/utils/posts.ts';
import { renderMarkdown } from './src/utils/markdown.ts';

const author = {
	name: 'Ebrahim Haghshenas',
	link: 'https://ebra.dev',
};
const feed = new Feed({
	title: author.name,
	id: author.link,
	link: author.link,
	description: `Posts by ${author.name}.`,
	language: 'en',
	author,
	feedLinks: { rss: `${author.link}/rss.xml` },
});

for (const post of getPosts()) {
	feed.addItem({
		title: post.title,
		link: `${author.link}/posts/${post.slug}`,
		date: new Date(post.timestamp),
		guid: post.slug,
		description: post.subtitle,
		content: await renderMarkdown(post.content),
		author: [author],
	});
}

writeFileSync(path.join(process.cwd(), 'docs', 'rss.xml'), feed.rss2());
