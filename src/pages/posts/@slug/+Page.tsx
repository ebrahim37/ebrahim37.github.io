import { useData } from 'vike-solid/useData';
import { useConfig } from 'vike-solid/useConfig';

import type { Data } from './+data.ts';
import { formatDate } from '~/utils/formatDate.ts';

export function Page() {
	const data = useData<Data>();
	useConfig()({
		title: data.post.title,
		description: data.post.subtitle,
	});
	const handleCodeCopy = async (event: MouseEvent) => {
		const button = (event.target as Element).closest<HTMLElement>('[data-copy-code]');
		if (!button)
			return;

		const codeElement = button.closest('.code-block')?.querySelector('code');
		if (!codeElement)
			return;
		const copy = codeElement.cloneNode(true) as HTMLElement;
		copy.querySelector('[data-copy-code]')?.remove();
		const code = copy.textContent ?? '';

		try {
			await navigator.clipboard.writeText(code);
			button.textContent = 'Copied';
			setTimeout(() => {
				button.textContent = 'Copy';
			}, 1500);
		} catch {
			button.textContent = 'Couldn’t copy';
			setTimeout(() => {
				button.textContent = 'Copy';
			}, 1800);
		}
	};
	return (
		<article>
			<header>
				<div class='post-meta'>
					<time class='tabular-nums' datetime={(new Date(data.post.timestamp)).toISOString()}>
						{formatDate(data.post.timestamp)}
					</time>
					<span>{data.post.minutes} min read</span>
				</div>
				<h1 class='post-title'>{data.post.title}</h1>
				<p class='post-subtitle'>{data.post.subtitle}</p>
			</header>
			<div
				class='markdown-article w-full text-left'
				onClick={handleCodeCopy}
				innerHTML={data.html}
			/>
		</article>
	);
}
