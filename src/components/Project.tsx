import type { Component } from 'solid-js';
import { For } from 'solid-js';

export const Project: Component<{
	name: string;
	link: string;
	description: string;
	tags: string[];
}> = props => {
	return (
		<a href={props.link} class='relative grow rounded-md p-2 bg-slate-200 dark:bg-stone-900 hover:opacity-70'>
			<div class='text-xl font-semibold mb-1'>
				{props.name}
			</div>
			<div class='text-base mb-7'>
				{props.description}
			</div>
			<div class='m-2 absolute bottom-0 right-0 flex gap-x-2 items-end justify-end'>
				<For each={props.tags}>{(tag) =>
					<span class='text-xs px-1 rounded-[4px] border border-black dark:border-white'>
						{tag}
					</span>
				}</For>
			</div>
		</a>
	);
};