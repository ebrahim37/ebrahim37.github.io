import { For, type Component } from 'solid-js';

import type { Tag } from '~/utils/posts.ts';

export const TagLinks: Component<{
	tags: Tag[],
}> = props => (
	<ul class='gap-2 shrink-0 flex list-none'>
		<For each={props.tags}>{tag =>
			<li>
				<a class='text-[#1d4ed8] dark:text-[#60a5fa] font-medium no-underline hover:underline' href={`/tags/${tag.slug}`}>{tag.name}</a>
			</li>
		}</For>
	</ul>
);