import { createMarkdownExit } from 'markdown-exit';
import Shiki from '@shikijs/markdown-exit';

const md = createMarkdownExit({
	html: true, // allow HTML in Markdown
});

md.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
	const token = tokens[index]!;
	token.attrSet('target', '_blank');
	token.attrSet('rel', 'noopener noreferrer');

	return renderer.renderToken(tokens, index, options, env);
};

md.use(Shiki({
	themes: {
		light: 'vitesse-light',
		dark: 'vitesse-dark',
	},
	defaultColor: 'light-dark()',
	// pass title="..." from a code block to the transformer
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
			const copyButton = {
				type: 'element' as const,
				tagName: 'span',
				properties: {
					class: 'code-copy-button',
					dataCopyCode: '',
					ariaLive: 'polite',
				},
				children: [{ type: 'text' as const, value: 'Copy' }],
			};
			if (!title) {
				const code = pre.children.find(child => child.type === 'element' && child.tagName === 'code');

				if (code?.type === 'element')
					code.children.unshift(copyButton);
			}

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
						children: [
							{ type: 'element' as const, tagName: 'span', properties: {}, children: [{ type: 'text' as const, value: title }] },
							copyButton,
						],
					}] : []),
					pre,
				],
			}];
		},
	}],
}));

export const renderMarkdown = (content: string) => md.renderAsync(content);
