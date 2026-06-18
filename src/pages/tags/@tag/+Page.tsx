import { For, Show } from 'solid-js';
import { useData } from 'vike-solid/useData';
import { useConfig } from 'vike-solid/useConfig';

import type { Data } from './+data';
import { Header } from '~/components/Header.tsx';
import { Section } from '~/components/Section.tsx';
import { HomePagePost } from '~/components/HomePagePost.tsx';

export function Page() {
	const data = useData<Data>();
	useConfig()({
		title: `${data.tag.name} articles / Ebrahim Haghshenas`,
		description: `Dive into my "${data.tag.name}" articles.`,
	});

	return (
		<>
			<Header isResume={false} />
			<Section comp='div' cnArg='min-h-full flex flex-col'>
				<h2 class='px-4 pt-4 text-[1.875rem] font-normal md:px-8 md:pt-8'>
					{data.tag.name}
				</h2>
				<For each={data.posts}>{(post, i) =>
					<>
						<HomePagePost post={post} />
						<Show when={i() !== data.posts.length - 1}>
							<div class='w-full h-px bg-[#e2e8f0] dark:bg-[#334155]' />
						</Show>
					</>
				}</For>
			</Section>
		</>
	);
}