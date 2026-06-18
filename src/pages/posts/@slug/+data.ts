import type { PageContextServer } from 'vike/types';
import { createMarkdownExit } from 'markdown-exit';
import Shiki from '@shikijs/markdown-exit';

import { getPost, type Post } from '~/utils/posts.ts';

const md = createMarkdownExit({
	html: true,
});

md.use(Shiki({
	theme: 'vitesse-dark',
}));

const slugifyHeading = (value: string): string => value
	.normalize('NFKD')
	.replace(/[\u0300-\u036f]/g, '')
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-|-$/g, '') || 'section';

md.renderer.rules.heading_open = (tokens, index, options, env, renderer) => {
	const token = tokens[index];
	if (token.tag !== 'h2' && token.tag !== 'h3')
		return renderer.renderToken(tokens, index, options, env);

	const heading = renderer.renderInlineAsText(tokens[index + 1].children ?? [], options, env);
	const slug = slugifyHeading(heading);
	const occurrence = (env.headingSlugs?.get(slug) ?? 0) + 1;
	(env.headingSlugs ??= new Map()).set(slug, occurrence);
	const id = occurrence === 1 ? slug : `${slug}-${occurrence}`;
	token.attrSet('id', id);

	return `${renderer.renderToken(tokens, index, options, env)}<a class="anchor" href="#${id}" aria-hidden="true"><span class="anchor-icon" aria-hidden="true"></span></a>`;
};

export type Data = {
	post: Post,
	html: string,
};

export async function data(pageContext: PageContextServer): Promise<Data> {
	const post = getPost(pageContext.routeParams.slug);

	return {
		post,
		html: await md.renderAsync(post.content),
	};
}