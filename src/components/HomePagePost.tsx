import { type Component, createSignal, onMount } from 'solid-js';

import type { Post } from '~/utils/posts.ts';
import { getRelativeTime } from '~/utils/relativeTime.ts';
import { CoverImage } from '~/components/CoverImage.tsx';
import { TagLinks } from '~/components/TagLinks.tsx';

export const HomePagePost: Component<{ post: Post }> = props => {
	const [relativeTime, setRelativeTime] = createSignal('? days ago');
	onMount(() => {
		setRelativeTime(getRelativeTime(props.post.timestamp));
	});

	return (
		<article class='flex flex-col gap-4 p-4 md:p-8'>
			<div class='flex gap-2 text-[0.75rem] leading-snug font-light text-[#64748b] dark:text-[#94a3b8]'>
				<time datetime={(new Date(props.post.timestamp)).toJSON()}>
					{relativeTime()}
				</time>
				<span>—</span>
				<TagLinks tags={props.post.tags} />
			</div>
			<a class='flex flex-col gap-4 text-inherit no-underline' href={`/posts/${props.post.slug}`}>
				<div class='flex flex-col gap-2'>
					<h3 class='text-[1.25rem] font-normal text-[#1e293b] dark:text-white'>
						{props.post.title}
					</h3>
					<p>
						{props.post.subtitle}
					</p>
				</div>
				{props.post.image &&
					<div class='relative h-74 w-full'>
						<CoverImage
							alt={props.post.image.alt}
							src={props.post.image.src}
							imgClass='min-h-full min-w-full max-h-full max-w-full rounded-2xl object-cover'
						/>
					</div>
				}
				<div class='font-normal'>
					{props.post.words} words · {props.post.minutes} min read
				</div>
			</a>
		</article>
	);
};