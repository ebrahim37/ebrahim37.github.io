import { type Component, createSignal, onMount } from 'solid-js';

import type { Post } from '~/utils/posts.ts';
import { formatDate, formatRelativeDate } from '~/utils/formatDate.ts';
import { DocumentIcon } from '~/components/Icons.tsx';

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
				<p class='mb-2 text-sm text-(--gray)'>{props.post.subtitle}</p>
				<p class='mt-1 text-xs text-(--gray) tabular-nums'>
					<time datetime={(new Date(props.post.timestamp)).toISOString()}>
						<span class='date-relative'>{relativeDate()}</span>
						<span class='date-absolute'>{formatDate(props.post.timestamp)}</span>
					</time>
					<span class='post-reading-time'> · {props.post.minutes} min read</span>
				</p>
			</a>
		</li>
	);
};
