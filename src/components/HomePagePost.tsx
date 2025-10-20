import { Component, For, createSignal, onMount } from 'solid-js';
import { A } from '@solidjs/router';

import { cn } from '~/utils/cn.ts';
import { getReadingTime, TAGS } from '~/utils/posts.ts';
import { getRelativeTime } from '~/utils/relativeTime.ts';

export const HomePagePost: Component<{
	slug: string,
	title: string,
	subtitle: string,
	tags: string[],
	timestamp: number,
	image: string,
	topBorder: boolean,
	bottomBorder: boolean,
}> = props => {
	const [relativeTime, setRelativeTime] = createSignal('0 days ago');
	onMount(() => {
		setRelativeTime(getRelativeTime(props.timestamp));
	});

	const stats = getReadingTime(props.slug);
	const tagsArr = props.tags.map(x => ({
		slug: x,
		name: TAGS.find(y => y.slug === x)!.name,
	}));

	return (
		<article class={cn(
			'p-4 md:p-8 gap-4 flex flex-col border-[#e2e8f0] dark:border-[#334155]',
			props.topBorder && 'border-t-[0.5px]',
			props.bottomBorder && 'border-b-[0.5px]',
		)}>
			<div class='text-[#64748b] dark:text-[#94a3b8] text-[0.75rem] leading-[1.375] tracking-normal font-light gap-2 shrink-0 flex'>
				<time datetime={(new Date(props.timestamp)).toJSON()}>
					{relativeTime()}
				</time>
				<span>—</span>
				<ul class='gap-2 shrink-0 flex list-none'>
					<For each={tagsArr}>{tag =>
						<li>
							<A class='text-[#1d4ed8] dark:text-[#60a5fa] font-medium no-underline hover:underline' href={`/tags/${tag.slug}`}>{tag.name}</A>
						</li>
					}</For>
				</ul>
			</div>
			<A class='gap-4 shrink-0 flex flex-col' href={`/posts/${props.slug}`}>
				<div class='gap-2 shrink-0 flex flex-col'>
					<h3 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white shrink-0'>
						{props.title}
					</h3>
					<p class='shrink-0'>
						{props.subtitle}
					</p>
				</div>
				<div class='relative w-full h-[296px] shrink-0'>
					<span class='box-border block overflow-hidden w-[initial] h-[initial] bg-none absolute inset-0'>
						<img
							alt='A screenshot of a Neovide window on macOS'
							src={props.image}
							class='block min-w-full max-w-full min-h-full max-h-full object-cover rounded-[1rem]'
						/>
					</span>
				</div>
				<div class='font-normal shrink-0'>
					{stats.words?.toFixed()} words · {stats.minutes?.toFixed()} min read
				</div>
			</A>
		</article>
	);
};
