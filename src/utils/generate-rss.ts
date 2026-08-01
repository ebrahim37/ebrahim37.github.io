import { writeFileSync } from 'node:fs';
import path from 'node:path';

import { getPosts } from './posts.ts';

const siteUrl = 'https://ebra.dev';
const escapeXml = (value: string) => value
	.replaceAll('&', '&amp;')
	.replaceAll('<', '&lt;')
	.replaceAll('>', '&gt;')
	.replaceAll('"', '&quot;')
	.replaceAll("'", '&apos;');

const posts = getPosts();
const items = posts.map(post => {
	const url = `${siteUrl}/posts/${post.slug}`;

	return `\t\t<item>
\t\t\t<title>${escapeXml(post.title)}</title>
\t\t\t<link>${url}</link>
\t\t\t<guid>${url}</guid>
\t\t\t<description>${escapeXml(post.subtitle)}</description>
\t\t\t<pubDate>${new Date(post.timestamp).toUTCString()}</pubDate>
\t\t</item>`;
}).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
\t<channel>
\t\t<title>Ebrahim Haghshenas</title>
\t\t<link>${siteUrl}</link>
\t\t<description>Posts by Ebrahim Haghshenas.</description>
\t\t<language>en</language>
\t\t<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
\t</channel>
</rss>
`;

writeFileSync(path.join(process.cwd(), 'docs', 'rss.xml'), rss);
