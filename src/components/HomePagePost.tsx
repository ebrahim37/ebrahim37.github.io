import { type Component, createSignal, onMount } from 'solid-js';

import type { Post } from '~/utils/posts.ts';
import { formatDate, formatRelativeDate } from '~/utils/formatDate.ts';

const DocumentIcon = () => (
	<svg class='post-card-icon' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
		<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
	</svg>
);

export const HomePagePost: Component<{ post: Post }> = props => {
	const [relativeDate, setRelativeDate] = createSignal(formatDate(props.post.timestamp));
	onMount(() => setRelativeDate(formatRelativeDate(props.post.timestamp)));

	return (
		<li>
			<a class='list-card post-card' href={`/posts/${props.post.slug}`}>
				<div class='mb-1 flex items-center gap-2'>
					<DocumentIcon />
					<h2 class='card-title'>{props.post.title}</h2>
				</div>
				<p class='mb-2 text-sm text-[var(--gray)]'>{props.post.subtitle}</p>
				<p class='mt-1 text-xs text-[var(--gray)] tabular-nums'>
					<time datetime={(new Date(props.post.timestamp)).toISOString()}>
						<span class='date-relative'>{relativeDate()}</span>
						<span class='date-absolute'>{formatDate(props.post.timestamp)}</span>
					</time>
				</p>
			</a>
		</li>
	);
};
