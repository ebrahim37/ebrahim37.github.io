import { For, createEffect, createSignal, onMount } from 'solid-js';
import { useData } from 'vike-solid/useData';
import { useConfig } from 'vike-solid/useConfig';

import type { Data } from './+data';
import { Header } from '~/components/Header.tsx';
import { Section } from '~/components/Section.tsx';
import { getRelativeTime } from '~/utils/relativeTime.ts';

export function Page() {
	const data = useData<Data>();
	const config = useConfig();
	const [relativeTime, setRelativeTime] = createSignal('0 days ago');
	createEffect(() => {
		config({
			title: `${data.post.title} / Ebrahim Haghshenas`,
			description: data.post.subtitle,
		});
	});
	onMount(() => {
		setRelativeTime(getRelativeTime(data.post.timestamp));
	});

	return (
		<>
			<Header isResume={false} />
			<Section comp='article' cnArg='min-h-full flex flex-col gap-4'>
				<div class='pt-4 px-4 md:pt-8 md:px-8 gap-4 shrink-0 flex flex-col'>
					<div class='text-[#64748b] dark:text-[#94a3b8] text-[0.75rem] leading-snug tracking-normal font-light gap-2 shrink-0 flex flex-wrap justify-start'>
						<div>
							<time datetime={(new Date(data.post.timestamp)).toJSON()}>
								{relativeTime()}
							</time>
							<span> · </span>
							{data.post.minutes} min read
						</div>
						<span>{"\u2014"}</span>
						<ul class='gap-2 shrink-0 flex list-none'>
							<For each={data.post.tags}>{tag =>
								<li>
									<a class='text-[#1d4ed8] dark:text-[#60a5fa] font-medium no-underline hover:underline' href={`/tags/${tag.slug}`}>{tag.name}</a>
								</li>
							}</For>
						</ul>
					</div>
					<div class='gap-4 shrink-0 flex flex-col'>
						<h1 class='text-[1.5rem] font-normal text-[#1e293b] dark:text-white shrink-0'>
							{data.post.title}
						</h1>
						<h2 class='leading-5.5 font-light text-[1.125rem] text-[#1e293b] dark:text-white shrink-0'>
							{data.post.subtitle}
						</h2>
					</div>
				</div>
				<div class='px-4 pb-4 md:px-8 md:pb-8 gap-4 md:gap-8 shrink-0 flex flex-col'>
					<div class='max-w-[80ch] text-left leading-[1.75] shrink-0'>
						<div innerHTML={data.html} />
					</div>
				</div>
			</Section>
		</>
	);
}
