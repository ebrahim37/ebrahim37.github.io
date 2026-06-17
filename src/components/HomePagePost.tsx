import { type Component, createSignal, onMount } from 'solid-js';

import type { Post } from '~/utils/posts.ts';
import { getRelativeTime } from '~/utils/relativeTime.ts';
import { cn } from '~/utils/cn.ts';
import { CoverImage } from '~/components/CoverImage.tsx';
import { TagLinks } from '~/components/TagLinks.tsx';

export const HomePagePost: Component<{
	post: Post,
	topBorder: boolean,
	bottomBorder: boolean,
}> = props => {
	const [relativeTime, setRelativeTime] = createSignal('0 days ago');
	onMount(() => {
		setRelativeTime(getRelativeTime(props.post.timestamp));
	});

	return (
		<article class={cn(
			'p-4 md:p-8 gap-4 flex flex-col border-[#e2e8f0] dark:border-[#334155]',
			props.topBorder && 'border-t-[0.5px]',
			props.bottomBorder && 'border-b-[0.5px]',
		)}>
			<div class='text-[#64748b] dark:text-[#94a3b8] text-[0.75rem] leading-snug tracking-normal font-light gap-2 shrink-0 flex'>
				<time datetime={(new Date(props.post.timestamp)).toJSON()}>
					{relativeTime()}
				</time>
				<span>—</span>
				<TagLinks tags={props.post.tags} />
			</div>
			<a class='gap-4 shrink-0 flex flex-col no-underline text-inherit' href={`/posts/${props.post.slug}`}>
				<div class='gap-2 shrink-0 flex flex-col'>
					<h3 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white shrink-0'>
						{props.post.title}
					</h3>
					<p class='shrink-0'>
						{props.post.subtitle}
					</p>
				</div>
				<div class='relative w-full h-74 shrink-0'>
					<CoverImage
						alt='A screenshot of a Neovide window on macOS'
						src={props.post.image}
						imgClass='block min-w-full max-w-full min-h-full max-h-full object-cover rounded-2xl'
					/>
				</div>
				<div class='font-normal shrink-0'>
					{props.post.words} words · {props.post.minutes} min read
				</div>
			</a>
		</article>
	);
};