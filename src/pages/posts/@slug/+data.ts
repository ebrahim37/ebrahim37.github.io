import type { PageContextServer } from 'vike/types';
import { createMarkdownExit } from 'markdown-exit';
import Shiki from '@shikijs/markdown-exit';

import { type Post, getPost } from '~/utils/posts.ts';

// Allow figures and other purpose-built HTML in Markdown posts.
const md = createMarkdownExit({
	html: true,
});

md.use(Shiki({
	theme: 'vitesse-dark',
	// pass title="..." from code block to transformer
	parseMetaString(meta) {
		const match = meta.match(/\btitle=(?:"([^"]*)"|'([^']*)')/);
		return { title: match?.[1] ?? match?.[2] };
	},
	transformers: [{
		root(node) {
			const pre = node.children.find(child => child.type === 'element' && child.tagName === 'pre');
			if (!pre || pre.type !== 'element')
				return;

			const title = this.options.meta?.title;

			node.children = [{
				type: 'element',
				tagName: 'figure',
				properties: {
					class: 'code-block',
					...(pre.properties.style ? { style: pre.properties.style } : {}),
				},
				children: [
					...(title ? [{
						type: 'element' as const,
						tagName: 'figcaption',
						properties: { class: 'code-block-title' },
						children: [{ type: 'text' as const, value: title }],
					}] : []),
					{
						type: 'element',
						tagName: 'button',
						properties: {
							type: 'button',
							class: 'code-copy-button',
							dataCopyCode: '',
							ariaLabel: 'Copy code to clipboard',
							ariaLive: 'polite',
						},
						children: [{ type: 'text', value: 'Copy' }],
					},
					pre,
				],
			}];
		},
	}],
}));

export type Data = {
	post: Post,
	html: string,
};

export async function data(pageContext: PageContextServer): Promise<Data> {
	const post = getPost(pageContext.routeParams.slug!);

	return {
		post,
		html: await md.renderAsync(post.content),
	};
}
