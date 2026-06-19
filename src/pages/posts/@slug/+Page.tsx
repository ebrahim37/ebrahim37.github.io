import { useData } from 'vike-solid/useData';
import { useConfig } from 'vike-solid/useConfig';

import type { Data } from './+data.ts';
import { createRelativeTime } from '~/utils/relativeTime.ts';
import { Header } from '~/components/Header.tsx';
import { Section } from '~/components/Section.tsx';
import { TagLinks } from '~/components/TagLinks.tsx';

export function Page() {
	const data = useData<Data>();
	useConfig()({
		title: `${data.post.title} / Ebrahim Haghshenas`,
		description: data.post.subtitle,
	});
	const relativeTime = createRelativeTime(data.post.timestamp);

	const handleCodeCopy = async (event: MouseEvent) => {
		const button = (event.target as Element).closest<HTMLButtonElement>('[data-copy-code]');
		if (!button)
			return;

		const code = button.closest('.code-block')?.querySelector('code')?.textContent;
		if (code == null)
			return;

		await navigator.clipboard.writeText(code);
		button.textContent = 'Copied!';
		setTimeout(() => {
			button.textContent = 'Copy';
		}, 1500);
	};

	return (
		<>
			<Header isResume={false} />
			<Section comp='article' cnArg='min-h-full min-w-0 flex flex-col gap-4'>
				<div class='flex flex-col gap-4 px-4 pt-4 md:px-8 md:pt-8'>
					<div class='flex flex-wrap gap-2 text-[0.75rem] leading-snug font-light text-[#64748b] dark:text-[#94a3b8]'>
						<div>
							<time datetime={(new Date(data.post.timestamp)).toJSON()}>
								{relativeTime()}
							</time>
							<span> · </span>
							{data.post.minutes} min read
						</div>
						<span>—</span>
						<TagLinks tags={data.post.tags} />
					</div>
					<div class='flex flex-col gap-4'>
						<h1 class='text-[1.5rem] font-normal text-[#1e293b] dark:text-white'>
							{data.post.title}
						</h1>
						<h2 class='text-[1.125rem] leading-[1.375] font-light text-[#1e293b] dark:text-white'>
							{data.post.subtitle}
						</h2>
					</div>
				</div>
				<div class='flex min-w-0 flex-col gap-4 px-4 pb-4 md:gap-8 md:px-8 md:pb-8'>
					<div
						class='markdown-article w-full max-w-[80ch] text-left leading-[1.75]'
						onClick={handleCodeCopy}
						innerHTML={data.html}
					/>
				</div>
			</Section>
		</>
	);
}