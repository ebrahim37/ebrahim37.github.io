import { For, createEffect } from 'solid-js';
import { useData } from 'vike-solid/useData';
import { useConfig } from 'vike-solid/useConfig';

import type { Data } from './+data';
import { Header } from '~/components/Header.tsx';
import { Section } from '~/components/Section.tsx';
import { HomePagePost } from '~/components/HomePagePost.tsx';

export function Page() {
	const data = useData<Data>();
	const config = useConfig();
	createEffect(() => {
		config({
			title: `${data.tag.name} articles / Ebrahim Haghshenas`,
			description: `Dive into my "${data.tag.name}" articles.`,
		});
	});

	return (
		<>
			<Header isResume={false} />
			<Section comp='div' cnArg='min-h-full flex flex-col'>
				<h2 class='text-[1.875rem] pt-4 px-4 md:pt-8 md:px-8 font-normal shrink-0'>
					{data.tag.name}
				</h2>
				<For each={data.posts}>{(post, i) =>
					<HomePagePost
						post={post}
						topBorder={i() === 0 ? false : true}
						bottomBorder={i() === (data.posts.length - 1) ? false : true}
					/>
				}</For>
			</Section>
		</>
	);
}
